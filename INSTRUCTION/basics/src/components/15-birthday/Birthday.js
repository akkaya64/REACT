import React, { useState } from 'react'
import Person from './Person'
import peopleData from "../../assets/data/people.json"
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';

const Birthday = () => {
    const [people, setPeople] = useState(peopleData);

    const handleData = (type) => {
        if (type === "del") setPeople([]);
        else if (type === "fetch") setPeople(peopleData);
    };

    //ID YI NASIL ALDIK
    //01 deletePerson adinda bir fonsiyon olusturduk
    const deletePerson = (id) => {
                    //04 Persondan gelen is yi burada cagirdik
        const filtredArray = people.filter((person) => person.id !== id);

        setPeople(filtredArray)
    }



  return (

    <Container className='my-5'>
        <h1>People Born Today</h1>
        <p>There are {people.length} people born today</p>
        <Row className='row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4' >
            {
                people.map((person) => (
             <Col key={person.id}>
                <Person 
                //setPeople={setPeople}
                //02  deletePerson u Person a gonderdsik
                deletePerson={deletePerson}
                {...person}
                />
            </Col>
                ))
            }
        </Row>

        <ButtonGroup className="my-5">
                <Button variant="danger" onClick={() => handleData("del")}>Verileri Temizle</Button>
                <Button variant="success" onClick={() => handleData("fetch")}>Verileri Geri Getir</Button>
            </ButtonGroup>
        
    </Container>
    
  )
}

export default Birthday