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

export const saveGame = (data) => {
    return dispatch => {
        fetch('/api/saveGame', {
            method: 'post',
            body: JSON.stringify(data),
            header: {
                "content-Type": "application/json"
            }
        })
    }
}