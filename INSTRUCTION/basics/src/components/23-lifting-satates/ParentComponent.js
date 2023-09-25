import React, { useState }  from 'react'
import { Container } from 'react-bootstrap'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
   
    const [count, setCount] = useState(0);

    const parentCallback = (dataFromChild) => {
        setCount(prev => prev + dataFromChild)
    }
  return (
    <Container>
         <h1>ParentComponent</h1>
         <h2>{count} Times Clicked</h2>
         <ChildComponent parentCallback={parentCallback}/>
    </Container>
   
  )
}

export default ParentComponent