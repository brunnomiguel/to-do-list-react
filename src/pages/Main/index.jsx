import { Container } from "./styles";
import { FaPlay } from "react-icons/fa";

import { useContext } from "react";
import { TasksContext } from "../../providers/Tasks";

import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Tasks from "../../components/Tasks";

const Main = () => {
  const { tasks, taskValue, addNewTask } = useContext(TasksContext);

  return (
    <Container>
      <TextArea>
        <abbr title="Adicionar tarefa">
          <Button>
            <FaPlay onClick={() => addNewTask(taskValue)} />
          </Button>
        </abbr>
      </TextArea>
      <ul>
        {tasks &&
          tasks.map((task, index) => {
            return <Tasks key={index} task={task} />;
          })}
      </ul>
    </Container>
  );
};

export default Main;
