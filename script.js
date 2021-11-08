let move = ''
const playerFactory = (human, mark) => {
    return {human, mark}
}
const human = playerFactory(true, 'X');
const computer = playerFactory(false, 'O')

let startGame = function() {
    move = human.mark
}
window.onload = startGame()

let swapMoves = function() {
    if (move == human.mark) {
        move = computer.mark
    } else if (move == computer.mark) {
        move = human.mark
    } return move
}

const gameBoard = (() => {
    const board = document.querySelector('.board')
    const resetEl = document.querySelector('.reset')
    for (let i=0; i<9; i++) {
        cell = document.createElement('div')
        cell.classList = 'cell'
        board.appendChild(cell)
    }
    const cells = document.querySelectorAll('.cell')
    resetEl.addEventListener('click', function() {
        cells.forEach( cells => {
                cells.textContent = ''
                startGame()
        })
    })

    cells.forEach( cells => {
        cells.addEventListener('click', function() {
            if (cells.textContent == '') {
                cells.textContent = move
                cells.classList.add(move)
                swapMoves()
            }
        })
    })
})();

const cellsArr = document.querySelectorAll('.cell')
let cell0 = cellsArr.item(0)
let cell1 = cellsArr.item(1)
let cell2 = cellsArr.item(2)
let cell3 = cellsArr.item(3)
let cell4 = cellsArr.item(4)
let cell5 = cellsArr.item(5)
let cell6 = cellsArr.item(6)
let cell7 = cellsArr.item(7)
let cell8 = cellsArr.item(8)
console.log(cell0.classList)

const winCombos = [
    [cell0, cell1, cell2],
    [cell3, cell4, cell5],
    [cell6, cell7, cell8],
    [cell0, cell3, cell6],
    [cell1, cell4, cell7],
    [cell2, cell5, cell8],
    [cell0, cell4, cell8],
    [cell2, cell4, cell6],
]
// console.log(winCombos[0])