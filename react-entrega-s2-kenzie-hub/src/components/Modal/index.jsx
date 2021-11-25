import { Container, Content, Header, Title, Body } from "./styles";

const Modal = ({ sendUpdate, title, status, register, modal }) => {
  if (modal) {
    return null;
  }
  return (
    <Container>
      <Content>
        <Header>
          <Title>Update your status in {title}</Title>
        </Header>

        <Body>
          <form>
            <input {...register(status)} placeholder="New status" />
          </form>
        </Body>
        <Header>
          <button onClick={sendUpdate}>Send</button>
        </Header>
      </Content>
    </Container>
  );
};

export default Modal;
