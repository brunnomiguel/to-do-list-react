import TextArea from "../../components/TextArea";

import { Container } from "./styles";
import { FaPlay } from "react-icons/fa";

const Main = () => {
  return (
    <Container>
      <TextArea>
        <abbr title="Adicione sua tarefa">
          <FaPlay />
        </abbr>
      </TextArea>
    </Container>
  );
};

export default Main;
