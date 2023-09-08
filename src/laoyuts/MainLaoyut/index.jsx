import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../../components/Blocks/Header';
import ModalProductWindow from '../../components/ModalProductWindow';

function MainLaoyut() {
  return (
    <div className="wrapper">
      <Header />
      <ModalProductWindow />
      <Outlet />
    </div>
  );
}

export default MainLaoyut;
