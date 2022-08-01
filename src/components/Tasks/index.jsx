import { Container } from "./styles";
import { FiEdit } from "react-icons/fi";

import Button from "../Button";

const Tasks = ({ task }) => {
  return (
    <Container>
      <p>{task}</p>
      <div>
        <Button onClick={() => {}}>
          <FiEdit />
        </Button>
        <Button onClick={() => {}}>
          <FiEdit />
        </Button>
        <Button onClick={() => {}}>
          <FiEdit />
        </Button>
      </div>
    </Container>
  );
};

export default Tasks;
