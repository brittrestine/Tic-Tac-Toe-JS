const PLAYER_KEY = 'X'
const COMPUTER_KEY = 'O'

$(document).ready(function(){
  var grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];

  function isGameOver() {
    //check horizontal
    for (var r = 0; r < 3; r++) {
      if ( grid[r][0] !== ' ' && grid[r][0] === grid[r][1] && grid[r][0] === grid[r][2] ) {
        return grid[r][0]
      };
    };
    //check vertical
    for (var c = 0; c < 3; c++) {
     if ( grid[0][c] !== ' ' && grid[0][c] === grid[1][c] && grid[0][c] === grid[2][c] ) {
        return grid[0][c]
      };
    };
    // check diagonal - top left bottom right
     if ( grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] ) {
        return grid[0][0]
      };

     // check diagonal - bottom left top right
     if ( grid[2][0] !== ' ' && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2] ) {
        return grid[2][0]
      };

      for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
          if ( grid[r][c] === ' ' ) {
            return false;
          }
        }
      }

      return null;
  };

  function moveAI() {
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        if ( grid[r][c] === ' ' ) {
          return {
            r: r,
            c: c
          };
        }
      }
    }
    return null;
  };

  $('.col').click(function() {
    game = $(this)
    game.html(PLAYER_KEY);
    const r = game.data('r');
    const c = game.data('c');
    grid[r][c] = PLAYER_KEY;

    let gameState = isGameOver()
    if (gameState){
      alert("Game Over: Player " + gameState + " Wins!");
    } else {
      //move computer key
      var move = moveAI();
      grid[move.r][move.c] = COMPUTER_KEY
      $('.col[data-r=' + move.r + '][data-c=' + move.c + ']').html(COMPUTER_KEY)
    }
  });

  $('.restart').click(function(){
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        grid[r][c] = ' ';
        $('.col[data-r=' + r + '][data-c=' + c + ']').html(' ');
      }
    }
  });

});