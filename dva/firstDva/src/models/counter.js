import { delay } from 'dva/saga';
export default {
    namespace: 'counterModel',
    state: {
        count: 1
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
    },
}