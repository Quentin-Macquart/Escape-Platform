import React, { useState, useEffect } from 'react';
import { soundEffect } from '../../lib/soundEffect';

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
  const [circuitSound] = useState<string>('/game1/sounds/circuit-4.mp3');

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

  /**
   * Function to return a display depending the type of panel
   * /!\ svg will change to image later, not the final version of the function
   * @returns {SVGElement} svg that display the panel visual
   */
  const panelDisplay = () => {
    switch (locationCode.type) {
      case 'A':
        return (
          <svg width="100%" height="100%">
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="50%"
              stroke="crimson"
              strokeWidth="2px"
            />
            <line
              x1="50%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'B':
        return (
          <svg width="100%" height="100%">
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'C':
        return (
          <svg width="100%" height="100%">
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="crimson"
              strokeWidth="2px"
            />
            <line
              x1="50%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'D':
        return (
          <svg width="100%" height="100%">
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="crimson"
              strokeWidth="2px"
            />
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'G':
        return (
          <svg width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="25%"
              stroke="black"
              strokeWidth="2px"
              fill="crimson"
            />
            <circle
              cx="60%"
              cy="40%"
              r="5%"
              stroke="pink"
              strokeWidth="2px"
              fill="pink"
            />
            <line
              x1="50%"
              y1="75%"
              x2="50%"
              y2="100%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'K1':
        return (
          <svg width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="25%"
              stroke="black"
              strokeWidth="2px"
              fill="green"
            />
            <circle
              cx="60%"
              cy="40%"
              r="5%"
              stroke="lightgreen"
              strokeWidth="2px"
              fill="lightgreen"
            />
            <line
              x1="50%"
              y1="75%"
              x2="50%"
              y2="100%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'K2':
        return (
          <svg width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="25%"
              stroke="black"
              strokeWidth="2px"
              fill="orange"
            />
            <circle
              cx="60%"
              cy="40%"
              r="5%"
              stroke="yellow"
              strokeWidth="2px"
              fill="yellow"
            />
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="25%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'K3':
        return (
          <svg width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="25%"
              stroke="black"
              strokeWidth="2px"
              fill="blue"
            />
            <circle
              cx="60%"
              cy="40%"
              r="5%"
              stroke="lightblue"
              strokeWidth="2px"
              fill="lightblue"
            />
            <line
              x1="0%"
              y1="50%"
              x2="25%"
              y2="50%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      case 'K4':
        return (
          <svg width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="25%"
              stroke="black"
              strokeWidth="2px"
              fill="purple"
            />
            <circle
              cx="60%"
              cy="40%"
              r="5%"
              stroke="magenta"
              strokeWidth="2px"
              fill="magenta"
            />
            <line
              x1="0%"
              y1="50%"
              x2="25%"
              y2="50%"
              stroke="crimson"
              strokeWidth="2px"
            />
          </svg>
        );
        break;
      default:
        `${locationCode.type}${locationCode.pos}`;
        break;
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
      {panelDisplay()}
    </button>
  );
};

export default ButtonRotation;
