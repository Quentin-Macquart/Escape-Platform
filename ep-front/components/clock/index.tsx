import React, { useEffect, useState } from 'react';

import { soundEffect } from '../../lib/soundEffect';

import SClock from './style';

interface ClockProps {
  defaultHour: number;
  defaultMinute: number;
  modsNeedle: 'hour' | 'minute';
  needleState: React.Dispatch<React.SetStateAction<number>>;
  isResolved: boolean;
  clockColor: string;
}

/**
 * Component that display a clock which hour or minute needle will be movable depending the passed props
 * @prop {number} defaultHour starting value of the hour needle
 * @prop {number} defaultMinute starting value of the minute needle
 * @prop {string} modsNeedle set which needle is movable depending it's value
 * @prop {function} needleState handle the value of the needles state in the parent component
 * @prop {boolean} isResolved check if the needles position is the result we want
 * @prop {string} clockColor set the clock frame color
 * @returns {React.ReactElement} a svg clock with a movable needle when click on the button
 */
const Clock: React.ComponentType<ClockProps> = ({
  defaultHour,
  defaultMinute,
  modsNeedle,
  needleState,
  isResolved,
  clockColor,
}) => {
  const [hours] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [minuteNeedle, setMinuteNeedle] = useState<number>(defaultMinute);
  const [hourNeedle, setHourNeedle] = useState<number>(defaultHour);
  const [clockSound] = useState<string>('/game1/sounds/clock-3.mp3');
  const [unlockSound] = useState('/game1/sounds/unlock-2.mp3');

  /**
   * Handle the needle position change when clicking on the buttons
   * @param {number} moveDirection new value to calculate the new needle position
   */
  const handleNeedleMove = (moveDirection: number) => {
    if (isResolved === false) {
      if (modsNeedle === 'hour') {
        switch (moveDirection) {
          case 13:
            setHourNeedle(1);
            break;
          case 0:
            setHourNeedle(12);
            break;
          default:
            setHourNeedle(moveDirection);
            break;
        }
      }

      if (modsNeedle === 'minute') {
        switch (moveDirection) {
          case 13:
            setMinuteNeedle(1);
            break;
          case 0:
            setMinuteNeedle(12);
            break;
          default:
            setMinuteNeedle(moveDirection);
            break;
        }
      }
      soundEffect(clockSound);
    }
  };

  //Settle the default hour value if it isn't between 1 and 12
  useEffect(() => {
    if (defaultHour < 1) {
      setHourNeedle(1);
    }

    if (defaultHour > 12) {
      setHourNeedle(defaultHour % 12);
    }
  }, []);

  //Settle the default minute value if it isn't between 1 and 12
  useEffect(() => {
    if (defaultMinute < 1) {
      setMinuteNeedle(1);
    }

    if (defaultMinute > 12) {
      setMinuteNeedle(defaultMinute % 12);
    }
  }, []);

  //Check is the value needing update is hour or minute
  useEffect(() => {
    if (modsNeedle === 'hour') {
      needleState(hourNeedle);
    }
    if (modsNeedle === 'minute') {
      needleState(minuteNeedle);
    }
  }, [hourNeedle, minuteNeedle]);

  //Play the sound of unlock when the puzzle is solved
  useEffect(() => {
    if (isResolved === true) {
      soundEffect(unlockSound, 1000);
    }
  }, [isResolved]);

  return (
    <SClock>
      <svg width="200px" height="200px">
        <circle cx="100" cy="100" r="97" stroke="black" strokeWidth="2px" />
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke={clockColor}
          strokeWidth="7px"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="black"
          strokeWidth="2px"
          fill="white"
        />
        {hours.map((hour, index) => {
          return (
            <React.Fragment key={index}>
              <line
                stroke="black"
                strokeWidth="2px"
                x1="100"
                y1="12"
                x2="100"
                y2={hour % 3 ? '23' : '33'}
                transform={`rotate(${30 * hour} 100 100)`}
              />
            </React.Fragment>
          );
        })}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="40"
          stroke="black"
          strokeWidth="3px"
          transform={`rotate(${minuteNeedle * 30} 100 100)`}
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="60"
          stroke="black"
          strokeWidth="5px"
          transform={`rotate(${hourNeedle * 30} 100 100)`}
        />
        <circle
          cx="100"
          cy="100"
          r="3"
          fill="white"
          stroke="black"
          strokeWidth="3px"
        />
      </svg>
      <div className="clockButtons">
        <button
          onClick={() =>
            modsNeedle === 'hour'
              ? handleNeedleMove(hourNeedle - 1)
              : handleNeedleMove(minuteNeedle - 1)
          }
        >
          &#8634;
        </button>
        <button
          onClick={() =>
            modsNeedle === 'hour'
              ? handleNeedleMove(hourNeedle + 1)
              : handleNeedleMove(minuteNeedle + 1)
          }
        >
          &#8635;
        </button>
      </div>
    </SClock>
  );
};

export default Clock;
