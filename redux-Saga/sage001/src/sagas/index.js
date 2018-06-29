import { all, fork } from 'redux-saga/effects';


//如果generator事件很多的话,想这样的导出很不方便
// import { watchIncrementAsync } from './counter';
// import { watchFetchGetUsers,watchFetchTodos } from './users';

import * as userSagas from './users'; //把同个文件的generator全部导出
import * as counterSagas from './counter'; //

export default function* rootSaga() {
    // yield all([
    //     watchIncrementAsync(),
    //     watchFetchGetUsers(),
    //     watchFetchTodos()
    // ])
    yield all([
        ...Object.values(userSagas),
        ...Object.values(counterSagas),
    ].map(fork)) //先解构出来,然后用map去循环每个项,并且调用fork
}

