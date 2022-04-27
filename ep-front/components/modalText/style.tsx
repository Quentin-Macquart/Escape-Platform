import styled from "styled-components";

const SModalText = styled.section`
  div {
    box-shadow: -15px 0 0 0 black, 15px 0 0 0 black, 0 -15px 0 0 black,
      0 15px 0 0 black;
    background-color: #961596;
    width: 650px;
    height: auto;
    padding: 30px;
    margin: 0 auto;
    display: inline-block;
    text-align: center;
    padding: 0.4em 1.3em;
  }
  p {
    font-family: "Press Start 2P", cursive;
    font-size: 15px;
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.05em;
    animation: typing 1.5s steps(60);
    color: white;
  }

  hr {
    height: 10px;
    visibility: hidden;
  }

  @mixin step1($width, $color) {
    box-shadow: $width 0 $color, -$width 0 $color, 0 (-$width) $color,
      0 $width $color;
    margin: $width auto;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
export default SModalText;
