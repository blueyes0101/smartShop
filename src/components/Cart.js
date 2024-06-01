import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';
import { removeFromCart } from '../features/cart/cartSlice';
import { LinkContainer } from 'react-router-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                  </div>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h3>
          <LinkContainer to="/payment">
            <Button variant="success" className="mt-3">
              Proceed to Payment
            </Button>
          </LinkContainer>
        </div>
      )}
    </div>
  );
};

export default Cart;
