// takeEvery 是监听, put 是发送actions ,  call : 只要是返回的promise, 都用call有包裹起来,为了便于测试
import { call, takeLatest, put } from 'redux-saga/effects';
// delay saga提供了这个延迟函数
import axios from 'axios';

function* fetchGetUsers() {
    try {
        const users = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
        yield put({ type: 'GET_USER_SUCCESS', users: users })
    } catch(err){ //不用try写法也可以,更多看文档~
        yield put({type:'GET_USER_FAILURE',error:err.message})
    }
}

export function* watchFetchGetUsers() {
    yield takeLatest('FETCH_GET_USER', fetchGetUsers)
}

function* fetchTodos() {
    const todos = yield call(axios.get, 'http://jsonplaceholder.typicode.com/todos')
    console.log(todos)
}

export function* watchFetchTodos() {
    yield takeLatest('FETCH_TODOS', fetchTodos)
}

////我这里并没有去写action , 这里只是举个栗子
// function* fetchMore() {   // 这种是并发多个异步 , 且数组的项 按顺序去对应下面的返回,
//     const [todos, posts] = yield all([
//         call(axios.get, 'http://jsonplaceholder.typicode.com/todos'),
//         call(axios.get, 'http://jsonplaceholder.typicode.com/posts'),
//     ])
//     console.log(todos)
//     console.log(posts)
// }

// function* watchFetchMore() {
//     yield takeLatest('FETCH_MORE', fetchMore)
// }