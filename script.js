const cells = document.querySelectorAll('.cell')

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

let cellsArr = gameBoard.cellsArr

function handleClick() {
    console.log('clicked')
}
cells.forEach( cells => {
    cells.addEventListener('click', handleClick)
})

