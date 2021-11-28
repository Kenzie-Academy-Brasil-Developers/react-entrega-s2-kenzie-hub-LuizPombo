import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: #ffc300;
  div {
    span {
      color: white;
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  background: #001d3d;
  color: #666360;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    border: 0;
    color: #ffc300;
  }
`;
