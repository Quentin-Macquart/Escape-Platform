import styled from 'styled-components';

const SClock = styled.div`
  width: 200px;

  .clockButtons {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .clockButtons button {
    width: 30px;
    height: 30px;
    font-size: 24px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export default SClock;
