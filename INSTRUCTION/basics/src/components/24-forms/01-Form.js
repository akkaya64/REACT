import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const Form = () => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    //console.log(e.target.value)
    setUsername(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username: ", username)
    await axios.post('https://jsonplaceholder.typicode.com/users',
    {username: username}
    )
  }
  return (
    <Container>
        <h1>Form V01</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label> <br />
            <input 
            type="text" 
            id='username'
            value={username}
            onChange={handleChange}
            ></input>
            <button>SEND</button>
        </form>
        </Container>
  )
}

export default Form