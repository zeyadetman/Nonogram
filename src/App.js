import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { levels } from './utils/levels';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: Object.keys(levels)[0]
    }

    this.handleBoardChange = this.handleBoardChange.bind(this);
  }

  async handleBoardChange(e) {
    await this.setState({ label: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Nonogram, Solve the Japanese Puzzle!</h1>
        <div className="game">
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
          <Board label={this.state.label} />
        </div>
      </div>
    );
  }
}

export default App;
