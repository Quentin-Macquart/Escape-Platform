import React, { useState, useEffect } from "react";
import { soundEffect } from "../../lib/soundEffect";

interface ButtonRotationProps {
  setPosition: React.Dispatch<
    React.SetStateAction<{ type: string; pos: number }>
  >;
  locationCode: { type: string; pos: number };
  index: number;
}

/**
 * Button rotating on click
 * @prop {function} setPosition update the value of circuitPos
 * @prop {{string, number}} locationCode type and actual position of the circuit
 * @returns {React.ReactElement} button that rotate on click and update circuit's position
 */
const ButtonRotation: React.ComponentType<ButtonRotationProps> = ({
  setPosition,
  locationCode,
  index,
}) => {
  const [rotateNeeded, setRotateNeeded] = useState<boolean>(false);
  const [oneRotate, setOneRotate] = useState<number>(0);
  const [circuitSound] = useState<string>("/game1/sounds/circuit-4.mp3");

  const style: { transform: string; transition: string } = {
    transform: `rotate(${oneRotate}deg)`,
    transition: "transform 70ms ease",
  };

  /**
   * Rotate the clicked button
   */
  const retrieveAngle = () => {
    setOneRotate(oneRotate === 270 ? 0 : oneRotate + 90);
  };

  /**
   * Update the current circuit position
   * @param {{string, number}} currCircuit the circuit that was clicked
   */
  const posHandler = (currCircuit: typeof locationCode) => {
    setPosition({
      ...currCircuit,
      [currCircuit.pos]:
        currCircuit.pos === 270
          ? (currCircuit.pos = 0)
          : (currCircuit.pos += 90),
    });
  };

  /**
   * Function handling the previouses one to apply their effects on button's click
   * @param {{string, number}} targetCircuit circuit that was clicked and need the update
   */
  const rotateClick = (targetCircuit: typeof locationCode) => {
    if (targetCircuit.pos !== 1) {
      setRotateNeeded(!rotateNeeded);
      retrieveAngle();
      posHandler(targetCircuit);
      soundEffect(circuitSound);
    }
  };

  useEffect(() => {
    locationCode.pos !== 1 && setOneRotate(locationCode.pos);
  }, []);

  return (
    <button
      className={`square${index}`}
      style={style}
      onClick={() => rotateClick(locationCode)}
      draggable
    >
      {locationCode.pos === 1 ? "G" : `${locationCode.type}${locationCode.pos}`}
    </button>
  );
};

export default ButtonRotation;
