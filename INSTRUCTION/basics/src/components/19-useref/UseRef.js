import React, { useState, useRef } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const UseRef = () => {
    //const [counter, setCounter] = useState(0);

    const inputRef = useRef(null);

    // console.log("Render gerceklesti");

    const handleIncrease = () => {
        //   console.log("calisti");
        inputRef.current.value = +(inputRef.current.value) + 1;
    }


  return (
    <Container className='text-center'>
        <h1>Use Ref</h1>
        <p>useRef() hook'u React uygulamalarinda DOM elemanlari uzerinde islem yapilmasina olanak saglar.</p>
       {/*  <ButtonGroup>
            <Button variant='warning' onClick={() => setCounter(prev => prev - 1)}>-</Button>
            <Button disabled>{counter}</Button>
            <Button variant='warning' onClick={() => setCounter(prev => prev + 1)}>+</Button>
        </ButtonGroup> */}

        <input type="button" value={0} ref={inputRef} />
            <Button onClick={handleIncrease}>TIKLA</Button>
            <p>{inputRef.current?.value}</p>
        
        </Container>
  )
}

export default UseRef 