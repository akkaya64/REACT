import React, { useState } from 'react'
import data from './data'
import './poets.scss'
import {Button, Card} from 'react-bootstrap'

const Poets = () => {
    const [index, setIndex] = useState(0);

    const {id, name, date, picture, text} = data[index]

    const previous = (prev) => {
        if(prev < 0) prev=data.length-1;
        setIndex(prev)
    };

    const next = (next) => {
        if(next > data.length-1) next = 0;
        setIndex(next)
    }

    const random = () => {
        let rnd = Math.floor(Math.random()*data.length)
        setIndex(rnd)
    }
  return (
    <Card className='kartlar' style={{ width: '20rem',height:"33rem" }}>
    <Card.Img variant="top" src={picture} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{id}</Card.Subtitle>
      <Card.Title>{date}</Card.Title>
      <Card.Text>
      {text}
      </Card.Text>

      <div className="butonlar" style={{width:"10rem!important"}} > 
      <Button className='ms-2  ' variant="danger" onClick={()=>previous(index-1)}>Prev</Button>
      <Button variant="warning" onClick={random}>Random</Button>
      <Button variant="success" onClick={()=>next(index+1)}>Next</Button>
       </div>
    </Card.Body>
  </Card>
  )
}

export default Poets