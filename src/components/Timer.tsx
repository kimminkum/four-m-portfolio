import React, { useEffect, useState } from "react";

interface TimerProps {
  dday: string;
  Ds: Array<"days" | "hours" | "minutes" | "seconds">;
}

const Timer: React.FC<TimerProps> = ({ dday, Ds }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(dday);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };

        if (!Ds.includes("days")) {
          timeLeft.hours += timeLeft.days * 24;
          timeLeft.days = 0;
        }
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [dday, Ds]);

  return (
    <div>
      {Ds.includes("days") && <span>{timeLeft.days}일 </span>}
      {Ds.includes("hours") && <span>{timeLeft.hours}시간 </span>}
      {Ds.includes("minutes") && <span>{timeLeft.minutes}분 </span>}
      {Ds.includes("seconds") && <span>{timeLeft.seconds}초 </span>}
    </div>
  );
};

export default Timer;
