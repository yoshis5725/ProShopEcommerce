import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Rating from "../rating/Rating";


function Product({product}) {
    const url = 'http://localhost:8000'


    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/products/${product._id}`}>
                <Card.Img src={url + product.image}/>
            </Link>

            <Card.Body>
                <Link to={`/products/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#F2B40B'} />
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default Product