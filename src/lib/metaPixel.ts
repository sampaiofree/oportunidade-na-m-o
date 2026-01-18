type FbqCommand = (...args: unknown[]) => void;

type Fbq = FbqCommand & {
  callMethod?: FbqCommand;
  queue?: unknown[];
  push?: FbqCommand;
  loaded?: boolean;
  version?: string;
};

type MetaPixelWindow = Window & {
  fbq?: Fbq;
  _fbq?: Fbq;
  __metaPixelIds?: string[];
};

const META_PIXEL_SCRIPT_ID = "meta-pixel-script";
const META_PIXEL_NOSCRIPT_PREFIX = "meta-pixel-noscript-";
const META_PIXEL_SCRIPT_SRC = "https://connect.facebook.net/en_US/fbevents.js";

export const sanitizePixelId = (raw?: string | null) => raw?.replace(/\D/g, "") ?? "";

const getMetaWindow = () => window as MetaPixelWindow;

const ensureFbq = () => {
  const metaWindow = getMetaWindow();
  if (metaWindow.fbq) {
    return metaWindow.fbq;
  }

  const fbq: Fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }

    if (!fbq.queue) {
      fbq.queue = [];
    }

    fbq.queue.push(args);
  }) as Fbq;

  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = fbq.queue ?? [];
  fbq.push = fbq;

  metaWindow.fbq = fbq;
  if (!metaWindow._fbq) {
    metaWindow._fbq = fbq;
  }

  if (!document.getElementById(META_PIXEL_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = META_PIXEL_SCRIPT_ID;
    script.async = true;
    script.src = META_PIXEL_SCRIPT_SRC;

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  return fbq;
};

const ensureNoScriptPixel = (pixelId: string) => {
  const noscriptId = `${META_PIXEL_NOSCRIPT_PREFIX}${pixelId}`;
  if (document.getElementById(noscriptId)) {
    return;
  }

  const noscript = document.createElement("noscript");
  noscript.id = noscriptId;
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
  document.body.appendChild(noscript);
};

export const initMetaPixel = (rawPixelId: string) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const pixelId = sanitizePixelId(rawPixelId);
  if (!pixelId) {
    return;
  }

  const fbq = ensureFbq();
  const metaWindow = getMetaWindow();
  const knownIds = metaWindow.__metaPixelIds ?? [];

  if (!knownIds.includes(pixelId)) {
    fbq("init", pixelId);
    metaWindow.__metaPixelIds = [...knownIds, pixelId];
  }

  fbq("track", "PageView");
  ensureNoScriptPixel(pixelId);
};

export const trackMetaEvent = (eventName: string, data?: Record<string, unknown>) => {
  if (typeof window === "undefined") {
    return;
  }

  const metaWindow = getMetaWindow();
  if (!metaWindow.fbq || !metaWindow.__metaPixelIds?.length) {
    return;
  }

  if (data) {
    metaWindow.fbq("track", eventName, data);
  } else {
    metaWindow.fbq("track", eventName);
  }
};

export const trackMetaLead = () => trackMetaEvent("Lead");
