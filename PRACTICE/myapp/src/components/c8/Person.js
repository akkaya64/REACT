import React from 'react'

// Person komponenti, bir öğrenci bilgisini alır ve HTML elemanlarını döndürür.
const Person = ({student}) => {

    // Öğrenci objesinden gerekli bilgiler çıkartılıyor.
    // Destructuring yöntemi ile bu bilgilere kolayca ulaşabiliriz.
    const {isim, yas, kurs, img} = student;

    return (
        // 'person' CSS sınıfı ile stillendirilmiş div elementi oluşturuyoruz.
        <div className='person'>

            {/* Öğrencinin ismi h1 etiketi içerisinde gösteriliyor. */}
            <h1>{isim}</h1>

            {/* Öğrencinin resmi img etiketi ile gösteriliyor.
                width ve height ile resmin boyutları belirleniyor.
                alt propertysi ile resim yüklenmediği zaman görünecek alternatif metin atanıyor. */}
            <img src={img} alt='resim' width="200" height={200}/>

            {/* Öğrencinin yaşı h2 etiketi içerisinde gösteriliyor. */}
            <h2>{yas}</h2>

            {/* Öğrencinin kurs bilgisi h3 etiketi içerisinde gösteriliyor. */}
            <h3>{kurs}</h3>
        </div>
    )
}

// Dışa aktarma işlemi bu şekilde yapılıyor ki bu komponent başka dosyalardan da kullanılabilsin.
export default Person



/*


const Kisi = ({student}) => {
     const {isim,yas,kurs,img}=student; 
return (
    <div className='kisi'>
        <h1>{student.isim}</h1>
        <img src={student.img} alt="resim" width="200" height="200" />
        <h2>{student.yas}</h2>
        <h3>{student.kurs}</h3>


   
    </div>
  )
}

export default Kisi



*/