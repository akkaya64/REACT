import { Col, Container, Row } from "react-bootstrap"
import ProductCard from "../product-card/product-card"
import productData from "../../../assets/data/products.json"

const ProductList = () => {
  return (
    <Container>
        <h1 className="text-center my-5 text-danger">PRODUCTS</h1>
        <Row className="gy-4">
            {
               productData.map((product) => (
                <Col key={product.id} md={6} lg={5} xl={4}>
                    <ProductCard {...product}/>
                </Col>
               ))
            }
        </Row>
    </Container>
  )
}

export default ProductList