import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../features/cart/cartSlice';
import CommentForm from './CommentForm';
import Comments from './Comments';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Category: {product.category}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            ${product.price} - Add to Cart
          </Button>
        </Card.Body>
      </Card>
      <CommentForm productId={product.id} />
      <Comments productId={product.id} />
    </div>
  );
};

export default ProductDetail;
