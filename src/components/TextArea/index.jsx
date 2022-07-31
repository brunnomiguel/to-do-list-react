import { useContext } from "react";
import { TasksContext } from "../../providers/Tasks";
import { Container } from "./styles";

const TextArea = ({ children }) => {
  const { setTaskValue } = useContext(TasksContext);

  return (
    <Container>
      <textarea
        onChange={(event) => setTaskValue(event.target.value)}
        name="tasks"
        cols="30"
        rows="3"
      />
      {!!children && children}
    </Container>
  );
};

export default TextArea;
