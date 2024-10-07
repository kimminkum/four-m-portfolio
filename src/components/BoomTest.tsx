import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const BoomContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  background-color: #000;
`;

const Ball = styled.div<{ color: string }>`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ClickText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: black;
`;

const starAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  100% { transform: scale(2) rotate(225deg); opacity: 0; }
`;

const StarEffect = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: yellow;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: ${starAnimation} 1s ease-out;
`;

const BoomTest = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(true);
  const [color, setColor] = useState("red");
  const [effects, setEffects] = useState<
    { type: string; x: number; y: number; id: number }[]
  >([]);

  const handleClick = () => {
    setShowText(false);
    const angle = Math.random() * 360;
    const speed = Math.random() * 9 + 1; // 1초에서 10초 사이의 속도
    setVelocity({
      x: speed * Math.cos(angle * (Math.PI / 180)),
      y: speed * Math.sin(angle * (Math.PI / 180)),
    });
  };

  useEffect(() => {
    if (showText) return;

    const interval = setInterval(() => {
      setPos((prevPos) => {
        let newX = prevPos.x + velocity.x;
        let newY = prevPos.y + velocity.y;
        let newVelocity = { ...velocity };

        if (newX <= 0 || newX >= window.innerWidth - 60) {
          newVelocity.x = -newVelocity.x;
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          const effectId = Date.now();
          setEffects((prevEffects) => [
            ...prevEffects,
            { type: "star", x: newX, y: newY, id: effectId },
          ]);
          setTimeout(() => {
            setEffects((prevEffects) =>
              prevEffects.filter((effect) => effect.id !== effectId)
            );
          }, 1000); // 1초 후 이펙트 제거
        }
        if (newY <= 0 || newY >= window.innerHeight - 120) {
          // 60px header + 60px ball height
          newVelocity.y = -newVelocity.y;
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          const effectId = Date.now();
          setEffects((prevEffects) => [
            ...prevEffects,
            { type: "star", x: newX, y: newY, id: effectId },
          ]);
          setTimeout(() => {
            setEffects((prevEffects) =>
              prevEffects.filter((effect) => effect.id !== effectId)
            );
          }, 1000); // 1초 후 이펙트 제거
        }

        setVelocity(newVelocity);
        return { x: newX, y: newY };
      });
    }, 16); // 약 60fps

    return () => clearInterval(interval);
  }, [velocity, showText]);

  return (
    <BoomContainer onClick={handleClick}>
      {showText && <ClickText>Click</ClickText>}
      <Ball
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        color={color}
      />
      {effects.map((effect) => (
        <StarEffect key={effect.id} style={{ top: effect.y, left: effect.x }} />
      ))}
    </BoomContainer>
  );
};

export default BoomTest;
