import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, incrementAsync } from './actions/counter';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  add() {
    this.props.increment()
  }
  static propTypes = {
    increment: PropTypes.func.isRequired,
  }

  render() {
    let { count } = this.props
    return (
      <div className="App">
        count : {count}
        <br />
        <button onClick={() => this.add()}> + </button> 
        <br/>
        <button onClick={this.props.incrementAsync}>async</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    count: state.counter
  }
}

export default connect(mapState, { increment, incrementAsync })(App);
