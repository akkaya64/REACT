import React from 'react'  
import { Button } from 'react-bootstrap'

const ChildComponent = (props) => {
    
  return (
    <div className='my-5'>
         <h3>Child Componend</h3>
         <Button onClick={() => props.parentCallback(1)}>Change Counter</Button>
    </div>
   
  )
}

export default ChildComponent 