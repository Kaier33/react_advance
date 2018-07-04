import React from 'react';
import Counter from '../components/Counter'
import { connect } from 'dva';
import PropTypes from 'prop-types';
const CounterPage = (props) => {
    // console.log(props)
    const {counter,dispatch}  = props;
    return (
        <div>
            <Counter count={counter.count} dispatch={dispatch} />
        </div>
    )
}

CounterPage.propTypes = {
    counter:PropTypes.object,
    dispatch:PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterModel
    }
}


export default connect(mapStateToProps)(CounterPage);