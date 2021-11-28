import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  h1 {
    font-size: 3rem;
    color: #ffc300;
  }
  button {
    background: #003566;
    color: #ffd60a;
    height: 45px;
    border-radius: 0.5rem;
    border: 0;
    padding: 0 0.5rem;
    width: 100%;
    font-weight: 600;
    transition: 0.5s;
    border: 2px solid var(--black);
    margin-top: 1rem;
    :hover {
      border: 2px solid #ffd60a;
    }
  }
`;

export const Cards = styled.div`
  background: #001d3d;
  margin-top: 5px;
`;
