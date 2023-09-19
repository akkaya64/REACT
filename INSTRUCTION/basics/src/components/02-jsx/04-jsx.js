import React from 'react'

const Jsx4 = () => {

    const names = ["Alice", "Robert", "Jack", "John", "Mariam"];
    const cities = ["London", "Cardiff", "Glasgow", "Bristol", "Manchester"];

  return (
    <div>
        <ul>
           {
            names.map((names, index) => <li key={index}>{names}</li>)
           }
        </ul>
        <select id='' name=''>
            {
                cities.map((cities, index) => <option key={index}>{cities}</option>)
            }
        </select>
    </div>
  )
}

export default Jsx4