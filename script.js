const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

const checkWin = (player) => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => pattern.every(index => boardState[index] === player));
};

const checkDraw = () => boardState.every(cell => cell !== '');

const handleClick = (event) => {
    const index = event.target.dataset.index;
    if (boardState[index] === '') {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            boardState = ['', '', '', '', '', '', '', '', ''];
            cells.forEach(cell => cell.textContent = '');
        } else if (checkDraw()) {
            setTimeout(() => alert('Draw!'), 100);
            boardState = ['', '', '', '', '', '', '', '', ''];
            cells.forEach(cell => cell.textContent = '');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
