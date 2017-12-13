var items = ["r", "p","s"];

// Arrays for deciding winner
var rock = ["s", "r", "p"];
var paper = ["r", "p", "s"];
var scissor = ["p", "s", "r"];

var scoreComp = 0;
var scorePlayer = 0;

// Main function
function game() {
	// Play 5 games
	for(var ii = 1; ii <= 5; ii++) {
		// get user choice r, p or s
		choice = getInput();
		// play the rest of the game
		alert(completeTurn(choice) + "\n" + "Player: " + scorePlayer + "\nComputer: " + scoreComp);
	}	
		alert("Player: " + scorePlayer + "\nComputer: " + scoreComp + "\n" + overallWinner());
}

function getInput() {
	var dog = prompt("(r)ock, (p)aper or (s)cissor?");
	return dog;
}

function completeTurn(playerChoice) {
	// gets computer move
	var comp_choice = getComputerMove(items);
	// returns whether you won or not
	var message = winStatus(playerChoice, comp_choice);
	return message;
}

function getComputerMove(items) {
	var index = Math.floor(Math.random()*3);
	return items[index];
}

// Compares the results and sees who won
function winStatus(playerGo, compGo) {
	// Fins relevant array to pass to win logic
	if (playerGo === "r") {
		return beats(compGo, rock, scorePlayer, scoreComp)
	} else if (playerGo === "p") {
		return beats(compGo, paper, scorePlayer, scoreComp)
	} else if (playerGo === "s") {
		return beats(compGo, scissor, scorePlayer, scoreComp)
	} 
}

// Logic for checking win status
function beats(compGo, array) {
	if (array.indexOf(compGo) === 1) {
		return "You have drawn with the computer this round :/";
	} else if (array.indexOf(compGo) === 0) {
		scorePlayer++;
		return "You won the round!";
	} else if (array.indexOf(compGo) === 2) {
		scoreComp++;
		return "You lost the round :(";
	}
}

// Returns a string of the overall winner
function overallWinner() {
	if (scorePlayer > scoreComp) {
		return "You won the game!";
	} else if (scorePlayer < scoreComp) {
		return "The computer has won the game, bad luck";
	} else {
		return "The game is tied";
	}
}

game();