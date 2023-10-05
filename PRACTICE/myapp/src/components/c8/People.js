// React kütüphanesini import ediyoruz.
import React from 'react';

// 'students' veri setini import ediyoruz.
import students from '../../assets/data/students.json';

// 'Person' componentini import ediyoruz.
import Person from './Person';

// 'person.scss' stil dosyasını import ediyoruz.
import "./person.scss";

// 'People' adında bir fonksiyon component oluşturuyoruz.
const People = () => {
  // 'People' componenti render ediliyor.
  return (
    <div className='people'>

      
      {
        // 'students' dizisini map metodu ile dönüyoruz.
        // Her bir 'student' öğesini 'Person' componentine prop olarak geçiriyoruz.
        students.map((student, index) => 
          // Her 'Person' componentini benzersiz bir 'key' ile oluşturuyoruz.
          // 'student' prop'u ile her öğrencinin bilgisini iletiyoruz.
          <Person key={index} student={student}/>
        )
      }
      
    </div>
  )
}

// 'People' componentini export ediyoruz, böylece başka dosyalarda kullanabiliriz.
export default People;
