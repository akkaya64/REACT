import React from 'react'
import countries from '../../assets/data/countries.json'

//! verilen datadan ulkelri secip selecte yerlestir
  //! a harfi ile baslayan ulkeleri sirala


const Countries = () => {
    
    const styleTable = {
        textAlign: "center",
        backgroundColor: "teal",
        fontSize: "1.6rem",
        fontWeight: "800"
    }
  return (
    <>
    <h1>Countries</h1>
    <select defaultValue="country">
    <option disabled value="country">
        Choose a country{" "}
    </option>
    {
        countries.map((country, index) => (
            <option key={country.code} value={country.code}>{country.name}</option>
        ))
    };
</select>
<table>
    <thead style={{backgroundColor:"tomato", color:"purple", fontSize:"2rem"} }>
        <tr>
            <th>Country No</th>
            <th>Country Name</th>
            <th>Country code</th>
        </tr>
    </thead>
    <tbody>
           {
            countries.filter((country) => country.name.startsWith("A")).map((country, index) => (
                <tr key={index} style={index%2 === 0 ? styleTable : {...styleTable, backgroundColor: "tomato"}}>
                    <td>{index + 1}</td>
                    <td>{country.name}</td>
                    <td>{country.code}</td>
                </tr>
            ))
           }
    </tbody>
</table>
    
    </>
  )
}

export default Countries