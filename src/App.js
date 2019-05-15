import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import AdminLayout from './components/AdminLayout';

class App extends Component {

  render() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/admin" name="Admin" component={AdminLayout} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
