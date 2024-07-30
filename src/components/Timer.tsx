import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #646464;
`;

const TimerBox = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  max-width: 554px;
  color: white;
`;

const Circle = styled.li`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #161616;
  align-items: center;
  font-size: min(30px, calc(18 / 750 * 100vw));
  padding: 0 10px;
`;

const Box = styled.li`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #161616;
  align-items: center;
  font-size: min(30px, calc(18 / 750 * 100vw));
  padding: 0 10px;
`;

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
    <TimerContainer>
      <TimerBox>
        {Ds.includes("days") && <Circle>{timeLeft.days}</Circle>}
        {Ds.includes("hours") && <Box>{timeLeft.hours} </Box>}
        {Ds.includes("minutes") && <Circle>{timeLeft.minutes} </Circle>}
        {Ds.includes("seconds") && <Box>{timeLeft.seconds} </Box>}
      </TimerBox>
    </TimerContainer>
  );
};

export default Timer;
