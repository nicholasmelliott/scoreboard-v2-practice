import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func 
  };

  render() {
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore 
    } = this.props;

    return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        { name }
      </span>

      <Counter 
        score={score}
        index={index}
        changeScore={changeScore} 
      />
    </div>
    );
  }
}

export default Player;