import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const CounterTitle = () => {
    const [counter, setCounter] = useState(0)
    // const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleCounter = () => {
        setCounter(prev => prev + 1);
        // setIsButtonClicked(true);
    }

    useEffect(() => {
        if (counter > 0/* isButtonClicked */) {
         window.document.title = `${counter} times clicked`   
        }
    }, [counter])

  return (
    <Container className='my-5 text-center'>
        <h1>Counter Title</h1>
        <h2>Below button has been clicked {counter} times </h2>
        <Button onClick={handleCounter}>Click</Button>
        </Container>
  )
}

export default CounterTitle