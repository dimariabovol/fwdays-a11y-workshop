'use strict';

import modal from './components/modal.js';
import navbar from './components/navbar.js';
import products from './components/products.js';

const initApp = () => {
  modal();
  navbar();
  products();
};

initApp();
