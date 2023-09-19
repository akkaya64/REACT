import React from 'react'

const Jsx2 = () => {
    const isAdmin = false;
    const isLoading = false;

    if(isLoading) {
        console.log('Loading...')
    }

    if(isAdmin) {
        console.log('Admin')
    }

  return (
    isLoading 
    ? <h2>Loading...</h2>
    :
    <>
    {
        isAdmin
        ? <>
        <h2>Admin Menu</h2>
    <ul>
        <li>Create User</li>
        <li>Delete User</li>
        <li>Update User</li>
    </ul>
    </>
    : <>
    <h2>User Menu</h2>
    <ul>
        <li>Profile</li>
        <li>Order</li>
        <li>Addresses</li>
    </ul>
    </>
    }
    </>
  )
}

export default Jsx2