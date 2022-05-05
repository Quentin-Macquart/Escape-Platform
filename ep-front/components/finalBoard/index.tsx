import React, { useEffect, useState } from "react";
import ButtonRotation from "../buttonRotation";
import DraggableArea from "./draggableArea";
import SFinalBoard from "./style";

type standardObject = { type: string; pos: number };

const defaultPanelTop: {
  id: number;
  type: string;
  pos: number;
}[] = [
  { id: 1, type: "Wm", pos: 0 },
  { id: 2, type: "09", pos: 180 },
];

const defaultPanelBottom: {
  id: number;
  type: string;
  pos: number;
}[] = [
  { id: 3, type: "qp", pos: 90 },
  { id: 4, type: "jR", pos: 0 },
];

/**
 *
 * @returns {React.ReactElement} a component which display the last board to win
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

  const handleDragStart = (index: number, element: standardObject) => {
    setDragItemActive(element);
  };

  const handleDragOver = (e: any, index: number, element: any) => {
    e.target.style.backgroundColor = "#bbcc26";
  };

  const handleDragLeave = (e: any) => {
    e.target.style.border = "1px solid blue";
  };

  // const onDragEnd = (e: any) => {
  //   e.target.style.display = "none";
  // };

  return (
    <SFinalBoard>
      <ul className="topButtons">
        {panelTop.map((element, index) => {
          return (
            <li
              draggable
              key={index}
              onDragStart={() => handleDragStart(index, element)}
              onDrag={() => {
                handleDragStart(index, element);
              }}
              onDragEnd={(e) => {
                // onDragEnd(e);
              }}
            >
              <ButtonRotation
                index={index}
                key={index}
                setPosition={setCircuitPos}
                locationCode={element}
              />
            </li>
          );
        })}
      </ul>

      <section>
        <div className="emptyBoard">
          <ul>
            {panels.map((element, index) => {
              return (
                <DraggableArea
                  index={index}
                  defaultElement={element}
                  dragItemActive={dragItemActive}
                />
              );
            })}
          </ul>
        </div>
      </section>

      <ul className="bottomButtons">
        {panelBot.map((element, index) => {
          return (
            <li
              draggable
              key={index}
              onDragStart={() => handleDragStart(index, element)}
              onDrag={() => {
                handleDragStart(index, element);
              }}
              onDragEnd={(e) => {
                // onDragEnd(e);
              }}
            >
              <ButtonRotation
                index={index}
                key={index}
                setPosition={setCircuitPos}
                locationCode={element}
              />
            </li>
          );
        })}
      </ul>
    </SFinalBoard>
  );
};

export default FinalBoard;
