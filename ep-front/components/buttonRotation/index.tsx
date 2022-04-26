import React, { useState, useEffect } from 'react';
// import SElectrikBoard from "./style";
interface ButtonRotationProps {
  setCircuitPos: React.Dispatch<
    React.SetStateAction<{ type: string; pos: number }>
  >;
  circuit: { type: string; pos: number };
}

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

  const retrieveAngle = () => {
    setOneRotate(oneRotate === 270 ? 0 : oneRotate + 90);
  };

  const posHandler = (currCircuit: typeof circuit) => {
    setCircuitPos({
      ...currCircuit,
      [currCircuit.pos]:
        currCircuit.pos === 270
          ? (currCircuit.pos = 0)
          : (currCircuit.pos += 90),
    });
  };

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
      {/* {index} */}{' '}
      {circuit.pos === 1 ? 'G' : `${circuit.type}${circuit.pos}`}
    </button>
  );
};

export default ButtonRotation;
