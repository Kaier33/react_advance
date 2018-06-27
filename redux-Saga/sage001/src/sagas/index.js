import { INCREMENT_ASYNC } from '../constants'
// takeEvery 是监听, put 是发送actions ,  call : 只要是返回的promise, 都用call有包裹起来,为了便于测试
import { takeEvery, put ,call , takeLatest } from 'redux-saga/effects';
// delay saga提供了这个延迟函数
import { delay } from 'redux-saga'


function* incrementAsync() {
    yield call(delay,2000) 
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
   
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);    // takeEvery就是监听到action的时候, 去触发第二个参数 , (响应每次)
    // yield takeLatest(INCREMENT_ASYNC, incrementAsync);// 只响应最后一个事件
}