import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
const GameList = ({ games }) => {
    const emptyMessage = (
        <p>There are no games yet in your collection</p>
    );
    const gameList = (
        <div className="ui four cards">
            {games.map((game,index) => <GameCard game={game} key={index} />)}
        </div>
    )
    return (
        <div>
            {games.length === 0 ? emptyMessage : gameList}
        </div>
    )
}
GameList.propTypes = {
    games: PropTypes.array.isRequired
}
export default GameList;