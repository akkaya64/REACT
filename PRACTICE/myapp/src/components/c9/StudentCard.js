import React from 'react'
import students from '../../assets/data/students.json'
import Cards  from './Cards'
import './card.scss'
import {Col, Container, Row} from 'react-bootstrap'

const StudentCard = () => {
  return (
    <Container className='text-center'>
        <Row >
            {
                students.map((student, index) => 
                <Col key={index} md={4} lg={3} xl={2}>
                <Cards {...student}/>
                </Col>)
            }
        </Row>
    </Container>
  )
}

export default StudentCard