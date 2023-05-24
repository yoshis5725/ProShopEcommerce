import {useParams} from "react-router-dom";
import {Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import Rating from "../../components/rating/Rating";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleProduct} from "../../redux/actions/productActions";


function ProductInfoPage() {
    const url = 'http://localhost:8000'
    const {productId} = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.singleProduct)
    const {product, loading, error} = singleProduct


    useEffect(() => {
        dispatch(fetchSingleProduct(productId))
    }, [dispatch, productId])


    return (
        <div>
            <Row>
                <Col md={6}>
                    <Image src={url + product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#F2B40B'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3>${product.price}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3>{product.description}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn btn-info btn-block' disabled={product.countInStock === 0}>Add to
                                    cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default ProductInfoPage
