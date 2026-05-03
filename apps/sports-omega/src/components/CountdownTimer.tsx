import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Dagar", value: timeLeft.days },
    { label: "Timmar", value: timeLeft.hours },
    { label: "Minuter", value: timeLeft.minutes },
    { label: "Sekunder", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#f4e5a1] via-[#d4af37] to-[#c9a227] text-[#0a0e1a] rounded-lg p-2 shadow-[0_0_20px_rgba(212,175,55,0.5)] border border-[#f4e5a1] mb-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/10" />
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent" />
            <motion.div
              key={unit.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-bold relative z-10"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
