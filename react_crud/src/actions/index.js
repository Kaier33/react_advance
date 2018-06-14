import { SET_GAMES } from '../constants';

const setGames = (games) => {
    return {
        type: SET_GAMES,
        games
    }
};

export const fetchGames = () => {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)))
    }
};

const handleResponse = (res) => {
   if(res.ok){
       return res.json();
   }else{
       let error = new Error(res.statusText);
       error.response = res;
       throw error;
   }
}

export const saveGame = (data) => {
    return dispatch => {
        return fetch('/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
    }
}