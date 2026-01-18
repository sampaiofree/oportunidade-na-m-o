import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { initMetaPixel, sanitizePixelId } from "@/lib/metaPixel";

export const MetaPixelLoader = () => {
  const [searchParams] = useSearchParams();
  const pixelParam = searchParams.get("pixel");

  useEffect(() => {
    const pixelId = sanitizePixelId(pixelParam);
    if (!pixelId) {
      return;
    }

    initMetaPixel(pixelId);
  }, [pixelParam]);

  return null;
};
