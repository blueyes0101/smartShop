import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Ödeme işlemini backend ile tamamlayın
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <CardElement />
        </Form.Group>
        <h3 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h3>
        <Button variant="primary" type="submit" disabled={!stripe}>
          Pay
        </Button>
      </Form>
    </div>
  );
};

export default PaymentForm;
