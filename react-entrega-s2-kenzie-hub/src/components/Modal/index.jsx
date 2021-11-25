import { Container, Content, Header, Title, Body } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const Modal = ({ sendUpdate, title, status, register, modal, id, token }) => {
  const onSubmitUpdate = (status) => {
    console.log(id);
    api
      .put(
        `/users/techs/${id}`,
        { status: status },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => console.log(response));
  };
  const { handleSubmit } = useForm();
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
          <form onSubmit={handleSubmit(onSubmitUpdate)}>
            <input {...register(status)} placeholder="New status" />
            <button type="submit">Send</button>
          </form>
        </Body>
        <Header>
          <button onClick={sendUpdate}>close</button>
        </Header>
      </Content>
    </Container>
  );
};

export default Modal;
