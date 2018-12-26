const levels = {
  "5x5": [
    [
      [1],
      [2, 1],
      [3],
      [3],
      [3],
      [1],
      [1, 1],
      [3],
      [3],
      [3, 1]
    ],
    [
      [3],
      [1],
      [3],
      [2],
      [4],
      [2],
      [1, 1, 1],
      [1, 3],
      [3],
      [1]
    ],
  ],

  "10x10": [
    [
      [1, 7],
      [6],
      [7],
      [7],
      [9],
      [1, 3],
      [7],
      [1],
      [1],
      [1],
      [1, 1],
      [2],
      [2],
      [5],
      [5, 1],
      [5, 3],
      [5, 1],
      [7],
      [3, 3, 1],
      [3, 2]
    ]
  ]
};

const choice = 0;
const drawBoard = (level) => {
  const levelCount = ++level.target.value.split('x')[0];
  const levelKey = level.target.value;
  let indx = 0;
  console.log(levels[levelKey]);
  let board = "";
  for (let row = 0; row < levelCount; row++) {
    board += "<tr>"
    for (let col = 0; col < levelCount; col++) {
      board += `<td id=${row}-${col} style="background: white; color: black ${row === 1 && col ===0 ? '; width: 100px' : ''}">
    ${(!row && !col)? "": (!row || !col) ? levels[levelKey][choice][indx++].toString().replace(/,/g,' ') : ' '}
  </td>`;
    }
    board += "</tr>";
  }

  document.getElementById('board').innerHTML = board;
}

const cellCheck = (e) => {
  const cellId = e.target.id;
  const cellColor = e.target.style.background;

  if (!cellId.split('-').some(el => el === '0') && cellId !== 'board')
    document.getElementById(cellId).style.background = (cellColor == 'white') ? 'black' : 'white';
}

const options = Object.keys(levels).map(level => `<option value="${level}">${level}</option>`);
document.getElementById('levels').innerHTML = options;