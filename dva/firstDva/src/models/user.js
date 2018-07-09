import axios from 'axios';
export default {
    namespace: 'user',
    state: {
        error: null,
        // isLoading: false,
        user: null,
    },
    subscriptions: {
    },
    reducers: {
        "fetching"(state) {
            return {
                ...state,
                // isLoading: true
            };
        },
        "fetch/success"(state, action) {
            return {
                error: null,
                // isLoading: false,
                user: action.user
            }
        },
        "fetch/error"(state, action) {
            return {
                error: action.error,
                // isLoading: false,
                user: null
            }
        }

    },
    effects: {
        *fetchStart(_, { call, put }) {
            // yield put({ type: "fetching" });
            try {
                const user = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
                yield put({ type: 'fetch/success', user: user })
            } catch (e) {
                yield put({ type: 'fetch/error', error: e.message })
            }
        }

    },
}