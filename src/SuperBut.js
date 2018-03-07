import React, { Component } from 'react';
import './SuperBut.css';

class SuperBut extends Component {
  constructor(props) {
    super(props);
    //this.state = {isOn: true};
    this.changeText = this.changeText.bind(this);
  }
  
  changeText() {
    //this.setState(prevState => ({isOn: !prevState.isOn})); //({isOn: !this.state.isOn})
    this.props.changeDir();
  }

  render() {
    return (
      <button onClick={this.changeText}>
        {this.props.dir}
      </button>
    );
  }
}

export default SuperBut;
