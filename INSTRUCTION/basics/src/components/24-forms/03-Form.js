import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Form03 = () => {

    const [form, setForm] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "+44",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }


  return (
    <Container className='my-5'>
        <h1>Form 03</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                type='text'
                placeholder='Please Input Your First Name'
                name='firstName'
                value={form.firstName}
                onChange={(e) => setForm(prev => ({...prev, firstName: e.target.value}))}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type='text' 
                placeholder='Please Input Your Last Name'
                name='lastName'
                value={form.lastName}
                onChange={(e) => setForm(prev => ({...prev, lastName: e.target.value}))}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type='email'
                placeholder='Please Input Your Email' 
                name='email'
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value}))}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                type='tel'
                placeholder='Please Input Your Phone Number'
                name='phoneNumber'
                value={form.phoneNumber}
                onChange={(e) => setForm(prev => {
                    return {
                        ...prev, phoneNumber: e.target.value
                    };
                })}
                />
            </Form.Group>
            <Button 
            variant='warning' 
            className='w-100' 
            type='submit'>
                SEND
                </Button>
        </Form>
    </Container>
    
  )
}

export default Form03