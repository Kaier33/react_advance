import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, incrementAsync } from './actions/counter';
import { getUsers, getTodos } from './actions/users';
import PropTypes from 'prop-types';
import './App.css';

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
    let { count } = this.props;
    let { error, user, isFetching } = this.props.user;
    let data = null;
    if (error) {
      data = error
    } else if (isFetching) {
      data = 'loading'
    } else if (!isFetching && user) {
      data = user.data[0].name
    } else {
      data = '母鸡'
    }
    return (
      <div className="App">
        count : {count}
        <br />
        <button onClick={() => this.add()}> + </button>
        <br />
        <button onClick={this.props.incrementAsync}>async</button>
        <br />
        <button onClick={this.props.getUsers}>get User</button>
        <br />
        <h1>{data}</h1>
        <br />
        <button onClick={this.props.getTodos}>get Todos</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    count: state.counter,
    user: state.users
  }
}

export default connect(mapState, { increment, incrementAsync, getUsers, getTodos })(App);
