import { Container, Nav, Navbar, Form, Button} from 'react-bootstrap'

const ProductHeader = () => {
  return (
    <div>
        <Navbar style={{backgroundColor: "darkcyan"}} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">AKKAYALAR</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarMenu' />
                <Navbar.Collapse id='navbarMenu'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#products'>Products</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type='search' placeholder='SEARCH' className='me-2'/>
                        <Button variant='outline-warning'>SEARCH</Button>
                    </Form>
                </Navbar.Collapse>
            
            </Container>
        </Navbar>
        
        </div>
  )
}

export default ProductHeader