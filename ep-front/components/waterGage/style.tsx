import styled from 'styled-components';

interface SWaterGageProps {
  leftLevel: number;
  rightLevel: number;
}

const SWaterGage = styled.section<SWaterGageProps>`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .gageContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  .gageContainer button {
    width: 30px;
    height: 30px;
  }

  .gage {
    height: 200px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .progress {
    width: 30%;
    height: 95%;
    border: 1px solid 8080806b;
    border-radius: 50px;
    display: flex;
    align-items: flex-end;
    box-shadow: inset 0px 0px 5px 1px #8080806b;
  }

  .water {
    background-image: url('/[id]/gageWater.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    border-radius: 0 0 50px 50px;
    width: 100%;
    max-height: 100%;
    transition: 1s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .leftGage {
    animation-name: movingWaterLeft;
    height: ${({ leftLevel }) => leftLevel * 2}%;
  }

  .rightGage {
    animation-name: movingWaterRight;
    height: ${({ rightLevel }) => rightLevel}%;
  }

  @keyframes movingWaterLeft {
    0% {
      height: ${({ leftLevel }) => (leftLevel + 0.5) * 2}%;
    }
    50% {
      height: ${({ leftLevel }) => (leftLevel - 0.5) * 2}%;
    }
    100% {
      height: ${({ leftLevel }) => (leftLevel + 0.5) * 2}%;
    }
  }

  @keyframes movingWaterRight {
    0% {
      height: ${({ rightLevel }) => rightLevel + 0.5}%;
    }
    50% {
      height: ${({ rightLevel }) => rightLevel - 0.5}%;
    }
    100% {
      height: ${({ rightLevel }) => rightLevel + 0.5}%;
    }
  }

  .water span {
    position: relative;
    left: -30px;
  }

  .leftButton {
    background-color: blue;
  }

  .rightButton {
    background-color: orange;
  }
`;

export default SWaterGage;
