// const GameBoard = (function() {
//     //Define game board
//     const gameBoard = document.querySelector('.game-board');
//     //Create game board array
//     const gameBoardArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

//     //Define each square on the board 
//     const QueryGenerator = (tile) => {
//         return document.querySelector(`#${tile}`);
//     };

//     //Select or call each square from array
//     const selectedElements = [];
//     gameBoardArray.map((element) => {
//        selectedElements.push(QueryGenerator(element));
//     });

//     //Create player object
//     const player = (name) => {

//         return { name };
//     };

//     // const player1 = player('player1');
//     // const player2 = player('player2');

//     // return { player1, player2 }

//     let count = 1;
//     gameBoard.addEventListener('click', function() {
//       count++;
//       playerTurn();
//     });

//     let playerMark;
//     function playerTurn () {
//       if (count % 2 == 0) {
//         playerMark = 'X';
//       }
//       else if(count % 2 != 0) {
//         playerMark = 'O';
//       }
//       return playerMark;
//     };

//     const displayedElements = ['', '', '', '', '', '', '', '', ''];
//     console.log(displayedElements);
//     function render() {
        
//     }

//     gameBoard.addEventListener('click', function(e) {
//         const index = gameBoardArray.indexOf(e.target.id);
//         if (index !== -1 ) {
//           selectedElements[index].textContent = playerMark;
//           displayedElements.splice(index, 1, playerMark);
//           console.log(displayedElements);
//         }
//       });
// })();

///New file

const test = (function() {
  const game = (() => {
    //Select game board
    const board = document.querySelector('.board');
    
    //Define game board array and assign them in DOM
    const boardArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    const definedElements = boardArray
      .map((element) => document.querySelector(`#${element}`));   
    
      //Assign player mark on array
    const playerArray = ['', '', '', '', '', '', '', '', ''];
    
    return { board, definedElements, boardArray, playerArray};
  })();

  const move = (() => {
    
  })();

  const player = (name, mark) => {
    return {name, mark}
  }

  const player1 = player('player1', 'X');
  const player2 = player('player2', 'O');

  game.board.addEventListener('click', function(e) {
    const index = game.boardArray.indexOf(e.target.id);
    if (index !== -1 ) {
      game.definedElementsdElements[index].textContent = player1.mark;
      game.playerArray.splice(index, 1, player1.mark);
      console.log(game.playerArray);
    }
  });

  return { game };
})();
console.log(test.game.playerArray);