import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import Layout from '../src/components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
       <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


