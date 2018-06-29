
const initialState = {
    isFetching: false,
    error: null,
    user: null
}

const users = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_GET_USER':
            return {
                isFetching: true,
                error: null,
                user: null
            }
        case 'GET_USER_SUCCESS':
            return {
                isFetching: false,
                error: null,
                user: action.users
            }
        case 'GET_USER_FAILURE':
            return {
                isFetching: false,
                error: action.error,
                user: null
            }
        default:
            return state;
    }
};

export default users