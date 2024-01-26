var noteCount = 1;
var noteSpacing = 250;
let patternList = [
	{
		pattern: [1, 2, 3, 5, 1, 4, 3, 2, 1]
	},
	{
		pattern: [1, 4, 1, 4]
	},
	{
		pattern: [4, 3, 2, 1]
	},
	{
		pattern: [1, 2, 4, 3]
	},
	{
		pattern: [5, 1, 2, 5, 3, 4]
	},
	{
		pattern: [5, 2, 4, 5, 1, 3, 5, 2, 4]
	},
	{
		pattern: [5, 1, 4, 5, 2, 3]
	},
	{
		pattern: [6, 1, 2, 3]
	},
	{
		pattern: [6, 4, 3, 2]
	}
];
var isCharting;
var randomPattern = 0;
var patternProgress = 0;
var patternLength = 0;
var currentPattern = [1];
var patternHolder = [1];
var noteCombo = 0;
var noteScore = 0;
document.onload = function() {
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	var button4 = document.getElementById("button3");
	var lane1 = document.getElementById("lane1");
	var lane2 = document.getElementById("lane2");
	var lane3 = document.getElementById("lane3");
	var lane4 = document.getElementById("lane4");
	var combo = document.getElementById("combo");
	var judge = document.getElementById("judge");
	var score = document.getElementById("score");
}
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

function judgment(note, dist) {
	if (dist < 15) {
		noteCombo += 1;
		noteScore += 300 * (1 + (noteCombo / 100));
		judge.style.color = "#ffff33";
		judge.innerText = "PERFECT!!";
		note.remove();
	} else if (dist < 30) {
		noteCombo += 1;
		noteScore += 200 * (1 + (noteCombo / 100));
		judge.style.color = "#70dbdb";
		judge.innerText = "Great!";
		note.remove();
	} else if (dist < 45) {
		noteCombo += 1;
		noteScore += 100 * (1 + (noteCombo / 100));
		judge.style.color = "#1aff1a";
		judge.innerText = "Good";
		note.remove();
	} else if (dist < 70) {
		noteCombo += 1;
		noteScore += 50 * (1 + (noteCombo / 100));
		judge.style.color = "#ff3385";
		judge.innerText = "Bad..";
		note.remove();
	} else {
		noteCombo = 0;
		judge.style.color = "#ff0000";
		judge.innerText = "MISS";
	}
	combo.innerText = noteCombo;
	score.innerText = noteScore;
}

function startCharting() {
	randomPattern = Math.floor(Math.random() * (patternList.length));
	currentPattern = patternList[randomPattern].pattern;
	patternHolder = currentPattern;
	patternLength = patternList[randomPattern].pattern.length;
	clearInterval(isCharting);
	isCharting = setInterval(function(){autoCharter()}, noteSpacing);
}

function stopCharting() {
	clearInterval(isCharting);
}

function autoCharter() {
	if (patternProgress < patternLength) {
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
		} else {
			spawnNote(patternHolder[patternProgress]);
			patternProgress += 1;
		}
	} else {
		patternProgress = 0;
		var mirrorFactor = Math.floor(Math.random() * 100) + 1;
		randomPattern = Math.floor(Math.random() * (patternList.length));
		currentPattern = patternList[randomPattern].pattern;
		patternHolder = currentPattern;
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
		patternLength = patternList[randomPattern].pattern.length;
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
		} else {
			spawnNote(patternHolder[patternProgress]);
			patternProgress += 1;
		}
	}
	clearInterval(isCharting);
	isCharting = setInterval(function(){autoCharter()}, noteSpacing);
}

function spawnNote(num) {
	var lane = document.getElementById("lane" + num);
	var divTest = document.createElement("div");
	divTest.innerHTML = "<div class='note' id='note"+noteCount+"'></div>";
	divTest.addEventListener('animationend', () => {
		noteCombo = 0;
		judge.style.color = "#ff0000";
		judge.innerText = "MISS";
		combo.innerText = noteCombo;
		divTest.remove();
	});
	lane.appendChild(divTest);
	noteCount += 1;
}

function getPositionAtCenter(element) {
	const {top, left, width, height} = element.getBoundingClientRect();
	return {
	   x: left + width / 2,
	   y: top + height / 2,
	};
 }
 function getDistanceBetweenElements(a, b) {
	 const aPosition = getPositionAtCenter(a);
	 const bPosition = getPositionAtCenter(b);
	 return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
}

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