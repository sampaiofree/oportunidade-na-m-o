import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";

type CountdownTimerProps = {
  durationMinutes?: number;
  storageKey?: string;
  onExpire?: () => void;
};

export const CountdownTimer = ({
  durationMinutes = 5,
  storageKey = "countdownDeadline",
  onExpire,
}: CountdownTimerProps) => {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const hasNotifiedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedDeadline = storageKey ? localStorage.getItem(storageKey) : null;
    const parsedDeadline = storedDeadline ? parseInt(storedDeadline, 10) : NaN;
    const existingDeadline = Number.isFinite(parsedDeadline) ? parsedDeadline : null;
    const newDeadline =
      existingDeadline ?? Date.now() + durationMinutes * 60 * 1000;

    if (!existingDeadline && storageKey) {
      localStorage.setItem(storageKey, newDeadline.toString());
    }

    setDeadline(newDeadline);
  }, [durationMinutes, storageKey]);

  useEffect(() => {
    if (!deadline) return;

    const tick = () => {
      const now = Date.now();
      const remainingMs = deadline - now;

      if (remainingMs <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        if (!hasNotifiedRef.current) {
          hasNotifiedRef.current = true;
          onExpire?.();
        }
        return false;
      }

      const totalSeconds = Math.floor(remainingMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ hours, minutes, seconds });
      return true;
    };

    tick();
    const timer = setInterval(() => {
      const stillRunning = tick();
      if (!stillRunning) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, onExpire]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-white border border-primary/70 rounded-xl px-3 py-2 inline-flex items-center gap-3 animate-countdown">
      <Clock className="w-5 h-5 text-primary" />
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-foreground/80 whitespace-nowrap">Inscriçoes terminam em:</span>
        <div className="flex items-center gap-1 font-bold text-sm text-primary">
          <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
            {formatNumber(timeLeft.hours)}
          </span>
          <span>:</span>
          <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span>:</span>
          <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};
