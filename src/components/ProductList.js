import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Card>
            <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">${product.price}</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
