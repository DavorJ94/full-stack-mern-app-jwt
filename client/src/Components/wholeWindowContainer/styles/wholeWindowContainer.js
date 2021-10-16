import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90%;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
