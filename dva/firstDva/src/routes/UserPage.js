import React from 'react';
import { Link } from 'dva/router';
import PropTypes from 'prop-types';
import { connect } from 'dva'

const User = (props) => {  // 记得引入context
    let { error, user } = props.user;
    console.log(props.loading)
    let loading =  props.loading.effects["user/fetchStart"]; //可以指定某个异步事件,也可以用global,不过还是觉得指定对应的异步事件状态会好点,万一其他异步事件也触发,全局的global是会响应到的
    let result;
    if (error) {
        result = error
    } else if (loading) {
        result = "loading"
    } else if (user) {
        result = user && user.data[0].name
    } else {
        result = "啥都没"
    }
    return (
        <div>
            <div>{result}</div>
            <button onClick={() => { props.dispatch({ type: "user/fetchStart" }) }}> get User</button>
            <br />
            <Link to='/'>back home for Link </Link>
        </div>
    )
}


User.propTypes = {
}

function mapStateToprops(state) {
    return {
        user: state.user,
        loading: state.loading //由于在全局引用了了, state中就有了一个全局的loading
    }

}

export default connect(mapStateToprops)(User);

