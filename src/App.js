import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuperBut from './SuperBut';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {dir: "CW"};
    this.changeDir = this.changeDir.bind(this);
  }

  changeDir() {
    if (this.state.dir === "CW") {
      this.setState({dir: "CCW"});
    } else {
      this.setState({dir: "CW"});
    }
  }

  render() {
    const dir = this.state.dir;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={"App-logo-"+ dir} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is going to be fun!</p>
        <SuperBut dir={(dir==="CW") ? "LEFT" : "RIGHT"} changeDir={this.changeDir} />
      </div>
    );
  }
}

export default App;
