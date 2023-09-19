import{Button, Container, Row, Col} from 'react-bootstrap';
const BootstrapComponents = () => {
  return (
    <Container>
        <h1>BootstrapComponents</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
             <Button variant='warning'>CLICK</Button> 
             <Button variant='outline-warning'>CLICK</Button>
             <Button as='input' type='button' variant='outline-warning' value={"Click"}/>
        </div>
        <Container>
            <Row >
                <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} className="bg-primary">H</Col>
                <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} className='bg-success'>E</Col>
                <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} className='bg-secondary'>L</Col>
                <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} className='bg-info'>L</Col>
                <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} className='bg-danger'>O</Col>
            </Row>
        </Container>
        </Container>
  )
}

export default BootstrapComponents