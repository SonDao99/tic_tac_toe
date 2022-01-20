// Create Players:

const playerFactory = (name, symbol, color) => {
    return {name, symbol, color};
}



// General global variables. With more time, these should be tucked into a module which contains 
// all of the other game modules and factories:
let aiSymbol;
let aiColor;
let currentGame;
let gameOngoing = true;
let currentPlayer;

let board = [['','',''],['','',''],['','','']];
    
const displayBoard = () => {
    let gameGrid = document.querySelector('#gameGrid');
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            gameGrid.rows[i].cells[j].textContent = board[i][j];
        }
    }
}
displayBoard();


// Settings Buttons Logic:
let title = document.querySelector('#title')
let gameMode = document.querySelector('#gameMode');

let onePlayerSetting = document.querySelector('#onePlayerSettings');
let difficulty = document.querySelector('#difficulty');


// Selecting play mode:
let onePlayerMode = document.querySelector('#onePlayerMode');
onePlayerMode.addEventListener('click', () => {
    title.style.display = 'none';
    gameMode.style.display = 'none';

    onePlayerSetting.style.display = 'flex';
})

let twoPlayersMode = document.querySelector('#twoPlayersMode');
twoPlayersMode.addEventListener('click', () => {
    title.style.display = 'none';
    gameMode.style.display = 'none';
    currentGame = 'two players';

    twoPlayersSetting.style.display = 'flex';
    startTwoPlayersGame.style.display = 'flex';
})

// Selecting symbol single player:

let xSymbolButton = document.querySelector('#xSymbol');
let oSymbolButton = document.querySelector('#oSymbol');

oSymbolButton.addEventListener('click', () => {
    oSymbolButton.style.border = 'solid white';
    xSymbolButton.style.border = 'solid black';
    oSymbolButton.classList.add('buttonSelect');
    xSymbolButton.classList.remove('buttonSelect');
})

xSymbolButton.addEventListener('click', () => {
    xSymbolButton.style.border = 'solid white';
    oSymbolButton.style.border = 'solid black';
    xSymbolButton.classList.add('buttonSelect');
    oSymbolButton.classList.remove('buttonSelect');
})

// Selecting color single player:

let blueColorSelect = document.querySelector('#blueColor');
let orangeColorSelect = document.querySelector('#orangeColor');

blueColorSelect.addEventListener('click', () => {
    blueColorSelect.style.border = 'solid thick white';
    orangeColorSelect.style.border = 'solid thick black';
    blueColorSelect.classList.add('buttonSelect');
    orangeColorSelect.classList.remove('buttonSelect');
})

orangeColorSelect.addEventListener('click', () => {
    orangeColorSelect.style.border = 'solid thick white';
    blueColorSelect.style.border = 'solid thick black';
    orangeColorSelect.classList.add('buttonSelect');
    blueColorSelect.classList.remove('buttonSelect');
})

// Selecting symbol 2 players:
let xSymbolP1 = document.querySelector('#xSymbolP1');
let xSymbolP2 = document.querySelector('#xSymbolP2');
let oSymbolP1 = document.querySelector('#oSymbolP1');
let oSymbolP2 = document.querySelector('#oSymbolP2');

xSymbolP1.addEventListener('click', () => {
    xSymbolP1.style.border = 'solid white';
    oSymbolP2.style.border = 'solid white';

    xSymbolP2.style.border = 'solid black';
    oSymbolP1.style.border = 'solid black';
    
    xSymbolP1.classList.add('buttonSelect');
    oSymbolP2.classList.add('buttonSelect');

    xSymbolP2.classList.remove('buttonSelect');
    oSymbolP1.classList.remove('buttonSelect');
})

xSymbolP2.addEventListener('click', () => {
    xSymbolP2.style.border = 'solid white';
    oSymbolP1.style.border = 'solid white';

    xSymbolP1.style.border = 'solid black';
    oSymbolP2.style.border = 'solid black';
    
    xSymbolP2.classList.add('buttonSelect');
    oSymbolP1.classList.add('buttonSelect');

    xSymbolP1.classList.remove('buttonSelect');
    oSymbolP2.classList.remove('buttonSelect');
})

oSymbolP1.addEventListener('click', () => {
    oSymbolP1.style.border = 'solid white';
    xSymbolP2.style.border = 'solid white';

    oSymbolP2.style.border = 'solid black';
    xSymbolP1.style.border = 'solid black';
    
    oSymbolP1.classList.add('buttonSelect');
    xSymbolP2.classList.add('buttonSelect');

    oSymbolP2.classList.remove('buttonSelect');
    xSymbolP1.classList.remove('buttonSelect');
})

oSymbolP2.addEventListener('click', () => {
    oSymbolP2.style.border = 'solid white';
    xSymbolP1.style.border = 'solid white';

    oSymbolP1.style.border = 'solid black';
    xSymbolP2.style.border = 'solid black';
    
    oSymbolP2.classList.add('buttonSelect');
    xSymbolP1.classList.add('buttonSelect');

    oSymbolP1.classList.remove('buttonSelect');
    xSymbolP2.classList.remove('buttonSelect');
})

// Selecting color 2 players:

let blueColorP1 = document.querySelector('#blueColorP1');
let blueColorP2 = document.querySelector('#blueColorP2');
let orangeColorP1 = document.querySelector('#orangeColorP1');
let orangeColorP2 = document.querySelector('#orangeColorP2');


blueColorP1.addEventListener('click', () => {
    blueColorP1.style.border = 'solid thick white';
    orangeColorP2.style.border = 'solid thick white';

    blueColorP2.style.border = 'solid thick black';
    orangeColorP1.style.border = 'solid thick black';

    blueColorP1.classList.add('buttonSelect');
    orangeColorP2.classList.add('buttonSelect');

    blueColorP2.classList.remove('buttonSelect');
    orangeColorP1.classList.remove('buttonSelect');
})

blueColorP2.addEventListener('click', () => {
    blueColorP2.style.border = 'solid thick white';
    orangeColorP1.style.border = 'solid thick white';

    blueColorP1.style.border = 'solid thick black';
    orangeColorP2.style.border = 'solid thick black';

    blueColorP2.classList.add('buttonSelect');
    orangeColorP1.classList.add('buttonSelect');

    blueColorP1.classList.remove('buttonSelect');
    orangeColorP2.classList.remove('buttonSelect');
})

orangeColorP2.addEventListener('click', () => {
    orangeColorP2.style.border = 'solid thick white';
    blueColorP1.style.border = 'solid thick white';

    orangeColorP1.style.border = 'solid thick black';
    blueColorP2.style.border = 'solid thick black';

    orangeColorP2.classList.add('buttonSelect');
    blueColorP1.classList.add('buttonSelect');

    orangeColorP1.classList.remove('buttonSelect');
    blueColorP2.classList.remove('buttonSelect');
})

orangeColorP1.addEventListener('click', () => {
    orangeColorP1.style.border = 'solid thick white';
    blueColorP2.style.border = 'solid thick white';

    orangeColorP2.style.border = 'solid thick black';
    blueColorP1.style.border = 'solid thick black';

    orangeColorP1.classList.add('buttonSelect');
    blueColorP2.classList.add('buttonSelect');

    orangeColorP2.classList.remove('buttonSelect');
    blueColorP1.classList.remove('buttonSelect');
})

// Clicking "Play!"

let playerOne = playerFactory('Player 1', 'X', 'powderblue');

let startOnePlayerGame = document.querySelector('#submitOnePlayer');
startOnePlayerGame.addEventListener('click', () => {
    let playerName = 'Player 1';
    let playerSymbol = 'X';
    let playerColor = 'powderblue';

    let inputValue = document.querySelector('#playerName').value;
    if (inputValue !== '') {
        playerName = inputValue;
    }

    if (oSymbolButton.style.border === 'medium solid white') {
        playerSymbol = 'O';
    }
    
    if (orangeColorSelect.style.border === 'thick solid white') {
        playerColor = 'orange';
    }

    playerOne = playerFactory(playerName, playerSymbol, playerColor);
    onePlayerSetting.style.display = 'none';
    difficulty.style.display = 'flex';
})

let playerTwo = playerFactory('Player 2', 'O', 'orange');
let twoPlayersSetting = document.querySelector('#twoPlayersSetting');

let startTwoPlayersGame = document.querySelector('#submitTwoPlayers');
startTwoPlayersGame.addEventListener('click', () => {
    let player1Name = 'Player 1';
    let player1Symbol = 'X';
    let player1Color = 'powderblue';
    let player2Name = 'Player 2';
    let player2Symbol = 'O';
    let player2Color = 'orange';

    let inputValue1 = document.querySelector('#playerName1').value;
    if (inputValue1 !== '') {
        player1Name = inputValue1;
    }

    let inputValue2 = document.querySelector('#playerName2').value;
    if (inputValue2 !== '') {
        player2Name = inputValue2;
    }

    if (oSymbolP1.style.border === 'medium solid white') {
        player1Symbol = 'O';
        player2Symbol = 'X';
    } else if (xSymbolP1.style.border === 'medium solid white') {
        player1Symbol = 'X';
        player2Symbol = 'O';
    }
    
    if (orangeColorP1.style.border === 'thick solid white') {
        player1Color = 'orange';
        player2Color = 'powderblue';
    } else if (blueColorP1.style.border === 'thick solid white') {
        player1Color = 'powderblue';
        player2Color = 'orange';
    }

    playerOne = playerFactory(player1Name, player1Symbol, player1Color);
    playerTwo = playerFactory(player2Name, player2Symbol, player2Color);
    twoPlayersSetting.style.display = 'none';
    gameMenu.style.display = 'none';
    currentPlayer = playerOne;
    multiplayerGame.makeMove();
})


// Clicking "Super Easy" or "Impossible":
let gameMenu = document.querySelector('#gameMenu');

let superEasy = document.querySelector('#superEasy');
let impossible = document.querySelector('#impossible');

superEasy.addEventListener('click', () => {
    difficulty.style.display = 'none';
    gameMenu.style.display = 'none';
    currentGame = 'super easy';
    aiGame.updateSymbolAndColor();
    easyAI.makeMove();
})

impossible.addEventListener('click', () => {
    difficulty.style.display = 'none';
    gameMenu.style.display = 'none';
    currentGame = 'impossible';
    aiGame.updateSymbolAndColor();
    impossibleAI.makeMove();
})

// Game Logic:

/*const gameBoard = (() => {
    let board = [['','',''],['','',''],['','','']];
    
    const displayBoard = () => {
        let gameGrid = document.querySelector('#gameGrid');
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                gameGrid.rows[i].cells[j].textContent = board[i][j];
            }
        }
    }

    return {board, displayBoard};
})();
gameBoard.displayBoard();*/



const multiplayerGame = (() => {
    //let currentPlayer = playerOne;
    let gameStatus = document.querySelector('#gameStatus');

    const _gameWinner = (symbol) => {
        if (symbol==playerOne.symbol) {
            gameStatus.textContent = `Game Over! ${playerOne.name} Wins!`;
        } else if (symbol==playerTwo.symbol) {
            gameStatus.textContent = `Game Over! ${playerTwo.name} Wins!`;
        } else {
            gameStatus.textContent = 'Tie Game!'
        }
    }

    const _checkWin = () => {
        //Checking for 3-in-a-row:
        for (let i=0; i<3; i++) {
            if (board[i][0]==board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
                let winningSymbol = board[i][0];
                _gameWinner(winningSymbol);
                gameOngoing = false;
            }
        }
        for (let i=0; i<3; i++) {
            if (board[0][i]==board[1][i] && board[1][i] == board[2][i] && board[0][i] != '') {
                let winningSymbol = board[0][i];
                _gameWinner(winningSymbol);
                gameOngoing = false;
            }
        }
        if (board[0][0]==board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
            let winningSymbol = board[0][0];
            _gameWinner(winningSymbol);
            gameOngoing = false;
        }
        if (board[2][0]==board[1][1] && board[1][1] == board[0][2] && board[0][2] != '') {
            let winningSymbol = board[2][0];
            _gameWinner(winningSymbol);
            gameOngoing = false;
        }
        //Checking for tie:
        let numberEmptyCells = 0;
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (board[i][j] === '') {
                    numberEmptyCells += 1;
                }
            }
        }
        if (numberEmptyCells === 0 && gameOngoing) {
            _gameWinner();
            gameOngoing = false;
        }
    }

    const _switchPlayer = () => {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }
    }

    const makeMove = () => {
        let clickedIndices = [];
        let tableCells = document.querySelectorAll('td');
        tableCells.forEach(cell => cell.addEventListener('click', () => {
            if (!gameOngoing) return;
            clickedIndices.push(cell.parentElement.rowIndex);
            clickedIndices.push(cell.cellIndex);
            if (board[clickedIndices[0]][clickedIndices[1]] != '') {
                clickedIndices = [];
                return;
            } else {
                board[clickedIndices[0]][clickedIndices[1]] = currentPlayer.symbol;
                gameGrid.rows[clickedIndices[0]].cells[clickedIndices[1]].style.color = currentPlayer.color;
                displayBoard();
                clickedIndices = [];
                _checkWin();
                _switchPlayer();
            }
            
        }))
    }

    return {makeMove};
})();



const aiGame = (() => {
    let gameStatus = document.querySelector('#gameStatus');
    
    const updateSymbolAndColor = () => {
        if (playerOne.symbol === 'X') {
            aiSymbol = 'O';
        } else {
            aiSymbol = 'X';
        }

        if (playerOne.color === 'powderblue') {
            aiColor = 'orange';
        } else {
            aiColor = 'powderblue';
        }
    }

    const gameWinner = (symbol) => {
        if (symbol==playerOne.symbol) {
            gameStatus.textContent = `Game Over! ${playerOne.name} Wins!`;
        } else if (symbol==aiSymbol) {
            gameStatus.textContent = `Game Over! The Computer Wins!`;
        } else {
            gameStatus.textContent = 'Tie Game!'
        }
    }

    return {aiSymbol, aiColor, updateSymbolAndColor, gameWinner};    
})()



const easyAI = (() => {

    const _checkWin = () => {
        //Checking for 3-in-a-row:
        for (let i=0; i<3; i++) {
            if (board[i][0]==board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
                let winningSymbol = board[i][0];
                aiGame.gameWinner(winningSymbol);
                gameOngoing = false;
            }
        }
        for (let i=0; i<3; i++) {
            if (board[0][i]==board[1][i] && board[1][i] == board[2][i] && board[0][i] != '') {
                let winningSymbol = board[0][i];
                aiGame.gameWinner(winningSymbol);
                gameOngoing = false;
            }
        }
        if (board[0][0]==board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
            let winningSymbol = board[0][0];
            aiGame.gameWinner(winningSymbol);
            gameOngoing = false;
        }
        if (board[2][0]==board[1][1] && board[1][1] == board[0][2] && board[0][2] != '') {
            let winningSymbol = board[2][0];
            aiGame.gameWinner(winningSymbol);
            gameOngoing = false;
        }
        //Checking for tie:
        let numberEmptyCells = 0;
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (board[i][j] === '') {
                    numberEmptyCells += 1;
                }
            }
        }
        if (numberEmptyCells === 0 && gameOngoing) {
            aiGame.gameWinner();
            gameOngoing = false;
        }
    }

    const _easyAIMove = () => {
        if (!gameOngoing) return;
        let emptyEntries = [];
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (board[i][j] === '') {
                    emptyEntries.push([i,j]);
                }
            }
        }
        if ((emptyEntries.length) != 0) {
            let randomEntry = emptyEntries[Math.floor(Math.random()*emptyEntries.length)];
            board[randomEntry[0]][randomEntry[1]] = aiSymbol;
            gameGrid.rows[randomEntry[0]].cells[randomEntry[1]].style.color = aiColor;
            displayBoard();
            _checkWin();
        }
    }

    const makeMove = () => {
        let clickedIndices = [];
        let tableCells = document.querySelectorAll('td');
        tableCells.forEach(cell => cell.addEventListener('click', () => {
            if (!gameOngoing) return;
            clickedIndices.push(cell.parentElement.rowIndex);
            clickedIndices.push(cell.cellIndex);
            if (board[clickedIndices[0]][clickedIndices[1]] != '') {
                clickedIndices = [];
                return;
            } else {
                board[clickedIndices[0]][clickedIndices[1]] = playerOne.symbol;
                gameGrid.rows[clickedIndices[0]].cells[clickedIndices[1]].style.color = playerOne.color;
                displayBoard();
                _checkWin();
                clickedIndices = [];
                _easyAIMove();
            }
            
        }))
    }

    return {makeMove};
})()



const impossibleAI = (() => {

    const _checkWinFinal = () => {
        //Checking for 3-in-a-row:
        for (let i=0; i<3; i++) {
            if (board[i][0]==board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
                let winningSymbol = board[i][0];
                aiGame.gameWinner(winningSymbol);
                gameOngoing = false;
            }
        }
        for (let i=0; i<3; i++) {
            if (board[0][i]==board[1][i] && board[1][i] == board[2][i] && board[0][i] != '') {
                let winningSymbol = board[0][i];
                aiGame.gameWinner(winningSymbol);
                gameOngoing = false;
            }
        }
        if (board[0][0]==board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
            let winningSymbol = board[0][0];
            aiGame.gameWinner(winningSymbol);
            gameOngoing = false;
        }
        if (board[2][0]==board[1][1] && board[1][1] == board[0][2] && board[0][2] != '') {
            let winningSymbol = board[2][0];
            aiGame.gameWinner(winningSymbol);
            gameOngoing = false;
        }
        //Checking for tie:
        let numberEmptyCells = 0;
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (board[i][j] === '') {
                    numberEmptyCells += 1;
                }
            }
        }
        if (numberEmptyCells === 0 && gameOngoing) {
            aiGame.gameWinner();
            gameOngoing = false;
        }
    }

    const _checkWinMinimax = () => {
        //Checking for 3-in-a-row:
        for (let i=0; i<3; i++) {
            if (board[i][0]==board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
                let winningSymbol = board[i][0];
                if (winningSymbol === playerOne.symbol) {
                    return 10;
                } else {
                    return -10;
                }
            }
        }
        for (let i=0; i<3; i++) {
            if (board[0][i]==board[1][i] && board[1][i] == board[2][i] && board[0][i] != '') {
                let winningSymbol = board[0][i];
                if (winningSymbol === playerOne.symbol) {
                    return 10;
                } else {
                    return -10;
                }
            }
        }
        if (board[0][0]==board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
            let winningSymbol = board[0][0];
            if (winningSymbol === playerOne.symbol) {
                return 10;
            } else {
                return -10;
            }
        }
        if (board[2][0]==board[1][1] && board[1][1] == board[0][2] && board[0][2] != '') {
            let winningSymbol = board[2][0];
            if (winningSymbol === playerOne.symbol) {
                return 10;
            } else {
                return -10;
            }
        }
        //Checking for tie:
        let numberEmptyCells = 0;
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (board[i][j] === '') {
                    numberEmptyCells += 1;
                }
            }
        }
        if (numberEmptyCells === 0 && gameOngoing) {
            return 0;
        }

    }

    const _findBestMove = () => {
        if (!gameOngoing) return;
        let bestValue = 1000;
        let bestMove = null;
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = aiSymbol;
                    let value = _minimax(0, true);
                    if (value < bestValue) {
                        bestValue = Math.min(bestValue, value);
                        bestMove = [i,j];
                    }
                    board[i][j] = '';
                }
            }
        }
        board[bestMove[0]][bestMove[1]] = aiSymbol;
        gameGrid.rows[bestMove[0]].cells[bestMove[1]].style.color = aiColor;
        displayBoard();
        _checkWinFinal();
    }

    const _minimax = (depth, isMaximizingPlayer) => {
        if (_checkWinMinimax() === 10) {
            return 10-depth;
        } else if (_checkWinMinimax() === -10) {
            return -10+depth;
        } else if (_checkWinMinimax() === 0) {
            return 0;
        }

        if (isMaximizingPlayer) {
            let bestValue = -1000;
            for (let i=0; i<3; i++) {
                for (let j=0; j<3; j++) {
                    if (board[i][j] === '') {
                        board[i][j] = playerOne.symbol;
                        
                        let value = _minimax(depth+1, !isMaximizingPlayer);
                        bestValue = Math.max(bestValue, value);
                        board[i][j] = '';
                    }
                }
            }
            return bestValue;
        } else {
            let bestValue = 1000;
            for (let i=0; i<3; i++) {
                for (let j=0; j<3; j++) {
                    if (board[i][j] === '') {
                        board[i][j] = aiSymbol;
                        let value = _minimax(depth+1, !isMaximizingPlayer);
                        bestValue = Math.min(bestValue, value);
                        board[i][j] = '';
                    }
                }
            }
            return bestValue;
        }
    }

    const makeMove = () => {
        let clickedIndices = [];
        let tableCells = document.querySelectorAll('td');
        tableCells.forEach(cell => cell.addEventListener('click', () => {
            if (!gameOngoing) return;
            clickedIndices.push(cell.parentElement.rowIndex);
            clickedIndices.push(cell.cellIndex);
            if (board[clickedIndices[0]][clickedIndices[1]] != '') {
                clickedIndices = [];
                return;
            } else {
                board[clickedIndices[0]][clickedIndices[1]] = playerOne.symbol;
                gameGrid.rows[clickedIndices[0]].cells[clickedIndices[1]].style.color = playerOne.color;
                displayBoard();
                _checkWinFinal();
                clickedIndices = [];
                _findBestMove();
            }
            
        }))
    }

    return {makeMove};
})()



// Main Menu and Restart Game buttons:
let gameStatus = document.querySelector('#gameStatus');

let mainMenuButton = document.querySelector('#mainMenu');
mainMenuButton.addEventListener('click', () => {
    location.reload();
})

let restartGameButton = document.querySelector('#restartGame');
restartGameButton.addEventListener('click', () => {
    gameStatus.textContent = '';
    board = [['','',''],['','',''],['','','']];
    gameOngoing = true;
    displayBoard();
    
    if (currentGame === 'super easy') {
        easyAI.makeMove();
    } else if (currentGame === 'impossible') {
        impossibleAI.makeMove();
    } else if (currentGame === 'two players') {
        currentPlayer = playerOne;
        multiplayerGame.makeMove();
    }
})