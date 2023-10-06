import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Product = (product) => {
  const addToChart = () => {
    alert("this item added to chart")
  }
  const {image, desc, title, price } = product;
  return (
    <Card style={{ width: '18rem',marginTop:"2rem"}} className='productCard' >
      <Card.Img variant='top' src={require(`./img/${image}`)}/>
      <Card.Body className='text-center d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text className='fs-3 fw-bold mt-2'>£{price}</Card.Text>
        <Button variant='warning' onClick={addToChart}>Buy Me Please...</Button>
      </Card.Body>
    </Card>
  )
}

export default Product