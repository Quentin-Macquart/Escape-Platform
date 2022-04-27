import React, { useState, useEffect } from 'react';

interface ButtonRotationProps {
  setCircuitPos: React.Dispatch<
    React.SetStateAction<{ type: string; pos: number }>
  >;
  circuit: { type: string; pos: number };
}

/**
 * Button rotating on click
 * @prop {function} setCircuitPos update the value of circuitPos
 * @prop {{string, number}} circuit type and actual position of the circuit
 * @returns {React.ReactElement} button that rotate on click and update circuit's position
 */
const ButtonRotation: React.ComponentType<ButtonRotationProps> = ({
  setCircuitPos,
  circuit,
}) => {
  const [rotateNeeded, setRotateNeeded] = useState<boolean>(false);
  const [oneRotate, setOneRotate] = useState<number>(0);

  const style: { transform: string; transition: string } = {
    transform: `rotate(${oneRotate}deg)`,
    transition: 'transform 70ms ease',
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
  const posHandler = (currCircuit: typeof circuit) => {
    setCircuitPos({
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
  const rotateClick = (targetCircuit: typeof circuit) => {
    if (targetCircuit.pos !== 1) {
      setRotateNeeded(!rotateNeeded);
      retrieveAngle();
      posHandler(targetCircuit);
    }
  };

  useEffect(() => {
    circuit.pos !== 1 && setOneRotate(circuit.pos);
  }, []);

  return (
    <button
      style={style}
      onClick={() => rotateClick(circuit)}
      //   className={`square${index}`}
    >
      {circuit.pos === 1 ? 'G' : `${circuit.type}${circuit.pos}`}
    </button>
  );
};

export default ButtonRotation;
