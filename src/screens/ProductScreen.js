import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen({ match }) {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <div>
            <strong>${product.price}</strong>
            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            <Button
              className="btn-block"
              disabled={product.countInStock == 0}
              type="button"
            >
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
