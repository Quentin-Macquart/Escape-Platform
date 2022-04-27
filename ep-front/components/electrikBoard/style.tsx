import styled from "styled-components";

const SElectrikBoard = styled.div`
  width: 400px;
  background-color: green;
  display: flex;
  flex-wrap: wrap;

  section {
    border: 1px solid black;
    width: 80px;
    height: 80px;
  }
  button {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    border: none;
  }
`;

export default SElectrikBoard;
