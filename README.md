#Tic-Tac-Toe
---
    
<br />
###Description
This is a two-player turn-based game. There are two version: 

- a web version;
- a console version (tic-tac-toe.js)

<br/>

###Technology
The web-based version was developed using:

- HTML5 (frontend);
- CSS (frontend);
- Javascript (for the game logic); 
- jQuery 2.2.4 (for the game logic and updating of the gameplay).


The console-based version was developed using javascript to be run in a javascript-supported console. 

<br/>
###How it works

In the web version, HTML5 and CSS were used to layout and present the user interface including greeting/instructions, the grid (with nine squares) and the RESTART button. jQuery event listeners were set up to detect user mouseclicks on the grid squares. The player moves are then recorded. The game status is updated and the corresponding updates to the user interface are made. Pressing the 'RESTART' button resets the grid squares to their initial start states.

The console version uses a while-loop to alternate between the two players, updating the player moves and game status after a number between 0 and 9 are provided. A separate displayGrid function is called when the game is first started and after each move to display the grid and prompt the next player's move (if any).

