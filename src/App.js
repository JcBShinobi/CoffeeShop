import React from 'react';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Coffee Shop</h1>
      <Login />
      <Products />
      <Cart />
    </div>
  );
}
