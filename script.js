const cells = document.querySelectorAll('.cell')
const resetEl = document.querySelector('.reset')


const gameBoard = (() => {
    'use strict';
    let cellsArr = [
    cells[0],
    cells[1],
    cells[2],
    cells[3],
    cells[4],
    cells[5],
    cells[6],
    cells[7],
    cells[8]
    ];
    return {cellsArr}
})();

let board = gameBoard.cellsArr

cells.forEach( cells => {
    cells.addEventListener('click', function() {
        cells.style.backgroundColor = 'red'
    }, {once: true})
})


