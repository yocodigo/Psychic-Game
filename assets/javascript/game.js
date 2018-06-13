$(document).ready(function() {
	
	// Initial counts
	let wCount = 0;
	let lCount = 0;
	let gCount = 9;
	
	// Display initial counts
	$("#winCount").html(wCount);
	$("#lossCount").html(lCount);
	$("#guessCount").html(gCount);

	// User Selection Process
	// When I press a button(onkeyup), trigger the following events (using function(event)...
	$(document).keyup(function(event) {
		let userGuess = event.key;
		$("#guess").html(userGuess);
		
		// Computer Selection Process
		let computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		let computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

		// Compare user and machine selections
		if (userGuess != computerGuess) {

			// User loses if all 9 guesses used up
			if (gCount <= 0) {
				lCount++;
				$("#lossCount").html(lCount);
				gCount = 9;
				$("#guessCount").html(gCount);
				alert("YOU LOSE! Start Over.");
			}else {
				// Subtract one guess
				gCount--;
				$("#guessCount").html(gCount);
				
			}	
		}else {
			// user's guess matches machine guess
			alert("YOU WIN!");				
			wCount++;
			$("#winCount").html(wCount);
			gCount = 9;
			$("#guessCount").html(gCount);	
		}
	});// function closing bracket	
	
});