/* Tic-Tac-Tester.js

This script will test the game logic of your tic tac toe game. To use it you will need to include it in your html file after you main tic-tac-toe script. You will need to declare the following functions in the global scope:

# playTurn(index)
It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

# isGameOver()
It should return a true or false if the game is over.

# whoWon()
It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

# restart()
It should restart the game so it can be played again.

It is assumed that the turns of the player will be automatically changed after an allowed move.

The application will console log all the passed or failed test */

var grid=[0,0,0,0,0,0,0,0,0];
player=1;

function sum(total, num){
    return total+num;
}

function restart(){
    //beware not to call var grid - this creates local variable
    grid=[0,0,0,0,0,0,0,0,0];
    player=1;
}

function playTurn(index) {
    //test if grid[index] is 0, which means square is not used
    if(!grid[index]) {
        grid[index]=player;
        player = (player===1)? 2: 1;
        return true;
    }
    return false;
}

function isGameOver() {
    return whoWon()? true: false;
}

function whoWon() {
    //test for start of game
    if (grid.reduce(sum)===0) return 0;
    //Test for winning combo
     var w=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
     for(var i=0; i<8; i++){
         var result = grid[w[i][0]] * grid[w[i][1]] * grid[w[i][2]];
         console.log("i: " + i);
         console.log(grid[w[i][0]] + "-" + grid[w[i][1]] + "-" + grid[w[i][2]]);
         if (result===1) return 1;
         if (result===8) return 2;
     }
    //must test all winning combi before testing for tie!!
    //Game not over, return 0;
    if (grid.reduce(sum) === 13) return 3;
    return 0;
}

$(function() {
    //refer to Jonathon's code for complex event handling
    //https://github.com/giftofjehovah/ball

    //Respond when restart button is pressed.
    $('.restart').on('click', function (event) {
        //restart the logic
        restart();
        //refresh the UI
        for(var i=0; i<9; i++) {
          $('.square:nth-child(' + (i+1) +')').html(i);
        }
        $('.status').html("New Game: Player 1 to start.");
    });

    //Respond when one of the squares are pressed.
    $('.square').on('click', function (event) {
      var sq = event.currentTarget.innerText;

      //check to see if one of the squares are clicked
      if( '012345678'.indexOf(sq)>=0) {
          //If the game is over, go alert box to tell players to RESTART
          if(isGameOver()) {
              alert("Game Over. Press RESTART to play again.");
          } else {
            console.log("Before playturn: " + grid.join("-"));
          //run player turn
          playTurn(parseInt(sq));
          console.log("After playturn: " + grid.join("-"));
          //test for WhoWon
          var status=whoWon();
          console.log("WhoWon: " + status);
          console.log(grid.join("-"));
          var msg= [['Player ' + player + ' select a square'],
            ['Player 1 has won. Press RESTART to play again.'],
            ['Player 2 has won. Press RESTART to play again.'],
            ['Game is a draw. Press RESTART to play again.']];

          //Update square UI using child selector
          //Note that css is one-based, js is zero-based.
          //player is already switched after playTurn
          $('.square:nth-child(' + (parseInt(sq)+1) +')').html((player===1)?"❄":"✪");

          //update UI status
          $('.status').html(msg[status]);
        }
      }
  });

});
