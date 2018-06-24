import axios from 'axios';

const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Bearer 是jwt的固定写法
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthorizationToken;