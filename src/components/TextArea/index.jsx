import { Container } from "./styles";

const TextArea = ({ children }) => {
  return (
    <Container>
      <textarea name="tasks" id="" cols="30" rows="3" />
      {!!children && children}
    </Container>
  );
};

export default TextArea;
