import React, { Component } from "react";
import { levels } from "../../utils/levels";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: "",
      boardId: "",
      painter: "",
      isBoardSolved: false
    };

    this.drawBoard = this.drawBoard.bind(this);
    this.cellCheck = this.cellCheck.bind(this);
    this.isSolved = this.isSolved.bind(this);
    this.reduceBoard = this.reduceBoard.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState(
      {
        board: nextProps.label,
        boardId: Math.floor(
          Math.random() *
            (levels[nextProps.label] ? levels[nextProps.label].length : 0)
        )
      },
      this.drawBoard
    );
  }

  componentDidMount() {
    this.setState(
      {
        board: this.props.label,
        boardId: Math.floor(
          Math.random() *
            (levels[this.props.label] ? levels[this.props.label].length : 0)
        )
      },
      this.drawBoard
    );
  }

  drawBoard() {
    let indx = 0;
    const levelCount = ++this.props.label.split("x")[0];
    let painter = "";
    for (let row = 0; row < levelCount; row++) {
      painter += "<tr>";
      for (let col = 0; col < levelCount; col++) {
        painter += `<td id=${row}-${col} class="empty" style="${
          row === 1 && col === 0 ? "width: 100px" : ""
        }">
    ${
      !row && !col
        ? ""
        : !row || !col
        ? levels[this.props.label][this.state.boardId][indx++]
            .toString()
            .replace(/,/g, "")
        : ""
    }
  </td>`;
      }
      painter += "</tr>";
    }

    this.setState({ painter });
  }

  cellCheck(e) {
    const cellId = e.target.id;
    const cellClass =
      document.getElementById(cellId) &&
      document.getElementById(cellId).classList.value;

    if (
      cellClass &&
      !cellId.split("-").some(el => el === "0") &&
      cellId !== "board"
    ) {
      document.getElementById(cellId).classList.value =
        cellClass === "empty"
          ? "doubtful"
          : cellClass === "doubtful"
          ? "fill"
          : cellClass === "fill"
          ? "empty"
          : "empty";
    }

    const isThisSolved = this.isSolved();
    this.setState({ isBoardSolved: isThisSolved }, () =>
      console.log(this.state.isBoardSolved)
    );
    if (isThisSolved) this.props.handleWinner(isThisSolved);
  }

  reduceBoard(res) {
    let final = [];
    for (let index = 0; index < res.length; index++) {
      let element = [];
      let counter = 0;
      for (let col = 0; col < res[index].length; col++) {
        if (res[index][col] === 1) {
          counter++;
        } else if (res[index][col] === 0) {
          element.push(counter);
          counter = 0;
        }
      }
      element.push(counter);
      element = element.filter(el => el);
      final = [...final, element];
    }

    return final;
  }

  isSolved() {
    const { board, boardId } = this.state;

    let filledCells = [].slice.call(document.getElementsByClassName("fill"));
    filledCells = filledCells.map(e => e.id);
    const boardCols = +board.split("x")[0];
    const boardRows = +board.split("x")[1];

    const res = new Array(boardCols)
      .fill()
      .map(() => new Array(boardRows).fill(0));
    filledCells.forEach(cell => {
      const id = cell.split("-");
      res[parseInt(id[1]) - 1][parseInt(id[0]) - 1] = 1;
    });
    const transposed = res.map((col, i) => res.map(row => row[i]));

    const final = [...this.reduceBoard(res), ...this.reduceBoard(transposed)];
    return JSON.stringify(levels[board][boardId]) === JSON.stringify(final);
  }

  render() {
    return (
      <table
        id="board"
        onClick={this.cellCheck}
        dangerouslySetInnerHTML={{ __html: this.state.painter }}
        style={{ margin: "0 auto", border: "none" }}
      />
    );
  }
}
