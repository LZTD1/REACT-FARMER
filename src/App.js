import React from 'react';

import './scss/app.scss';
import NotFound from './screens/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './screens/Cart';
import Home from './screens/Home';
import ItemPage from './screens/ItemPage';
import MainLaoyut from './laoyuts/MainLaoyut';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLaoyut />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
