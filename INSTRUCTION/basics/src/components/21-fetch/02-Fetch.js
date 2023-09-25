import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UserCard from './02-User-Card';

const BASE_URL = process.env.REACT_APP_API_URL;
/* console.log(BASE_URL) */

const Fetch02 = () => {

    const [users, setUsers] = useState();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        fetch(`${BASE_URL}/react-basics/users`)
        .then((response) => response.json())
        .then((data) => {
            /* console.log(data) */;
        setUsers(data)})
    }, [flag])

    const userInfo = {
            avatar: "https://picsum.photos/200/300?grayscale",
            firstName: "HELLO",
            lastName: " MAMA",
            birthDate: "1974-05-01T20:36:27.688Z",
            email: "example@gmail.com",
            username: "Adrien.Collins42",
    }
    const handleCreate = async (payload) => {
        await fetch (`${BASE_URL}/react-basics/users`, {
            method: `POST`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        //.then((respnse) => respnse.json())
        .catch((error) => console.log(error))
        setFlag(prevFlag => !prevFlag)
    };

  return (
    <Container className='my-5'>
        <h1>MOCK API</h1>

        <Row className='row-cols-2 row-cols-md-3 row-cols-lg-4 gy-3'>
            {users && users.map((user) => (
                <Col key={user.id}>
                <UserCard {...user}/>
                </Col>
            ))}
            
        </Row>
        <Button className='my-3' onClick={() => handleCreate(userInfo)}>CREATE USER</Button>
        
        </Container>
  )
}

export default Fetch02