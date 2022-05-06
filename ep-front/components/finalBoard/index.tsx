import React, { useState } from "react";
import ButtonRotation from "../buttonRotation";
import DraggableArea from "./draggableArea";
import SFinalBoard from "./style";

type standardObject = { type: string; pos: number };
const defaultPanelTop: {
  type: string;
  pos: number;
}[] = [
  { type: "Wm", pos: 0 },
  { type: "09", pos: 180 },
];

const defaultPanelBottom: {
  type: string;
  pos: number;
}[] = [
  { type: "qp", pos: 90 },
  { type: "jR", pos: 0 },
];

interface PanelProps {
  panelType: { type: string; pos: number }[];
  setDragItemActive: React.Dispatch<
    React.SetStateAction<{ type: string; pos: number }>
  >;
  setPosition: React.Dispatch<
    React.SetStateAction<{ type: string; pos: number }>
  >;
}

/**
 * @returns a component which displays a bunch of squares that will be our pieces of paints
 */
const Panel: React.ComponentType<PanelProps> = ({
  panelType,
  setDragItemActive,
  setPosition,
}) => {
  /**
   * @param {standardObject} element object that will apply the function once its dragged
   */
  const handleOnDrag = (element: standardObject) => {
    setDragItemActive(element);
  };

  /** Add any type for the moment cause i can"t find the right type of the parameter
   * @param {any} e element selected will apply the CSS
   */
  const handleDragStart = (e: any) => {
    e.target.style.opacity = 0.5;
  };

  /** Add any type for the moment cause i can"t find the right type of the parameter
   * @param {any} e element selected will apply the CSS
   */
  const handleDragEnd = (e: any) => {
    e.target.style.opacity = 1;
  };

  return (
    <ul className="topButtons">
      {panelType.map((element, index) => {
        return (
          <li
            draggable
            key={index}
            onDragStart={(e) => {
              handleDragStart(e);
            }}
            onDrag={() => {
              handleOnDrag(element);
            }}
            onDragEnd={(e) => {
              handleDragEnd(e);
            }}
          >
            <ButtonRotation
              index={index}
              key={index}
              setPosition={setPosition}
              locationCode={element}
            />
          </li>
        );
      })}
    </ul>
  );
};

/**
 * Piece of room4, last board to complete the game
 * @returns {React.ReactElement} a complete board which reunite a draggable area + others blocks that will fill this area
 */
const FinalBoard: React.ComponentType = () => {
  const [angle, setAngle] = useState<number>(0);

  const defaultPanels: {
    type: string;
    pos: number;
  }[] = [
    { type: "A", pos: angle },
    { type: "B", pos: angle },
    { type: "C", pos: angle },
    { type: "D", pos: angle },
  ];

  const [panels, setPanels] = useState<typeof defaultPanels>(defaultPanels);
  const [panelTop, setPanelTop] =
    useState<typeof defaultPanelTop>(defaultPanelTop);
  const [panelBot, setPanelBot] =
    useState<typeof defaultPanelBottom>(defaultPanelBottom);
  const [dragItemActive, setDragItemActive] = useState<standardObject>({
    type: "",
    pos: 0,
  });
  const [circuitPos, setCircuitPos] = useState<standardObject>({
    type: "",
    pos: 0,
  });

  return (
    <SFinalBoard>
      <Panel
        panelType={panelTop}
        setDragItemActive={setDragItemActive}
        setPosition={setCircuitPos}
      />
      <section>
        <div className="emptyBoard">
          <ul>
            {panels.map((element, index) => {
              return (
                <DraggableArea
                  key={index}
                  index={index}
                  defaultElement={element}
                  dragItemActive={dragItemActive}
                />
              );
            })}
          </ul>
        </div>
      </section>

      <Panel
        panelType={panelBot}
        setDragItemActive={setDragItemActive}
        setPosition={setCircuitPos}
      />
    </SFinalBoard>
  );
};

export default FinalBoard;
