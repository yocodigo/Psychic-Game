$(document).ready(function() {
	function clickFunction(event) {
		document.getElementById("display-4").innerHTML = "Enter any letter";
		document.getElementsByClassName("game").style.visibility = "visible";
	}	
			
		//Initial counts
		let wCount = 0;
		let lCount = 0;
		let gCount = 9;
		$("#winCount").html(wCount);
		$("#lossCount").html(lCount);
		$("#guessCount").html(gCount);
		
		let computerGuess = $("pcGuess");
	
		let userText = $("guess");
		
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
});