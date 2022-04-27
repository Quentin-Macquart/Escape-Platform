import React, { ComponentType, useState } from "react";
const ButtonRotation: ComponentType = () => {
  const [rotateNeeded, setRotateNeeded]: [boolean, Function] = useState(false);
  const [oneRotate, setOneRotate]: [number, Function] = useState(0);

  const retrieveAngle = () => {
    setOneRotate(oneRotate === 270 ? 0 : oneRotate + 90);
  };

  const rotateClick = () => {
    setRotateNeeded(!rotateNeeded);
    retrieveAngle();
  };

  return (
    <button
      style={{
        transform: `rotate(${oneRotate}deg)`,
        transition: "transform 70ms ease",
      }}
      onClick={rotateClick}
      //   className={`square${index}`}
    >
      {/* {index} */} une image
    </button>
  );
};

export default ButtonRotation;
