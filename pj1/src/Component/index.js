import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './main'
import Menu from './Menu'
import Order from './Order'

export default () => (
    <Router>
      <Route path="/main" component={Main}/>
      <Route path="/menu" component={Menu} /> 
      <Route path="/order" component={Order} />
    </Router>
  )