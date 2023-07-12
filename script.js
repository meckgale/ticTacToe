(() => {
  const game = (() => {
    //Select game board
    const board = document.querySelector('.board');

    //Select winner text
    const endGameMessage = document.querySelector('.endGame');
    
    //Define game board array and assign them in DOM
    const boardArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    const definedElements = boardArray
      .map((element) => document.querySelector(`#${element}`));   
    
      //Assign player mark on array
    let playerArray = ['', '', '', '', '', '', '', '', ''];

    let currentPlayerIndex = 0;

    const getCurrentPlayer = () => {
      return currentPlayerIndex % 2 === 0 ? player1 : player2;
    };

    const switchTurn = () => {
      currentPlayerIndex++;
    };

    const checkWinner = (mark) => {
      if (
        (playerArray[0] === mark && playerArray[1] === mark && playerArray[2] === mark) ||
        (playerArray[3] === mark && playerArray[4] === mark && playerArray[5] === mark) ||
        (playerArray[6] === mark && playerArray[7] === mark && playerArray[8] === mark) ||
        (playerArray[0] === mark && playerArray[3] === mark && playerArray[6] === mark) ||
        (playerArray[1] === mark && playerArray[4] === mark && playerArray[7] === mark) ||
        (playerArray[2] === mark && playerArray[5] === mark && playerArray[8] === mark) ||
        (playerArray[0] === mark && playerArray[4] === mark && playerArray[8] === mark) ||
        (playerArray[2] === mark && playerArray[4] === mark && playerArray[6] === mark) 
      ) {
        return true;
      }
      else {
        return false;
      }
    };

    const checkDraw = () => {
      for(let i = 0; i < 9; i++){
        if(playerArray[i] === ''){
          return false;
        }
      }
      return true;
    };

    const reset = () => {
      for(let i = 0; i < 9; i++){
        definedElements[i].textContent = '';
      };
      for(let i = 0; i < 9; i++) {
        playerArray[i] = '';
      }
      currentPlayerIndex = 0;
      endGameMessage.textContent = '';
    };
    
    return { board, endGameMessage, definedElements, boardArray, playerArray, getCurrentPlayer, switchTurn, checkWinner, checkDraw, reset};
  })();

  const player = (name, mark) => {
    return {name, mark}
  }

  const player1 = player('Player1', 'X');
  const player2 = player('Player2', 'O');

  game.board.addEventListener('click', (e) => {
    // Check if the clicked tile is valid and not already marked
    const index = game.boardArray.indexOf(e.target.id);
    // Get the current player object based on the turn
    const currentPlayer = game.getCurrentPlayer();
    if (index !== -1 && game.playerArray[index] === '' && game.checkWinner(currentPlayer.mark) !== true) {
       // Update the DOM and game state with the player's mark
      game.definedElements[index].textContent = currentPlayer.mark;
      game.playerArray[index] = currentPlayer.mark;
      if(game.checkWinner(currentPlayer.mark)) {
        game.endGameMessage.textContent = currentPlayer.name + " wins!";
        setTimeout(game.reset, 2500);
      }
      else if(game.checkDraw()) {
        game.endGameMessage.textContent = "It's a draw!";
        setTimeout(game.reset, 2500);
      }
      else {
        game.switchTurn();
      }
    }
  });

  return { game };
})();

