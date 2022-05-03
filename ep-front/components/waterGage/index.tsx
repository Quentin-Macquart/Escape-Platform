import React, { useEffect, useState } from 'react';

import { soundEffect } from '../../lib/soundEffect';

import SWaterGage from './style';

/**
 * Components to play the water gages puzzle
 * @returns {React.ReactElement} water gage puzzle to play
 */
const WaterGage: React.ComponentType = () => {
  const [leftWater, setLeftWater] = useState<number>(30);
  const [rightWater, setRightWater] = useState<number>(15);
  const [isResolved, setIsResolved] = useState<boolean>(false);
  const [waterSound] = useState<string>('/game1/sounds/water-tube-2.mp3');

  /**
   * Function to handle the water level of the water gages
   * @param {number} leftLevel level of the left gage
   * @param {number} rightLevel level of the right gage
   */
  const handleWaterLevel = (leftLevel: number, rightLevel: number) => {
    if (isResolved === false) {
      setLeftWater(leftLevel <= 0 ? 0 : leftLevel >= 50 ? 50 : leftLevel);
      setRightWater(rightLevel <= 0 ? 0 : rightLevel >= 100 ? 100 : rightLevel);
      soundEffect(waterSound);
    }
  };

  useEffect(() => {
    if (leftWater === 18 && rightWater === 31) {
      setIsResolved(true);
    }
  }, [leftWater, rightWater]);

  return (
    <SWaterGage leftLevel={leftWater} rightLevel={rightWater}>
      <div className="gageContainer">
        <p> 50</p>
        <div className="gage">
          <div className="progress">
            <div className="water leftGage">
              <span>{leftWater}</span>
            </div>
          </div>
        </div>
        <p>0</p>
        <button
          className="leftButton"
          onClick={() => handleWaterLevel(leftWater + 2, rightWater - 5)}
        ></button>
      </div>

      <div className="gageContainer">
        <p>100</p>
        <div className="gage">
          <div className="progress">
            <div className="water rightGage">
              <span>{rightWater}</span>
            </div>
          </div>
        </div>
        <p>0</p>
        <button
          className="rightButton"
          onClick={() => handleWaterLevel(leftWater - 4, rightWater + 6)}
        ></button>
      </div>
    </SWaterGage>
  );
};

export default WaterGage;
