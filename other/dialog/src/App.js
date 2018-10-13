import React, { Component } from 'react';

import Modal from './Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  openModal() {
    this.setState({
      show: true
    })
  }
  closeModal() {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={()=>{this.openModal()}}> open </button>
        <Modal show={this.state.show} onClose={()=>{this.closeModal()}}>
           This message from Moal~
        </Modal>
        <br/>
        <br/>
        This is HomePage!
      </div>
    );
  }
}

export default App;
