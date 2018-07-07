import React from 'react';
import { Link, withRouter } from 'dva/router';
import PropTypes from 'prop-types';

const Counter = (props, context) => {  // 记得引入context
    const container = {
        'margin': '0 auto',
        'textAlign': 'center'
    }
    const { count, counterAsyncAdd, counterAdd, asyncLink, history } = props;
    // old 
    // function add() {
    //     dispatch({ type: 'counterModel/add' })
    // }

    // function async(){
    //     dispatch({ type: 'counterModel/asyncAdd' })
    // }

    return (
        <div style={container}>
            <p> Counter</p>
            <p> {count}  </p>
            {/* <p>old</p>
            <button onClick={add()}> sync + </button>
            <br/>
            <button onClick={async()}> asyncAdd + </button> */}
            <p>new </p>
            <button onClick={counterAdd}> sync + </button>
            <button onClick={counterAsyncAdd}> asyncAdd + </button>
            <br />
            <p>Link 跳转</p>
            <Link to='/'>back home for Link </Link>
            <p>withRouter 提供的history 来跳转</p>
            {/* 注意onClick记得写上个 匿名函数,不然上来直接执行 */}
            <button onClick={() => { history.push('/') }}> 函数跳转</button>
            <br />
            <button onClick={() => { context.router.history.push('/') }}> 利用 context 来跳转</button>
            <br />
            <button onClick={asyncLink}> router-redux</button>
        </div >
    )
}

Counter.contextTypes = {
    router: PropTypes.object
}

Counter.propTypes = {
    count: PropTypes.number
}



export default withRouter(Counter);

