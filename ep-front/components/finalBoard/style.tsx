import styled from "styled-components";

const SFinalBoard = styled.section`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    height: 350px;
    width: 350px;
    opacity: 0.9;
    border: 2px solid grey;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    width: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 40px 30px 30px -5px inset,
      rgba(0, 0, 0, 0.3) -30px 28px 46px -5px inset;
    background-image: url("https://previews.123rf.com/images/alexeybykov/alexeybykov1308/alexeybykov130800064/21475926-grey-background-painted-iron-old-wall-.jpg");
    background-size: cover;
  }

  .topButtons,
  .bottomButtons {
    width: 100%;
    text-decoration: none;
    height: 100%;
  }

  .topButtons {
    display: flex;
    justify-content: space-around;
  }

  .bottomButtons {
    display: flex;
    justify-content: space-around;
  }

  .emptyBoard {
    display: inline-block;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 175px);
    grid-template-rows: repeat(2, 175px);
  }

  li {
    text-decoration: none;
    list-style-type: none;
  }

  .compartment06,
  .compartmentqp,
  .compartmentwM,
  .compartmentjR {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    width: 175px;
    height: 175px;
  }

  .square0,
  .square1,
  .square2,
  .square3 {
    background: none;
    height: 175px;
    width: 175px;
  }
`;
export default SFinalBoard;
