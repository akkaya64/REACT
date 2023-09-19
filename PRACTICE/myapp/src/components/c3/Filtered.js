import React from 'react'
import students from "./students.json"

const Filtered = () => {
    //!listeye yasi 25den kucuk olanlarin isimlerini ekleyelim
  return (
    <div>
        <ol>
            {
                students.filter(student => student.yas<25).map((item,index) => <li key={index}>{item.isim}</li>)
            }
        </ol>
    </div>
  )
}

export default Filtered