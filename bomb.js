document.addEventListener("DOMContentLoaded", function() {

	// DETERMINE WHICH WIRES NEED TO BE CUT

	var wires = [];
	for (var i=0; i<5; i++) {
		wires.push((Math.random() > .5));
	}

	console.log(wires);

	var blueWire = wires[0];
	var greenWire = wires[1];
	var redWire = wires[2];
	var whiteWire = wires[3];
	var yellowWire = wires[4];


	// SET TIMER AND COUNTDOWN

	var timer = parseFloat(document.getElementById("timer").textContent).toFixed(2);

	// The main coundown function (with checkIfDone function placed inside, 
	// since that needs to be looped while timer is running)
	var countdown = function() {
		timer -= .01;
		document.getElementById("timer").textContent =  Math.round(timer * 100) / 100;
		if (checkIfDone(wires) == true) {
			clearInterval(timerId);
			console.log("you won")
		}
	}

	var timerId = setInterval(countdown, 10);

	// End of countdown / Game Over

	function gameOver() {
		clearInterval(timerId);
		document.body.style.backgroundImage = "url('img/explosion.jpg')";
	}

	setTimeout(function () {
		gameOver();
	}, 30001);


	// CHECK TO SEE IF SUCCESSFULLY CUT ALL REMAINING WIRES

	function checkIfDone(wires) {
	    for (var i = 0; i < wires.length - 1; i++) {
	        if (wires[i] == true) {
	            return false;
	        }
	    } return true;
	}


	// CUTTING WIRES

	document.getElementById("blue-wire").addEventListener("click", function() {
		document.getElementById("blue-wire").setAttribute("src", "img/cut-blue-wire.png");
		if (blueWire === false) {
			gameOver();
		} else {
			wires[0] = false;
			console.log(wires);
		}
	});

	document.getElementById("green-wire").addEventListener("click", function() {
		document.getElementById("green-wire").setAttribute("src", "img/cut-green-wire.png");
		if (greenWire === false) {
			gameOver();
		} else {
			wires[1] = false;
			console.log(wires);
		}
	});

	document.getElementById("red-wire").addEventListener("click", function() {
		document.getElementById("red-wire").setAttribute("src", "img/cut-red-wire.png");
		if (redWire === false) {
			gameOver();
		} else {
			wires[2] = false;
			console.log(wires);
		}
	});

	document.getElementById("white-wire").addEventListener("click", function() {
		document.getElementById("white-wire").setAttribute("src", "img/cut-white-wire.png");
		if (whiteWire === false) {
			gameOver();
		} else {
			wires[3] = false;
			console.log(wires);
		}
	});

	document.getElementById("yellow-wire").addEventListener("click", function() {
		document.getElementById("yellow-wire").setAttribute("src", "img/cut-yellow-wire.png");
		if (yellowWire === false) {
			gameOver();
		} else {
			wires[4] = false;
			console.log(wires);
		}
	});


	// RESET GAME

	document.getElementById("reset").addEventListener("click", function() {
		window.location.reload();
	});

});


// BETTER WAY TO ADD EVENT LISTENERS TO CUT THE WIRES

// for (var i = 0; i < wires.children.length; i++) {
// 	wires.children[i].addEventListener("click", function()) {
// 		// Chang src of image to cut version of wire (ID must be named just color)
// 		this.src = "img/cut-" + this.id + "-wire.png";

// 		// If good choice, change value in array to false
// 		if(wireIsGood(this.id)) {
// 			this.removeEventListener("click");
// 		} else {

// 		}
// 	}
// }