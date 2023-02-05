import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { store } from './Store/store'
import { Provider } from 'react-redux'

import { useState,useEffect } from 'react';




ReactDOM.render(

  <Provider store={store}>
     <App />
  </Provider>
  
   
 ,
  document.getElementById('root')
);

