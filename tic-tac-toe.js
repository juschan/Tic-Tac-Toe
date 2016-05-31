function includes(array, int) {

    if(typeof(array) === "undefined") {
        return false;
    }

    for(var i=0; i<array.length; i++) {
        if (array[i]===int) {
            return true;
        }
    }
    return false;
}

function makeMove(players, indicator){
    var input=true;
    while(input) {

        //Numbers from prompt are stored as strings. Need conversion to integer!
        var mov=parseInt(prompt("Player " + (indicator+1) +": Provide a move from 1 to 9:"));

        if(typeof(players[indicator])==="undefined") {
            players[indicator].push(mov);
        } else if( includes(players[indicator],mov) ||
                includes(players[indicator+1],mov))  {
            alert("Square already taken, choose another move.");
        } else {
            players[indicator].push(mov);
        }
        input=false;
    }
}

function testCombi(player_mov, combi){
    if( includes(player_mov, combi[0]) &&
        includes(player_mov, combi[1]) &&
        includes(player_mov, combi[2])) {
            return true;
        }
    return false;
}

function outcome(players, indicator) {

        //test winning combination
    if( testCombi(players[indicator], [1,2,3]) === true ||
        testCombi(players[indicator], [4,5,6]) === true ||
        testCombi(players[indicator], [7,8,9]) === true ||
        testCombi(players[indicator], [1,4,7]) === true ||
        testCombi(players[indicator], [2,5,8]) === true ||
        testCombi(players[indicator], [3,6,9]) === true ||
        testCombi(players[indicator], [1,5,8]) === true ||
        testCombi(players[indicator], [3,5,7]) === true)
    {
        return "Player " + (indicator+1) + " has won.";
    }

    //test for tie
    if((players[0].length + players[1].length) === 9) {
        return "Tied Game";
    }

    return "continue";
}


function displayGrid(players) {
    for(var i=0; i<3; i++) {
        var row=[];
        for(var j=1; j<=3; j++) {
            if(includes(players[0], (i*3+j))) {
                row.push("X");
            } else if (includes(players[1],(i*3+j))) {
                row.push("O");
            } else {
                row.push(i*3+j);
            }
        }
        console.log(row.join(" || "));

        if(i !== 2 ) {
            console.log("===========");
        }
    }
    console.log("");
}

//create array of arrays. Player 1 X, player 2 O.
var players=[[],[]];
var counter=0;

while(counter<9) {
    var result;
    displayGrid(players);

    for(i=0;i<2;i++) {
        //get player to make a move
        //console.log("Player: " + (i+1));
        makeMove(players,i);
        //console.log(typeof(players[0][0]));
        //console.log(players[0].join("-"));
        //console.log(players[1].join("-"));
        displayGrid(players);
        counter++;

        //Determine if someone has won or tie etc.
        result=outcome(players,i);
        if(result === "continue") {
            continue;
        } else if(result === "Tied Game" || result.search("won")>=0) {
            console.log(result);
            break;
        }

    }//for loop
    if(result === "Tied Game" || result.search("won")>=0) {
        break;
    }
}//while loop
