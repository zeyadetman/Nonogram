import React, { Component } from 'react'
import { levels } from '../../utils/levels';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: "",
      boardId: "",
      painter: ""
    }

    this.drawBoard = this.drawBoard.bind(this);
    this.cellCheck = this.cellCheck.bind(this);
  }
  
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      board: nextProps.label,
      boardId: Math.floor(Math.random() * (levels[nextProps.label] ? levels[nextProps.label].length : 0))
    }, this.drawBoard);
  }
  
  componentDidMount() {
    this.setState({
      board: this.props.label,
      boardId: Math.floor(Math.random() * (levels[this.props.label] ? levels[this.props.label].length : 0))
    }, this.drawBoard);
    
    
    console.log(this.props);
  }


  drawBoard() {
    let indx = 0;
    const levelCount = ++this.props.label.split('x')[0];
    let painter = "";
    for (let row = 0; row < levelCount; row++) {
      painter += "<tr>"
      for (let col = 0; col < levelCount; col++) {
        painter += `<td id=${row}-${col} class="empty" style="${row === 1 && col === 0 ? 'width: 100px' : ''}">
    ${(!row && !col) ? "" : (!row || !col) ? levels[this.props.label][this.state.boardId][indx++].toString().replace(/,/g, '') : ''}
  </td>`;
      }
      painter += "</tr>";
    }

    this.setState({ painter });
    console.log(this.state.board, this.state.boardId, this.state.painter);
  }

  cellCheck(e) {
    const cellId = e.target.id;
    const cellClass = document.getElementById(cellId) && document.getElementById(cellId).classList.value;

    if (cellClass && !cellId.split('-').some(el => el === '0') && cellId !== 'board') {
      document.getElementById(cellId).classList.value = (cellClass === 'empty') ? 'doubtful' : (cellClass === 'doubtful') ? 'fill' : (cellClass === 'fill') ? 'empty' : 'empty';
      console.log(cellId, document.getElementById(cellId).classList.value);
    }
  }

  render() {
    return (
      <table
        id="board"
        onClick={this.cellCheck}
        dangerouslySetInnerHTML={{ __html: this.state.painter }}
        style={{ margin: '0 auto', border: 'none' }}
      >
      </table>
    )
  }
}
