import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GameList';
import { fetchGames ,deleteGame } from '../actions'

class GamesPage extends Component {
    componentDidMount() {
        this.props.fetchGames(); // fetchgames已经由 connect 连接上了
    }

    render() {
        return (
            <div>
                <GamesList games={this.props.games} deleteGame= {this.props.deleteGame} />
            </div>
        )
    }
}
GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames:PropTypes.func.isRequired,
}
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}
//所有由connect连接的, 在会在props中
export default connect(mapStateToProps, { fetchGames ,deleteGame })(GamesPage); 