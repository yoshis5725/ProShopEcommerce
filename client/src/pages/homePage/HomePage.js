import {Col, Row} from "react-bootstrap";
import Product from "../../components/product/Product";
import './HomePage.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsList} from "../../redux/actions/productActions";
import Loading from "../../components/loading/Loading";
import Message from "../../components/message/Message";


function HomePage() {
    const dispatch = useDispatch()
    const productsList = useSelector(state => state.productList)
    const {products, loading, error} = productsList


    useEffect(() => {
        dispatch(fetchProductsList())
    }, [dispatch])


    return (
        <div>
            <h3 className='homepage__title'>Latest Products</h3>
            {
                loading ? <Loading/> :
                    error ? <Message variant={'danger'}>{error}</Message> :
                        <Row>
                            {
                                products.map(product => (
                                    <Col key={product._id} sm={12} md={8} lg={4} xl={3}>
                                        <Product product={product}/>
                                    </Col>
                                ))
                            }
                        </Row>
            }
        </div>
    )
}

export default HomePage