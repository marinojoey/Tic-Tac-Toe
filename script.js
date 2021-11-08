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
                winGame()
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

let winGame = function() {
    if (((winCombos[0][0].textContent == 'X') && (winCombos[0][1].textContent == 'X') && (winCombos[0][2].textContent == 'X')) ||
        ((winCombos[1][0].textContent == 'X') && (winCombos[1][1].textContent == 'X') && (winCombos[1][2].textContent == 'X')) ||
        ((winCombos[2][0].textContent == 'X') && (winCombos[2][1].textContent == 'X') && (winCombos[2][2].textContent == 'X')) ||
        ((winCombos[3][0].textContent == 'X') && (winCombos[3][1].textContent == 'X') && (winCombos[3][2].textContent == 'X')) ||
        ((winCombos[4][0].textContent == 'X') && (winCombos[4][1].textContent == 'X') && (winCombos[4][2].textContent == 'X')) ||
        ((winCombos[5][0].textContent == 'X') && (winCombos[5][1].textContent == 'X') && (winCombos[5][2].textContent == 'X')) ||
        ((winCombos[6][0].textContent == 'X') && (winCombos[6][1].textContent == 'X') && (winCombos[6][2].textContent == 'X')) ||
        ((winCombos[7][0].textContent == 'X') && (winCombos[7][1].textContent == 'X') && (winCombos[7][2].textContent == 'X'))) {
            alert("You have won the game!")
    } else if (((winCombos[0][0].textContent == 'O') && (winCombos[0][1].textContent == 'O') && (winCombos[0][2].textContent == 'O')) ||
        ((winCombos[1][0].textContent == 'O') && (winCombos[1][1].textContent == 'O') && (winCombos[1][2].textContent == 'O')) ||
        ((winCombos[2][0].textContent == 'O') && (winCombos[2][1].textContent == 'O') && (winCombos[2][2].textContent == 'O')) ||
        ((winCombos[3][0].textContent == 'O') && (winCombos[3][1].textContent == 'O') && (winCombos[3][2].textContent == 'O')) ||
        ((winCombos[4][0].textContent == 'O') && (winCombos[4][1].textContent == 'O') && (winCombos[4][2].textContent == 'O')) ||
        ((winCombos[5][0].textContent == 'O') && (winCombos[5][1].textContent == 'O') && (winCombos[5][2].textContent == 'O')) ||
        ((winCombos[6][0].textContent == 'O') && (winCombos[6][1].textContent == 'O') && (winCombos[6][2].textContent == 'O')) ||
        ((winCombos[7][0].textContent == 'O') && (winCombos[7][1].textContent == 'O') && (winCombos[7][2].textContent == 'O'))) {
            alert("The computer has won...")
    } else if ((cell0.textContent != '') && (cell1.textContent != '') && (cell2.textContent != '') && 
        (cell3.textContent != '') && (cell4.textContent != '') && (cell5.textContent != '') &&
        (cell6.textContent != '') && (cell7.textContent != '') && (cell8.textContent != '')) {
            alert('Tie Game!')
        }
}