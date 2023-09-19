import { Container } from"react-bootstrap";
import {AiOutlineMenu} from "react-icons/ai";
import {GoHomeFill} from "react-icons/go";

const ReactIcons = () => {
  return (
    <Container>
      <h1 className="text-center">React Icons</h1>
      <AiOutlineMenu className="fs-1 me-5 text-warning "/>
      <GoHomeFill className="fs-1 text-warning "/>
      </Container>
  )
}

export default ReactIcons