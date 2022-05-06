import { useState, useEffect } from "react";
import ButtonRotation from "../../buttonRotation";

type standardObject = { type: string; pos: number };

interface DraggableAreaProps {
  dragItemActive: standardObject;
  defaultElement: standardObject;
  index: number;
}

const DraggableArea: React.ComponentType<DraggableAreaProps> = ({
  dragItemActive,
  defaultElement,
  index,
}) => {
  const [circuitPos, setCircuitPos] = useState<standardObject>({
    type: "",
    pos: 0,
  });
  const [isTransfered, SetIsTransfered] = useState<boolean>(false);
  const [dragItemPassive, setDragItemPassive] = useState<standardObject>({
    type: "",
    pos: 0,
  });
  const [activeDragBoard, setActiveDragBoard] = useState<standardObject>({
    type: "",
    pos: 0,
  });

  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const style: { transform: string; transition: string } = {
    transform: `rotate(${rotationAngle}deg)`,
    transition: "transform 70ms ease",
  };

  /** Function which allows to transfer data from active element to passive element
   * It also display a state will allows to replace the default element for the active element
   *  Add any type for the moment cause i can"t find the right type of the parameter
   * @param {any} e element selected will apply the CSS
   *
   */
  const handleDrop = (e: any) => {
    e.target.style.border = "1px solid blue";
    SetIsTransfered(true);
    setRotationAngle(dragItemActive.pos);
  };

  return (
    <li
      style={style}
      draggable
      onDrop={(e) => {
        setDragItemPassive(dragItemActive);
        handleDrop(e);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <ButtonRotation
        index={index}
        setPosition={setCircuitPos}
        locationCode={isTransfered ? dragItemPassive : defaultElement}
      />
    </li>
  );
};

export default DraggableArea;
