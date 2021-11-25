import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 30%;
  background-color: #fff;
`;

export const Header = styled.div`
  padding: 10px;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
