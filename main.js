let patternList = [
	{	
		type: 0,
		pattern: [
			[]
		]
	},
	{
		type: 1,
		pattern: [
			[1, 2, 3, 4],
			[4, 3, 1, 2],
			[1, 2, 3],
			[1, 4, 1, 4],
			[2, 3, 2, 3],
			[1, 4, 2, 3],
			[2, 3, 4, 1, 2, 3],
			[1, 2, 3, 2, 1],
			[4, 3, 2, 4, 2, 3, 4]
		]
	},
	{
		type: 2,
		pattern: [
			[2, 3, 5, 4, 1, 2, 3, 5, 4, 1],
			[1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1],
			[1, 1],
			[3, 3],
			[1, 1, 4, 4],
			[2, 2, 3, 3],
			[1, 2, 3, 5, 1, 4, 3, 2, 1],
			[4, 5, 2, 3, 1, 5, 2, 3, 4],
			
		]
	},
	{
		type: 3,
		pattern: [
			[5, 1, 2, 3, 4, 3, 5, 1, 2],
			[5, 1, 4, 5, 1, 4],
			[5, 2, 3, 5, 2, 3],
			[1, 6, 2, 3, 4, 4, 6, 4, 3, 2, 1],
			[5, 1, 3, 2, 5, 2, 4, 3],
		]
	},
	{
		type: 4,
		pattern: [
			[7, 1, 2, 3, 4],
			[6, 1, 2, 3],
			[6, 1, 3, 4],
			[5, 1, 2, 5, 2, 3, 5, 2, 4, 5, 1, 4, 5, 1, 3],
			[5, 1, 2, 5, 3, 4, 5, 1, 2, 5, 3, 4],
			[5, 1, 4, 5, 2, 3, 5, 1, 4, 5, 2, 3],
			[5, 1, 3, 5, 2, 4, 5, 1, 3, 5, 2, 4],
		]
	},
];

// running vars
var isCharting;
var isRunning = false;

// pattern vars
var randomPattern = 0;
var patternProgress = 0;
var patternLength = 0;
var currentPattern = [1];
var patternHolder = [1];

// scoring vars
var noteCount = 1;
var noteCombo = 0;
var noteScore = 0;
var bestScore = 0;

// difficulty vars
var lives = 9;
var startingSpacing = 150;
var noteSpacing = startingSpacing;
var spaceDifficulty = 0;
var spaceIncrease = 100;
var startingDifficulty = 1;
var noteDifficulty = startingDifficulty;
var increaseCount = 0;
var noteIncrease = 3;
var randomType = Math.floor(Math.random() * noteDifficulty) + 1;

// dom vars
var button1;
var button2
var button3;
var button4;
var lane1;
var lane2;
var lane3;
var lane4;
var combo;
var judge;
var score;
var highScore;
var cssRoot;
var lifeList;
var stage;
var audio = new Array(10);
var audioMiss;
var audioIndex = 0;

// sets dom vars on window load
window.onload = function() {
	cssRoot = document.documentElement;
	button1 = document.getElementById("button1");
	button2 = document.getElementById("button2");
	button3 = document.getElementById("button3");
	button4 = document.getElementById("button4");
	lane1 = document.getElementById("lane1");
	lane2 = document.getElementById("lane2");
	lane3 = document.getElementById("lane3");
	lane4 = document.getElementById("lane4");
	lifeList = document.getElementsByClassName('lives');
	combo = document.getElementById("combo");
	judge = document.getElementById("judge");
	score = document.getElementById("score");
	highScore = document.getElementById("highScore");
	stage = document.getElementById("stage");
	for (var i = 0; i < audio.length; i++) {
		audio[i] = new Audio("hit.wav");
	}
	audioMiss = new Audio("miss.wav");
}

// records key presses
document.addEventListener("keypress", function onEvent(event) {
	if (event.key === "a") {
		button1.style.backgroundColor = "#7dfffb";
		button1.style.color = "#ffffff";
		var closestNote = getClosestElement(lane1, "button1");
		judgment(closestNote[0], closestNote[1]);
	} else if (event.key === "s") {
		button2.style.backgroundColor = "#7dfffb";
		button2.style.color = "#ffffff";
		var closestNote = getClosestElement(lane2, "button2");
		judgment(closestNote[0], closestNote[1]);
	} else if (event.key === "k") {
		button3.style.backgroundColor = "#7dfffb";
		button3.style.color = "#ffffff";
		var closestNote = getClosestElement(lane3, "button3");
		judgment(closestNote[0], closestNote[1]);
	} else if (event.key === "l") {
		button4.style.backgroundColor = "#7dfffb";
		button4.style.color = "#ffffff";
		var closestNote = getClosestElement(lane4, "button4");
		judgment(closestNote[0], closestNote[1]);
	}
});

// records key releases
document.addEventListener("keyup", function onEvent(event) {
	if (event.key === "a") {
		button1.style.backgroundColor = "#d9d9d7";
		button1.style.color = "#000000";
	} else if (event.key === "s") {
		button2.style.backgroundColor = "#d9d9d7";
		button2.style.color = "#000000";
	} else if (event.key === "k") {
		button3.style.backgroundColor = "#d9d9d7";
		button3.style.color = "#000000";
	} else if (event.key === "l") {
		button4.style.backgroundColor = "#d9d9d7";
		button4.style.color = "#000000";
	}
});

// plays hit sound
function playSound() {
    audio[audioIndex].play();
    audioIndex++;
    if(audioIndex > audio.length - 1) {
      audioIndex = 0;
    }
  }

// judges accuracy, updates combo & score
function judgment(note, dist) {
	if (dist < 15) {
		noteCombo += 1;
		noteScore += 300 * (1 + (noteCombo / 100));
		judge.style.color = "#ffff33";
		judge.innerText = "PERFECT!!";
		playSound();
		note.remove();
	} else if (dist < 30) {
		noteCombo += 1;
		noteScore += 200 * (1 + (noteCombo / 100));
		judge.style.color = "#70dbdb";
		judge.innerText = "Great!";
		playSound();
		note.remove();
	} else if (dist < 45) {
		noteCombo += 1;
		noteScore += 100 * (1 + (noteCombo / 100));
		judge.style.color = "#1aff1a";
		judge.innerText = "Good";
		playSound();
		note.remove();
	} else if (dist < 70) {
		noteCombo += 1;
		noteScore += 50 * (1 + (noteCombo / 100));
		judge.style.color = "#ff3385";
		judge.innerText = "Bad...";
		playSound();
		note.remove();
	} else {
		audioMiss.play();
		noteCombo = 0;
		judge.style.color = "#ff0000";
		judge.innerText = "MISS";
		lifeLost();
	}
	judge.classList.remove("bounce");
	combo.classList.remove("bounce");
	judge.scrollBy(0, 0);
	combo.scrollBy(0, 0);
	judge.classList.add("bounce");
	combo.classList.add("bounce");
	combo.innerText = noteCombo;
	score.innerText = Math.round(noteScore);
}

// subtracts lives
function lifeLost() {
	if (isRunning) {
		lifeList[lives-1].style.display = "none";
		lives -= 1;
		if (lives == 0) {
			gameOver();
		}
	}
}

// resets game
function gameOver() {
	isRunning = false;
	var allNotes = document.getElementsByClassName('note');
	var allLength = allNotes.length;
	for (var i = 0; i < allLength; i++) {
		allNotes[0].remove();
	}
	stopCharting();
	if (noteScore > bestScore) {
		bestScore = noteScore;
	}
	noteScore = 0;
	score.innerText = Math.round(noteScore);
	highScore.innerText = Math.round(bestScore);
	for (var i = 0; i < lifeList.length; i++) {
		lifeList[i].style.display = "block";
	}
	noteSpacing = startingSpacing;
	noteDifficulty = startingDifficulty;
	spaceDifficulty = 0;
	increaseCount = 0;
	stage.innerText = noteDifficulty;
	lives = 9;
}

// starts the charter
function startCharting() {
	isRunning = true;
	patternSelector();
	clearInterval(isCharting);
	isCharting = setInterval(function(){autoCharter()}, noteSpacing);
}

// selects patterns
function patternSelector() {
	randomType = Math.floor(Math.random() * noteDifficulty) + 1;
	randomPattern = Math.floor(Math.random() * (patternList[randomType].pattern.length));
	currentPattern = patternList[randomType].pattern[randomPattern];
	patternHolder = currentPattern;
	patternLength = currentPattern.length;
}

// stops the charter
function stopCharting() {
	clearInterval(isCharting);
}

// reads patterns
function noteLogic() {
	if (patternHolder[patternProgress] == 5) {
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
	} else if (patternHolder[patternProgress] == 6) {
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
	} else if (patternHolder[patternProgress] == 7) {
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
	} else {
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
	}
}

// displays patterns, manages difficulty
function autoCharter() {
	if (patternProgress < patternLength) {
		noteLogic();
	} else {
		patternProgress = 0;
		var mirrorFactor = Math.floor(Math.random() * 100) + 1;
		patternSelector();
		if (mirrorFactor > 50) {
			var mirrorHolder = [];
			for (i = 0; i < currentPattern.length; i++) {
				if (currentPattern[i] == 1) {
					mirrorHolder.push(4)
				} else if (currentPattern[i] == 2) {
					mirrorHolder.push(3)
				} else if (currentPattern[i] == 3) {
					mirrorHolder.push(2)
				} else if (currentPattern[i] == 4) {
					mirrorHolder.push(1)
				} else {
					mirrorHolder.push(currentPattern[i])
				}
			}
			patternHolder = mirrorHolder;
		}
		noteLogic();
	}
	spaceDifficulty += 1;
	if (spaceDifficulty >= spaceIncrease) {
		spaceDifficulty = 0;
		noteSpacing = noteSpacing * 0.9;
		increaseCount += 1;
		if (increaseCount >= noteIncrease && noteDifficulty < 5) {
			noteSpacing = startingSpacing;
			increaseCount = 0;
			noteDifficulty += 1;
			stage.innerText = noteDifficulty;
		}
	}
	clearInterval(isCharting);
	isCharting = setInterval(function(){autoCharter()}, noteSpacing);
}

// spawns a note on a set lane
function spawnNote(num) {
	var lane = document.getElementById("lane" + num);
	var divTest = document.createElement("div");
	divTest.className = "note";
	divTest.setAttribute("id", "note" + noteCount);
	divTest.addEventListener('animationend', () => {
		audioMiss.play();
		noteCombo = 0;
		judge.style.color = "#ff0000";
		judge.innerText = "MISS";
		combo.innerText = noteCombo;
		divTest.remove();
		lifeLost();
	});
	lane.appendChild(divTest);
	noteCount += 1;
}

// finds the center of an element
function getPositionAtCenter(element) {
	const {top, left, width, height} = element.getBoundingClientRect();
	return {
	   x: left + width / 2,
	   y: top + height / 2,
	};
 }
 
 // calculates distance from note to button
 function getDistanceBetweenElements(a, b) {
	 const aPosition = getPositionAtCenter(a);
	 const bPosition = getPositionAtCenter(b);
	 return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
}

// gets closest note to the button
function getClosestElement(a, b) {
	const matches = a.querySelectorAll("div.note")
	var distance = Number.MAX_VALUE;
	var closestNote = null;
	for (var i = 0; i < matches.length; i++) {
		var noteDistance = getDistanceBetweenElements(document.getElementById(b), document.getElementById(matches[i].id));
		if (noteDistance < distance) {
			distance = noteDistance;
			closestNote = matches[i];
		}
	}
	return [closestNote, distance];
}
