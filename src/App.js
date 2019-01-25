import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { levels } from './utils/levels';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: Object.keys(levels)[0],
      winner: false
    }

    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.handleWinner = this.handleWinner.bind(this);
  }

  async handleBoardChange(e) {
    await this.setState({ label: e.target.value });
  }

  handleWinner(validation) {
    this.setState({winner: validation});
  }

  render() {
    return (
      <div className="App">
        <h1>Nonogram, Solve the Japanese Puzzle!</h1>
        <div className="game custom-select">
          <label className="settings">
            Select Level:
          <select
              id="levels"
              onChange={this.handleBoardChange}
              style={{ marginBottom: 15 }}
            >
              {
                Object.keys(levels).map(level =>
                  <option value={level} key={level}>{level}</option>
                )
              }
            </select>
          </label>
          <Board
            label={this.state.label}
            handleWinner={this.handleWinner}
          />
        </div>
        <div
          className="winner"
          style={{display: this.state.winner ? 'initial' : 'none'}}
        >
              <p>You're Winner <span role="img" aria-label="rocket">🚀</span></p>
              <p>あなたは勝者です <span role="img" aria-label="rocket">🚀</span></p>

              <button onClick={() => window.location.reload()}>Play Again?</button>
        </div>
      </div>
    );
  }
}

export default App;
