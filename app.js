
var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {

		//1. Random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		
		//2.Display the result
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		//3.Update the number not 1 & double 6 NULL
		// if (dice === 6 && lastDice === 6 ) {
		// 	//loose all score
		// 	score[activePlayer] = 0;
		// 	document.querySelector('#score-' + activePlayer).textContent = '0';
		// 	nextPlayer();
		// } else if (dice !== 1 ) {
		// 	//add score
		// 	roundScore += dice;
		// 	document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
		// } else {
		// 	//next player
		// 	nextPlayer();
		// }

		// lastDice = dice;

		if (dice1 !== 1 && dice2 !== 1) {
			//add score
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
		} else {
			alert('Bad Luck. You got double One condition.!!');

			//next player
			nextPlayer();
		}
	}
});


document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		//add current score to global score
		score[activePlayer] += roundScore;

		//update the UI
		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
		var input = document.querySelector('.final-score').value;
		var winningScore
		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}
		//if the player won the game
		if (score[activePlayer] >= winningScore ) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
			document.getElementById('dice-1').style.display = 'block';
			document.getElementById('dice-2').style.display = 'block';
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.remove('active');

			document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';


		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.getElementById('dice-1').style.display = 'none ';
		document.getElementById('dice-2').style.display = 'none ';
}

function init() {
	score = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	//var x = document.querySelector('#score-0').textContent;
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');


	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');


	
}
