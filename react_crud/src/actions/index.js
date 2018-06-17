import { SET_GAMES, GAME_FETCHED, GAME_UPDATED ,GAME_DELETED} from '../constants';

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
    if (res.ok) {
        return res.json();
    } else {
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


const gameUpdataed = (game) => {
    return {
        type: GAME_UPDATED,
        game
    }

}
export const updataGame = (data) => {
    return dispatch => {
        return fetch(`/api/games/${data._id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(gameUpdataed(data.game)))
    }
}

const gameDeleted = (gameId) => {
    return {
        type: GAME_DELETED,
        gameId
    }
}

export const deleteGame = (id) => {
    return dispatch => {
        return fetch(`/api/games/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(gameDeleted(id)))
    }
}


const gameFetched = (game) => {
    return {
        type: GAME_FETCHED,
        game
    }
}

export const fetchGame = (id) => {
    return dispatch => {
        return fetch(`/api/games/${id}`)
            .then(res => res.json())
            .then(data => dispatch(gameFetched(data.game)))
    }
}