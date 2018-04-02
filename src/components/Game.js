import React, { Component } from 'react';
import Header from './Header'

class Game extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      buttonClicked: false
    };
  }

  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default Game;