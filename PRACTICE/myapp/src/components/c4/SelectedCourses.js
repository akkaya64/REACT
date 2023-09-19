import React from 'react'
import courses from "../../assets/data/students.json"

const SelectedCourses = () => {
    //!selectin icine kurslari tekrarsiz (bir defa kullanilacak) sekilde ekleyelim
  return (
    <div>
        <select>
            {
                courses.reduce((value, currentValue) => {
                    if(!value.includes(currentValue.kurs)) value.push(currentValue.kurs); return value
                }, []).map((item,index )=> 
                <option key={index}>
                    {item}
                </option>)
            }
        </select>
       
    </div>
  )
}

export default SelectedCourses