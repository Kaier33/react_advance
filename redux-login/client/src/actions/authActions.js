import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from '../consonants'
import jwtDecode from 'jwt-decode';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const logout = () => {
   return dispatch=>{
       localStorage.removeItem("jwtToken");    //去除缓存中的用户信息
       setAuthorizationToken(false);           //去除请求头部信息的携带的用户认证
       dispatch(setCurrentUser({}));           //改变redux中的用户登录的状态
   }
}

export const login = (data) => {
    return dispatch => {
        return axios.post('/api/auth', data)
            .then(
                (res) => {
                    const token = res.data.token;
                    localStorage.setItem("jwtToken", token);
                    setAuthorizationToken(token);
                    dispatch(setCurrentUser(jwtDecode(token)))
                    return res;
                },
                (err) => {
                    console.log("err")
                }
            );
    }
};


