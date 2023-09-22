import { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Container } from 'react-bootstrap'

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('Mesaj');
   
   // console.log("Benim calisma siram 1")
   
    useEffect(() => {
        //console.log("yanlizca component mount edildikten sonra calisir")
    }, []);
    
    useEffect(() => {
        //console.log("Herhangi bir state degistiginde calisir")
    });

    useEffect(() => {
        //console.log("Component ilk mount edildiginde calisir birde counter stage si degistiginde calisir")
    }, [counter]);

    useEffect (() => {
        return () => {
            //console.log("Component mount edildiginde calisir")
        }
    }, []);

    //console.log("Benim calisma siram 2");

    const handleCounter = () => {
        setCounter(prev => {
            //console.log("Counter degisti");
            return prev +1;
        });
        //console.log("Counter degisecek")
    }

    const newMessage = () => {
        //console.log("newMessage Worked")
        return "New Message";
    }

  return (
   <Container>
    <h1>useEffect Hookh'u</h1>
    <Alert>
        {message} {newMessage()}
    </Alert>
    <ButtonGroup>
        <Button onClick={() => setMessage("STATE CHANGED")}>CHANGE MESSAGE</Button>
        <Button variant='danger' onClick={handleCounter}>{counter}</Button>
    </ButtonGroup>
   </Container>
  )
}

export default UseEffect