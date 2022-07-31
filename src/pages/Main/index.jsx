import TextArea from "../../components/TextArea";

import { Container } from "./styles";
import { FaPlay } from "react-icons/fa";
import { useContext } from "react";
import { TasksContext } from "../../providers/Tasks";

const Main = () => {
  const { tasks, taskValue, addNewTask } = useContext(TasksContext);

  return (
    <Container>
      <TextArea>
        <abbr title="Adicione sua tarefa">
          <FaPlay onClick={() => addNewTask(taskValue)} />
        </abbr>
      </TextArea>
      <ul>
        {tasks &&
          tasks.map((task, index) => {
            return <p key={index}>{task}</p>;
          })}
      </ul>
    </Container>
  );
};

export default Main;
