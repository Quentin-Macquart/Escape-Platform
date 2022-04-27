import styled from "styled-components";

const SCaptionModal = styled.section`
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  div {
    width: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  p {
    animation: fadeIn 0.3s ease-in;
    font-family: "Amatic SC", cursive;
    font-size: 35px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    width: 350px;
    background-image: url("https://us.123rf.com/450wm/jakgree/jakgree1607/jakgree160700137/59979634-old-paper-texture-can-use-as-background-vintage-filter-effect-used-.jpg");
  }
  img {
    height: 100px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default SCaptionModal;
