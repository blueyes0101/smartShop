import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import PaymentForm from './components/PaymentForm';
import SearchResults from './components/SearchResults';
import { setProducts } from './features/products/productsSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = [
      { id: 1, name: 'Product 1', category: 'Electronics', description: 'Description 1', price: 10, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', category: 'Clothing', description: 'Description 2', price: 20, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', category: 'Accessories', description: 'Description 3', price: 30, image: 'https://via.placeholder.com/150' },
    ];
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-3">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            } />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
