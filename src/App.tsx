import React from 'react';

import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import MainLaoyut from './laoyuts/MainLaoyut';
import LoadingPage from './components/Labels/LoadingPage/intex';

const Cart = React.lazy(() => import('./screens/Cart'));
const ItemPage = React.lazy(() => import('./screens/ItemPage'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<MainLaoyut />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
