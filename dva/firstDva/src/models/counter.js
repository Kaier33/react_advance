import { delay } from 'dva/saga';
import { routerRedux } from 'dva/router'; //这种方式以后可能会被替换掉
import queryString from 'query-string';
import pathToRegexp from 'path-to-regexp'
export default {
    namespace: 'counterModel',
    state: {
        count: 1
    },
    subscriptions: {
        setup(props) {  // setup 这个函数名是可以随你喜欢去命名 , 可以订阅多个, 都会执行
            // console.log(props)
        },
        onClick({ dispatch }) {
            document.addEventListener('click', () => {
                // dispatch({ type: 'add' })
            })
        },
        setupHistory({ dispatch, history }) {
            history.listen((location) => {  //history有一个监听事件
                //更多pathToRegexp方法看文档  https://github.com/pillarjs/path-to-regexp
                const match = pathToRegexp('/counter').exec(location.pathname) 
                if (match) {
                    dispatch({ type: 'add' })
                }
            })
        }
    },
    reducers: {
        add(state, action) {
            return {
                count: state.count + 1
            };
        },
    },
    effects: {
        *asyncAdd({ payload }, { call, put, select }) {
            // const count = yield select(state => state.counterModel) //常规写法, 注意要state要写上所需要的namespace
            // console.log(count)

            // const count = yield select(({ counterModel }) => counterModel) //抽取写法
            // console.log(count)

            // const count = yield select(_ => _.counterModel) //省略写法 , 没用到参数可以用 _ 代替
            // console.log(count)

            const { counterModel } = yield select(_ => _)     // 省略 + 抽取 
            console.log(counterModel)
            yield call(delay, 1000);
            yield put({ type: 'add' });
        },
        *asyncLink({ payload }, { call, put }) {
            yield call(delay, 2000);
            yield put(routerRedux.push({
                pathname: '/',
                search: queryString.stringify({
                    name: 'Kaier'
                })
            }))
        }
    },
}