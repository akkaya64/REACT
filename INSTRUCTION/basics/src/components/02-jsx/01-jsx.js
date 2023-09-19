import React from 'react'

const Jsx1 = () => {
    const X = 5;
    //console.log(X);

    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
    }

    // bu satir da bir yorum satiridir

    return (
        <>
            <h1 className=''>Hello {user.firstName} </h1>
            <h2 className=''>Your First Name is {user.firstName} </h2>
            <h3 className=''>Your Last Name is {user.lastName} </h3>
            <h4 className=''>Your age is {user.age} </h4>
            {/* Hello Dear Friends */}
            
        </>
    )
}

export default Jsx1