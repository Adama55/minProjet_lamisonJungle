import { useState, useEffect } from 'react';

import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

import logo from '../assets/logo.png';
import '../styles/App.css';

function App() {

  return (
    <div>
    <Banner></Banner>
    <Cart></Cart>
    <ShoppingList></ShoppingList>
    </div>
  )
}

export default App;
