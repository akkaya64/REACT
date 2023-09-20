import {Card} from "react-bootstrap";
import {VscTrash} from "react-icons/vsc";

const Person = (props) => {
    const imageSource = require(`../../assets/img/${props.image || "person1.jpg"}`);
   //TODO silmenk istediginize eminmiisini z uyarisi da ekleyeleim 
  return (
   <Card style={{maxWidth:300}}>
    <Card.Img src={imageSource}/>
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.age} age years old</Card.Text>
        <VscTrash 
        className="fs-5 text-danger" 
        title={`Delete ${props.name}`}
        style={{cursor:"pointer"}} 
        // 03 deletePerson a propslardan gelen id verdik 
        onClick={() => props.deletePerson(props.id)}
        />
    </Card.Body>
   </Card>
  )
}

export default Person