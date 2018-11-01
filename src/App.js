import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.less';
import Calctor from './pages/Calctor';
import FilterableProductTable from './pages/FilterableProductTable';
import Test from './pages/Test';
import Tags from './pages/Tags';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggin: false
    };
    this.handleTestClick = this.handleTestClick.bind(this)
    this.toTags = this.toTags.bind(this)
  }
  
  handleTestClick() {
    console.log('testeste', this.state.isLoggin);
    this.setState((preState) => ({
      isLoggin: !preState.isLoggin
    }))
  }

  toTags() {
    console.log(this)
  }

  render() {
    return (
      <Router>
        <div id="en" data-hh="hhhh" className="App">
          <header className="App-header">
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a onClick={this.toTags}>Tags</a></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          </header>
          <main className="App-main">
            <Route path="/about" component={ Test }></Route>
            <Calctor>{(s) => <i>{s}</i>}</Calctor>
            <FilterableProductTable />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
