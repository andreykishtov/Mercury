import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import LoginPage from './LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: true };
  }
  toggleMenu = () => this.setState({ menu: !this.state.menu });

  render() {
    return (
      <Router className="App">
        <Dashboard menu={this.state.menu} toggleMenu={this.state.toggleMenu} />
      </Router>
    );
  }
}

export default App;
