import React, { Component } from 'react';
import {  Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Test from './pages/Test';
// import Clock from './pages/Test/clock';
// import Yform from './pages/Form';
import Calctor from './pages/Calctor';
import FilterableProductTable from './pages/FilterableProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggin: false
    };
    this.handleTestClick = this.handleTestClick.bind(this)
  }
  
  handleTestClick() {
    console.log('testeste', this.state.isLoggin);
    this.setState((preState) => ({
      isLoggin: !preState.isLoggin
    }))
  }

  render() {
    return (
      <div id="en" data-hh="hhhh" className="App">
        <header className="App-header">
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Tags</li>
            <li>About</li>
          </ul>
        </nav>
        </header>
        <main className="App-main">
          <Calctor>{(s) => <i>{s}</i>}</Calctor>
          <FilterableProductTable />
        </main>
      </div>
    );
  }
}

export default App;
