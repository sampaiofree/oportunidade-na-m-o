import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        // Reset to 24 hours when it reaches 0
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-primary/10 border-2 border-primary rounded-2xl p-4 inline-flex items-center gap-4 animate-countdown">
      <Clock className="w-6 h-6 text-primary" />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground/80">Oferta expira em:</span>
        <div className="flex items-center gap-1 font-bold text-xl text-primary">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
            {formatNumber(timeLeft.hours)}
          </span>
          <span>:</span>
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span>:</span>
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};
