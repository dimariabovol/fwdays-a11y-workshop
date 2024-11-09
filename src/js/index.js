'use strict';

import accordion from './components/accordion.js';
import modal from './components/modal.js';
import navbar from './components/navbar.js';
import products from './components/products.js';

const initApp = () => {
  accordion();
  modal();
  navbar();
  products();
};

initApp();
