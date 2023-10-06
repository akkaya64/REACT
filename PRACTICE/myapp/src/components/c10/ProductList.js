import React from 'react'
import products from '../../assets/data/products.json'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './Product'

const ProductList = () => {
  return (
    <Container style={{marginTop:"8rem"}}>
      <Row >
        {
          products.map((product) => 
          <Col key={product.id} md={6} lg={4} xl={3}>
          <Product {...product}/>
          </Col>)
        }
      </Row>
      </Container>
  )
}

export default ProductList