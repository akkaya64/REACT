import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const Counter = () => {
  return (
    <Container>
        <h1>Counter 01</h1>
        <ButtonGroup>
            <Button variant='danger'>+</Button>
            <Button variant='secondary'>0</Button>
            <Button variant='success'>-</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Counter