import React from 'react'
import student from '../../assets/data/students.json'

const Table = () => {
  const style1 = {
    backgroundColor: "darkcyan",
    color: "purple",
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic"
  }

  return (
    <div>
      <h1 style={style1}>Table</h1>
      <table style={{width:"500px", margin:"3rem auto", }}>
        <thead style={{...style1, color: "yellow", backgroundColor:"maroon"}}>
          <tr >
            <th>Name</th>
            <th>Age</th>
            <th>Cource</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((student, index) => (
              <tr key={index} style={index%2 === 0 ? style1 : {...style1, backgroundColor:"khaki"}}>
                <td>{student.isim}</td>
                <td>{student.yas}</td>
                <td>{student.kurs}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table