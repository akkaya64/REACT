import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = ({isim, yas, img, kurs}) => {
  return (
    <Card className='cards' style={{width:"13rem"}}>
        <Card.Img variant='top' src={img} style={{height:"175px"}}/>
        <Card.Body>
            <Card.Title>{isim}</Card.Title>
            <Card.Title>{yas}</Card.Title>
            <Card.Text>
                {kurs}
            </Card.Text>
            <Button variant='warning'>Send</Button>
        </Card.Body>
    </Card>
  )
}

export default Cards