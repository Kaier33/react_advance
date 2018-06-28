import { INCREMENT_ASYNC } from '../constants';
// takeEvery 是监听, put 是发送actions ,  call : 只要是返回的promise, 都用call有包裹起来,为了便于测试
import { takeEvery, put, call, takeLatest, all } from 'redux-saga/effects';
// delay saga提供了这个延迟函数
import { delay } from 'redux-saga';
import axios from 'axios';

function* incrementAsync() {
    yield call(delay, 2000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {

    yield takeEvery(INCREMENT_ASYNC, incrementAsync);    // takeEvery就是监听到action的时候, 去触发第二个参数 , (响应每次)
    // yield takeLatest(INCREMENT_ASYNC, incrementAsync);// 只响应最后一个事件
}

function* fetchGetUsers() {
    const users = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
    console.log(users)
}

function* watchFetchGetUsers() {
    yield takeLatest('FETCH_GET_USER', fetchGetUsers)
}


//我这里并没有去写action , 这里只是举个栗子
function* fetchMore() {   // 这种是并发多个异步 , 且数组的项 按顺序去对应下面的返回,
    const [todos, posts] = yield all([
        call(axios.get, 'http://jsonplaceholder.typicode.com/todos'),
        call(axios.get, 'http://jsonplaceholder.typicode.com/posts'),
    ])
    console.log(todos)
    console.log(posts)
}

function* watchFetchMore() {
    yield takeLatest('FETCH_MORE', fetchMore)
}


export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchFetchGetUsers(),
        watchFetchMore()
    ])
}

