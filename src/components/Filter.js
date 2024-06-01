import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { setFilter } from '../features/products/productsSlice';

const Filter = () => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(setFilter({ category, priceRange }));
  };

  return (
    <Form onSubmit={handleFilter}>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price Range</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter price range"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value.split(',').map(Number))}
        />
      </Form.Group>
      <Button type="submit">Filter</Button>
    </Form>
  );
};

export default Filter;
