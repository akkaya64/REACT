import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form02 = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [total, setTotal] = useState(0);

  //const total1 = +firstNumber + +secondNumber

  useEffect(() => {
    setTotal(+firstNumber + +secondNumber)
  }, [firstNumber, secondNumber]);

  return (
    <Container className='my-5'>
      <h1>Form V02</h1>
      <Form> 

        <Form.Group>
          <Form.Label>First Number</Form.Label>
          <Form.Control
          type='number'
          placeholder='Input first number'
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}/>
        </Form.Group>

        <Form.Group className='my-4'>
          <Form.Label>Second Number</Form.Label>
          <Form.Control
          type='number'
          placeholder='Input Second Number'
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}/>
        </Form.Group>

        <Form.Group className='my-4'>
          <Form.Label>Total</Form.Label>
          <Form.Control
          type='number'
          value={total}
          disabled/>
        </Form.Group>
      </Form>
    </Container>
    
  )
}

export default Form02