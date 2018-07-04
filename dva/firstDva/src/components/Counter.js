import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Counter = (props) => {
    const container = {
        'margin': '0 auto',
        'textAlign': 'center'
    }
    const { count, dispatch } = props;

    function add() {
        dispatch({ type: 'counterModel/add' })
    }

    function async(){
        dispatch({ type: 'counterModel/asyncAdd' })
    }

    return (
        <div style={container}>
            <p> Counter</p>
            <p> {count}  </p>
            <button onClick={add}> sync + </button>
            <br/>
            <button onClick={async}> asyncAdd + </button>

            <br />
            <br />
            <br />
            <Link to='/'>back home </Link>
        </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number
}



export default Counter;

