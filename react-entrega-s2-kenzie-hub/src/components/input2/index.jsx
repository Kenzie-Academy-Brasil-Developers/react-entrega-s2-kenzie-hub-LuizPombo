import { Container, InputContainer } from "./styles";

function Input2({ title, status, register, ...rest }) {
  return (
    <Container>
      <InputContainer>
        <input {...register(title)} placeholder="New tech" {...rest} />
        <input {...register(status)} placeholder="status" {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input2;
