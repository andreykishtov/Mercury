import React, { Component } from 'react';

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
      <div className="App">
        <Dashboard menu={this.state.menu} toggleMenu={this.state.toggleMenu} />
      </div>
    );
  }
}

export default App;
