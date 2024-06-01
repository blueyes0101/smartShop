import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import Filter from './Filter';

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const filter = useSelector((state) => state.products.filter);

  const filteredProducts = products.filter((product) => {
    const inCategory = filter.category ? product.category.includes(filter.category) : true;
    const inPriceRange = product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div>
      <Filter />
      <div className="row mt-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">${product.price}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
