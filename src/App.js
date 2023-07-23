import React from 'react';

import './scss/app.scss';
import Header from './components/Blocks/Header';
import NotFound from './screens/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './screens/Cart';
import Home from './screens/Home';

function App() {
  const [SearchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchState={[SearchValue, setSearchValue]} />
      <Routes>
        <Route path="/" element={<Home searchState={[SearchValue, setSearchValue]} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
