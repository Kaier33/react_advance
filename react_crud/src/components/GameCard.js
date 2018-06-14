import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GameCard extends PureComponent {
    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.game.cover} alt="Game Cover" />
                </div>
                <div className="content">
                    <div className="header">{this.props.game.title}</div>
                </div>
            </div>
        )
    }
}

// const GameCard = ({ game }) => {
//     return (
//         <div className="ui card">
//             <div className="image">
//                 <img src={game.cover} alt="Game Cover" />
//             </div>
//             <div className="content">
//                 <div className="header">{game.title}</div>
//             </div>
//         </div>
//     )
// }

GameCard.propTypes = {
    game: PropTypes.object.isRequired
}

export default GameCard