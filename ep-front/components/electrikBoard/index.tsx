import React, { useState, useEffect } from 'react';

import ButtonRotation from '../buttonRotation';

import SElectrikBoard from './style';

const defaultPanel: { type: string; pos: number }[][] = [
  [
    { type: 'K1', pos: 1 },
    { type: 'B', pos: 180 },
    { type: 'A', pos: 90 },
    { type: 'C', pos: 0 },
    { type: 'K2', pos: 1 },
  ],
  [
    { type: 'C', pos: 180 },
    { type: 'A', pos: 270 },
    { type: 'C', pos: 0 },
    { type: 'A', pos: 90 },
    { type: 'B', pos: 90 },
  ],
  [
    { type: 'B', pos: 90 },
    { type: 'A', pos: 270 },
    { type: 'G', pos: 1 },
    { type: 'B', pos: 0 },
    { type: 'A', pos: 180 },
  ],
  [
    { type: 'C', pos: 90 },
    { type: 'A', pos: 270 },
    { type: 'A', pos: 0 },
    { type: 'C', pos: 90 },
    { type: 'A', pos: 180 },
  ],
  [
    { type: 'K3', pos: 1 },
    { type: 'A', pos: 270 },
    { type: 'A', pos: 0 },
    { type: 'C', pos: 0 },
    { type: 'K4', pos: 1 },
  ],
];

/**
 * Component displaying the electric board puzzle
 * @returns {React.ReactElement} Electric board puzzle with clickable buttons
 */
const ElectrikBoard: React.ComponentType = () => {
  const [panel] = useState<typeof defaultPanel>(defaultPanel);
  const [circuitPos, setCircuitPos] = useState<{ type: string; pos: number }>({
    type: '',
    pos: 0,
  });

  return (
    <SElectrikBoard>
      {panel.map((row, index) => {
        return (
          <div key={index}>
            {row.map((circuit) => {
              return (
                <ButtonRotation
                  index={index}
                  setPosition={setCircuitPos}
                  locationCode={circuit}
                />
              );
            })}
          </div>
        );
      })}
    </SElectrikBoard>
  );
};

export default ElectrikBoard;
