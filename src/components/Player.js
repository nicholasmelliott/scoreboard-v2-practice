import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

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
      highScore,
      removePlayer,
      changeScore,
    } = this.props;

    return (
    <div className="player">
      <span className="player-name">
        <button className="highScore" onClick={() => removePlayer(id)}>✖</button>
        <Icon highScore={highScore} />
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