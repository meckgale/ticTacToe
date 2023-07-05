const GameBoard = (function() {
    //Define game board
    const gameBoard = document.querySelector('.game-board');
    //Create game board array
    const gameBoardArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

    //Define each square on the board 
    const QueryGenerator = (tile) => {
        return document.querySelector(`#${tile}`);
    };

    //Select or call each square from array
    const selectedElements = [];
    gameBoardArray.map((element) => {
       selectedElements.push(QueryGenerator(element));
    });

    //Create player object
    const player = (name) => {

        return { name };
    };

    // const player1 = player('player1');
    // const player2 = player('player2');

    // return { player1, player2 }

    gameBoard.addEventListener('click', function(e) {
        const index = gameBoardArray.indexOf(e.target.id);
        if (index !== -1) {
          selectedElements[index].textContent = 'X';
        }
      });
})();