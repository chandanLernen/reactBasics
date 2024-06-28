import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
<Link to={`/product/${product._id}`}>
<Card.Img src={product.image} />
</Link>

<strong>{product.name}</strong>
<Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />  
        

        </Card>
    )
}

export default Product
