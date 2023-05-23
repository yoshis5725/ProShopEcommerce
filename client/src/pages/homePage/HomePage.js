import {Col, Row} from "react-bootstrap";
import products from "../../data/products";
import Product from "../../components/product/Product";
import './HomePage.css'


function HomePage() {
    return (
        <div>
            <h3 className='homepage__title'>Latest Products</h3>
            <Row>
                {
                    products.map(product => (
                        <Col key={product._id} sm={12} md={8} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>

    )
}

export default HomePage