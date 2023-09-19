import React from 'react'

const Jsx3 = () => {
    const user = {
        firstName: "Jack",
        lastName: "Sparrow",
        age: 25,
        email: "jack@exemple.com",
        occopation: "Developer",
        isAdmin: true,
    }

    const {age,/* email,firstName,lastName,occopation, */ isAdmin } = user;

  return (
    <div>
        {
            isAdmin && <h2>Admin Menu</h2>
        }
        {
            age > 16 && <h2>Can Drive</h2>
        }
        {
            age > 16 || <h2>Can use Bus</h2>
        }
    </div>
  )
}

export default Jsx3