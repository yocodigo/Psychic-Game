function clickFunction(event) {
			document.getElementById("display-4").innerHTML = "Enter any letter";
			// document.getElementById("crystal").setAttribute = (display, inline);
		}	
			
		//Initial score
		var winCount = document.getElementById("winCount");
		winCount.textContent = 0;
		var lossCount = document.getElementById("lossCount");
		lossCount.textContent = 0;
		var guessCount = document.getElementById("guessCount");
		guessCount.textContent = 0;
		var computerGuess = document.getElementById("pcGuess");

		// }
	
		var userText = document.getElementById("guess");
		// console.log(userText)

		// User Selection Process
		//When I press a button(onkeyup), trigger the following events (using function(event)...
		document.onkeyup = function(event) {
		userText.textContent = event.key;
		var userGuess = event.key;
		

		//Computer Selection Process
		var computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
		computerGuess.textContent;
		var maxValue = 10;
		//Compare user and computer selections
	 	if (userGuess != computerGuess) {
			if (guessCount > 9) {
				lossCount.textContent++;
				alert("YOU LOSE! Start Over.");
				guessCount.textContent = 0;
				winCount.textContent = 0;
			}else {
				guessCount.textContent++;
				console.log("Your guess is " + userGuess);
				console.log("the computer's guess is " + computerGuess);
			}	
		}else {
			// (userGuess == computerGuess)
		 	winCount.textContent++;
			guessCount.textContent = 0;	
			alert("YOU WIN!");				
		}


			// if (userGuess === computerGuess) {
		 //        winCount.textContent++;
			// 	guessCount.textContent = 0;	
			// 	alert("YOU WIN!");
			// }else (userGuess != computerGuess) {
			// 	if (computerGuess > maxValue) {
			// 		lossCount.textContent++;
			// 		alert("YOU LOSE! Start Over.");
			// 		guessCount.textContent = 0;
			// 		lossCount.textContent = 0;
			// 		winCount.textContent = 0;
			// 	}else {
			// 	guessCount.textContent++;
			// 	console.log("Your guess is " + userGuess);
			// 	console.log("the computer's guess is " + computerGuess);
		    	// } //second else closing bracket
			// document.querySelector("#game").innerHTML = html;
	    	// }//first else closing bracket		
	

	}//function closing bracket	