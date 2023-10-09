import React, { useState } from 'react'
import './text.css'
import data from './data'

const Paragraf = () => {
  const [count, setCount] = useState(0)
  const [paragraf, setParagraf] = useState([])


  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = count;

    if(amount <= 0){
      amount = 1;
    }
    if(amount > data.length) amount = data.length;

    setParagraf(data.slice(0, amount));
    
  }

  const handleClear = () => {
    setCount(0)
    setParagraf([])
  }
  return (
    <section className='section-center'>
      <h3>HOW MANY PARAGRAPHS</h3>
      <form>
        <label htmlFor="paragraf">Paragraf</label>
        <input 
        type="number" 
        name="paragraf" 
        id="paragraf" 
        value={count} 
        onChange={(e) => setCount(e.target.value)}/>
        <button className='btn' onClick={handleGenerate}>GENERATE</button>
        <button className='btn' onClick={handleClear}>CLEAR</button>
      </form>
      <div>
        {paragraf.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </section>
  )
}

export default Paragraf