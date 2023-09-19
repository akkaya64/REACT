import React from 'react'

const IsLogin = () => {
    const isLogin = true;
    const name = "Veli";
    const surname = "Kiraz";
    const gender = "Mr";
  return (
    <div>
        {
            isLogin ? <h2>You are in {gender} {name} {surname}</h2> : <h2>Please input correct details</h2> 
        }
    </div>
  )
}

export default IsLogin