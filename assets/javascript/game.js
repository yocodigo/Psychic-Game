$(document).ready(function() {
	var gameStatus = false;
	
	$(".jumbotron").click(function() {
		gameStatus = true;
		$("#display-4").html("Enter any letter");
		
	});	
	debugger;
	console.log(gameStatus);
	if(gameStatus) {
		runGame();
	}
	
	//Initial counts
	let wCount = 0;
	let lCount = 0;
	let gCount = 9;
	let computerGuess = $("pcGuess");
	let userText = $("guess");
	
	//Display initial counts
	$("#winCount").html(wCount);
	$("#lossCount").html(lCount);
	$("#guessCount").html(gCount);
		
	function runGame() {

		$(".game").attr("visibility", "visible");	

		// User Selection Process
		//When I press a button(onkeyup), trigger the following events (using function(event)...
		document.onkeyup = function(event) {
			
			userText.textContent = event.key;
			let userGuess = event.key;
			
			//Computer Selection Process
			let computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			let computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
			computerGuess.textContent;

			//Compare user and computer selections
			if (userGuess != computerGuess) {
				
				if (gCount <= 0) {
					lCount++;
					$("#lossCount").html(lCount);
					gCount = 9;
					$("#guessCount").html(gCount);
					alert("YOU LOSE! Start Over.");
				}else {
					gCount--;
					$("#guessCount").html(gCount);
					
				}	
			}else {
				alert("YOU WIN!");				
				wCount++;
				$("#winCount").html(wCount);
				gCount = 9;
				$("#guessCount").html(gCount);	
			}
		}//function closing bracket	
	}	
});