import React from 'react';
import Counter from '../components/Counter'
import { connect } from 'dva';
import PropTypes from 'prop-types';

import { counterAdd, counterAsyncAdd, asyncLink } from '../actions'

const CounterPage = (props) => {
    const { counter, counterAdd, counterAsyncAdd, asyncLink } = props;
    return (
        <div>
            <Counter
                count={counter.count}
                counterAdd={counterAdd}
                counterAsyncAdd={counterAsyncAdd}
                asyncLink={asyncLink}
            />
        </div>
    )
}

CounterPage.propTypes = {
    counter: PropTypes.object,
    dispatch: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterModel
    }
}

//                                     如果第二个参数加了{} , 那么 props中将不会有 原本的dispatch , 将出现导入的dispatch事件 
export default connect(mapStateToProps, { counterAdd, counterAsyncAdd, asyncLink })(CounterPage);