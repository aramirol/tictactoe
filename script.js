var currentPlayer = 'X';
var board = ['', '', '', '', '', '', '', '', ''];
var scoreX = 0;
var scoreO = 0;

function placeSymbol(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    var cell = document.getElementsByClassName('cell')[index];
    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase()); // Add class to colour
    if (checkWin()) {
      setTimeout(function() {
        alert(currentPlayer + ' ha ganado!');
        updateScore();
        resetBoard();
      }, 100);
    } else if (board.indexOf('') === -1) {
      setTimeout(function() {
        alert('¡Empate!');
        resetBoard();
      }, 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].classList.remove('x', 'o'); // Remove classes from colour
  }
}

function updateScore() {
  if (currentPlayer === 'X') {
    scoreX++;
    document.getElementById('score-x-value').innerText = scoreX;
  } else {
    scoreO++;
    document.getElementById('score-o-value').innerText = scoreO;
  }
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
}
