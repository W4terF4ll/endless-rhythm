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
			[4, 3, 2, 3, 4],
			[4, 3, 2, 4, 2, 3, 4],
		]
	},
	{
		type: 2,
		pattern: [
			[1, 2, 1, 3, 1, 4, 1, 3, 1, 2, 1],
			[1, 2, 1, 3, 1, 4, 1, 2, 1, 3, 1, 4],
			[2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 1, 4],
			[1, 2, 4, 3, 5, 4, 1, 2, 3, 5, 4, 1],
			[5, 1, 4, 3, 2, 5, 1, 4, 2, 3, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2],
			[1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4],
			[1, 2, 3, 5, 1, 4, 3, 2, 1],
			[4, 5, 2, 3, 1, 5, 2, 3, 4, 5, 2, 3, 1, 5, 2, 3, 4],
			[5, 4, 1, 5, 2, 3, 5, 4, 1],
		]
	},
	{
		type: 3,
		pattern: [
			[5, 1, 2, 3, 5, 1, 4, 2, 5, 1, 3, 4, 5, 1, 2, 3],
			[1, 5, 2, 4, 3, 5, 4, 1, 2, 5, 1, 3, 4],
			[1, 2, 5, 3, 4, 2, 1, 4, 3, 5, 1, 2, 3, 4],
			[4, 3, 5, 1, 2, 3, 4, 3, 5, 1, 2, 3, 4],
			[3, 5, 2, 4, 1, 5, 2, 3, 4, 5, 1, 2, 3, 4],
			[1, 6, 2, 3, 4, 1, 6, 2, 3, 4, 1],
			[4, 5, 1, 3, 5, 2, 4, 5, 1, 3, 2, 1],
		]
	},
	{
		type: 4,
		pattern: [
			[4, 3, 6, 1, 2, 4, 3, 2, 6, 1, 3, 4, 2, 3],
			[1, 2, 6, 1, 3, 4, 2, 3],
			[1, 6, 2, 3, 4, 1, 2, 6, 1, 3, 4, 2, 3, 6, 1, 2, 4, 3],
			[1, 2, 4, 3, 7, 1, 2, 3, 4, 2, 1, 3, 4, 7, 1, 2, 3, 4, 1, 2, 4, 3],
			[5, 1, 2, 5, 3, 4, 5, 1, 2, 5, 3, 4],
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
var noteAccuracy = 1;
var noteSeen = 1;
var lineCount = 1;

// difficulty vars
var lives = 9;
var totalDifficulty = 1;
var startingSpacing = 250;
var savedSpacing = startingSpacing;
var noteSpacing = startingSpacing;
var spaceDifficulty = 0;
var spaceIncrease = 50;
var startingDifficulty = 1;
var noteDifficulty = 1;
var increaseCount = 0;
var noteIncrease = 5;
var randomType = Math.floor(Math.random() * noteDifficulty) + 1;

// note color vars
var isFade = true;
var heldFadeColor;
var fadeColor;
var noteColor;

// acc bar var
var isBar = true;

// settings var
var isSettings = false;

// dom vars
var button1;
var button2;
var button3;
var button4;
var buttonList = [button1, button2, button3, button4];
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
var overlay;
var slider;
var sliderText;
var scrollSpeed;
var accuracy;
var keySetting1;
var keySetting2;
var keySetting3;
var keySetting4;
var keySetting5;
var keySetting6;
var keySettingList = [keySetting1, keySetting2, keySetting3, keySetting4, keySetting5, keySetting6];
var fadeBox;
var noteColorText;
var fadeColorText;
var startButtonDisplay;
var stopButtonDisplay;
var nextStage;
var overAcc;
var overScore;
var overStage;
var gameOverAcc;
var gameOverScore;
var gameOverStage;
var gameOverHolder;
var gameOverContainer;
var accuracyLine;
var accuracyDiv;
var accBox;

// saved vars
var speedSliderValue;
var audioSliderValue;
var stageSliderValue;
var keybinds;
var noteColorValue;
var fadeColorValue;
var fadeBoxChecked;
var accBoxChecked;

// sets dom vars on window load
window.onload = function() {
	
	// bunch of elements
	cssRoot = document.documentElement;
	button1 = document.getElementById("button1");
	button2 = document.getElementById("button2");
	button3 = document.getElementById("button3");
	button4 = document.getElementById("button4");
	buttonList = [button1, button2, button3, button4];
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
	overlay = document.getElementById("overlay");
	accuracy = document.getElementById("accuracy");
	keySetting1 = document.getElementById("keySetting1");
	keySetting2 = document.getElementById("keySetting2");
	keySetting3 = document.getElementById("keySetting3");
	keySetting4 = document.getElementById("keySetting4");
	keySetting5 = document.getElementById("keySetting5");
	keySetting6 = document.getElementById("keySetting6");
	keySettingList = [keySetting1, keySetting2, keySetting3, keySetting4, keySetting5, keySetting6];
	fadeBox = document.getElementById("fadeBox");
	noteColorText = document.getElementById("noteColorText");
	fadeColorText = document.getElementById("fadeColorText");
	startButtonDisplay = document.getElementById("startButtonDisplay");
	stopButtonDisplay = document.getElementById("stopButtonDisplay");
	nextStage = document.getElementById("nextStage");
	overAcc = document.getElementById("overAcc");
	overScore = document.getElementById("overScore");
	overStage = document.getElementById("overStage");
	gameOverAcc = document.getElementById("gameOverAcc");
	gameOverStage = document.getElementById("gameOverStage");
	gameOverScore = document.getElementById("gameOverScore");
	gameOverHolder = document.getElementById("gameOverHolder");
	gameOverContainer = document.getElementById("gameOverContainer");
	accuracyLine = document.getElementById("accuracyLine");
	accuracyDiv = document.getElementById("accuracyDiv");
	accBox = document.getElementById("accBox");
	
	
	// creating list of audio
	for (var i = 0; i < audio.length; i++) {
		audio[i] = new Audio("hit.wav");
	}
	audioMiss = new Audio("miss.wav");
	
	// setting default fade
	fadeBox.checked = true;
	
	// setting default bar
	accBox.checked = true;

	// setting saved vars
	speedSliderValue = speedSlider.value;
	audioSliderValue = audioSlider.value;
	stageSliderValue = stageSlider.value;
	keybinds = ["a", "s", "k", "l", "r", "f"];
	noteColorValue = noteColorText.value;
	fadeColorValue = fadeColorText.value;
	fadeBoxChecked = fadeBox.checked;
	accBoxChecked = accBox.checked;
	
	// speed slider logic
	speedSlider = document.getElementById("speedSlider");
	speedSliderText = document.getElementById("speedText");
	speedSlider.addEventListener('input', function(event) {
		var sliderValue = event.target.value;
		speedSliderText.innerText = sliderValue;
		cssRoot.style.setProperty("--scrollSpeed", sliderValue / 100 + "s");
		scrollSpeed = cssRoot.style.getPropertyValue("--scrollSpeed").slice(0, -1);
	});
	cssRoot.style.setProperty("--scrollSpeed", "1s");
	scrollSpeed = cssRoot.style.getPropertyValue("--scrollSpeed").slice(0, -1);
	
	// audio slider logic
	audioSlider = document.getElementById("audioSlider");
	audioSliderText = document.getElementById("audioText");
	audioSlider.addEventListener('input', function(event) {
		var sliderValue = event.target.value;
		audioSliderText.innerText = sliderValue;
		for (var i = 0; i < audio.length; i++) {
			audio[i].volume = sliderValue / 100;
		}
		audioMiss.volume = sliderValue / 100;
	});
	
	// stage slider logic
	stageSlider = document.getElementById("stageSlider");
	stageSliderText = document.getElementById("stageText");
	stageSlider.addEventListener('input', function(event) {
		var sliderValue = event.target.value;
		stageSliderText.innerText = sliderValue;
		startingDifficulty = sliderValue;
		stage.innerText = sliderValue;
	});
	
	// keybinds logic
	keyRebinder();
	
	// note color logic
	cssRoot.style.setProperty("--noteColor", "#ff2142");
	noteColor = cssRoot.style.getPropertyValue("--noteColor").slice(1);
	cssRoot.style.setProperty("--fadeColor", "#3266a8");
	fadeColor = cssRoot.style.getPropertyValue("--fadeColor").slice(1);
	heldFadeColor = fadeColor;
	
	// loads settings if save exists
	loadGame();
}

// saves game
function saveGame() {
	speedSliderValue = speedSlider.value;
	audioSliderValue = audioSlider.value;
	stageSliderValue = stageSlider.value;
	noteColorValue = noteColorText.value;
	fadeColorValue = fadeColorText.value;
	fadeBoxChecked = fadeBox.checked;
	accBoxChecked = accBox.checked;
	localStorage.setItem("speedSliderValue", speedSliderValue);
	localStorage.setItem("audioSliderValue", audioSliderValue);
	localStorage.setItem("stageSliderValue", stageSliderValue);
	localStorage.setItem("keybinds", JSON.stringify(keybinds));
	localStorage.setItem("noteColorValue", noteColorValue);
	localStorage.setItem("fadeColorValue", fadeColorValue);
	localStorage.setItem("fadeBoxChecked", fadeBoxChecked);
	localStorage.setItem("accBoxChecked", accBoxChecked);
}

// loads game
function loadGame() {
	speedSliderValue = localStorage.getItem("speedSliderValue") || 100;
	if ("undefined" === speedSliderValue) {
		speedSliderValue = 100;
	}
	audioSliderValue = localStorage.getItem("audioSliderValue") || 100;
	if ("undefined" === audioSliderValue) {
		audioSliderValue = 100;
	}
	stageSliderValue = localStorage.getItem("stageSliderValue") || 1;
	if ("undefined" === stageSliderValue) {
		stageSliderValue = 1;
	}
	noteColorValue = localStorage.getItem("noteColorValue") || "#ff2142";
	if ("undefined" === noteColorValue) {
		noteColorValue = "#ff2142";
	}
	fadeColorValue = localStorage.getItem("fadeColorValue") || "#3266a8";
	if ("undefined" === fadeColorValue) {
		fadeColorValue = "#3266a8";
	}
	fadeBoxChecked = localStorage.getItem("fadeBoxChecked") || true;
	if ("undefined" === fadeBoxChecked) {
		fadeBoxChecked = true;
	}
	accBoxChecked = localStorage.getItem("accBoxChecked") || true;
	if ("undefined" === accBoxChecked) {
		accBoxChecked = true;
	}
	keybinds = JSON.parse(localStorage.getItem("keybinds")) || ["a", "s", "k", "l", "r", "f"];
	if (keybinds.length < 6) {
		keybinds = ["a", "s", "k", "l", "r", "f"];
	}
	speedSlider.value = speedSliderValue;
	speedSliderText.innerText = speedSliderValue;
	cssRoot.style.setProperty("--scrollSpeed", speedSliderValue / 100 + "s");
	scrollSpeed = cssRoot.style.getPropertyValue("--scrollSpeed").slice(0, -1);
	audioSlider.value = audioSliderValue;
	audioSliderText.innerText = audioSliderValue;
	for (var i = 0; i < audio.length; i++) {
		audio[i].volume = audioSliderValue / 100;
	}
	audioMiss.volume = audioSliderValue / 100;
	stageSlider.value = stageSliderValue;
	stageSliderText.innerText = stageSliderValue;
	startingDifficulty = stageSliderValue;
	stage.innerText = stageSliderValue;
	keyRebinder();
	noteColorText.value = noteColorValue;
	fadeColorText.value = fadeColorValue;
	noteColorSet();
	fadeColorSet();
	heldFadeColor = fadeColor;
	if (fadeBoxChecked == "false") {
		fadeBox.checked = false;
		fadeColor = noteColor;
		isFade = false;
	} else {
		fadeBox.checked = true;
		fadeColor = heldFadeColor;
		isFade = true;
	}
	if (accBoxChecked == "false") {
		accBox.checked = false;
		accuracyDiv.style.display = "none";
	} else {
		accBox.checked = true;
		accuracyDiv.style.display = "block";
		isBar = true;
	}
	cssRoot.style.setProperty("--fadeColor", "#" + fadeColor);
	fadeColor = cssRoot.style.getPropertyValue("--fadeColor").slice(1);
}

// opens settings menu
function openSettings() {
	menuContainer.style.display = "block";
	isSettings = true;
}

// closes settings menu
function closeSettings() {
	menuContainer.style.display = "none";
	isSettings = false;
}

// toggles fade
function fadeClicked() {
	if (isFade) {
		heldFadeColor = fadeColor;
		fadeColor = noteColor;
		isFade = false;
	} else {
		fadeColor = heldFadeColor;
		isFade = true;
	}
	cssRoot.style.setProperty("--fadeColor", "#" + fadeColor);
	fadeColor = cssRoot.style.getPropertyValue("--fadeColor").slice(1);
}

// toggles bar
function accClicked() {
	if (isBar) {
		accuracyDiv.style.display = "none";
		isBar = false;
	} else {
		accuracyDiv.style.display = "block";
		isBar = true;
	}
}

// sets note color
function noteColorSet() {
	cssRoot.style.setProperty("--noteColor", noteColorText.value);
	noteColor = cssRoot.style.getPropertyValue("--noteColor").slice(1);
}

// sets fade color
function fadeColorSet() {
	cssRoot.style.setProperty("--fadeColor", fadeColorText.value);
	fadeColor = cssRoot.style.getPropertyValue("--fadeColor").slice(1);
}

// rebinds keys
function keyRebinder() {
	for (var i = 0; i < keySettingList.length; i++) {
		keySettingList[i].innerText = keybinds[i].toUpperCase();
		if (i < 4) {
			buttonList[i].innerText = keybinds[i].toUpperCase();
		} else if (i == 4) {
			startButtonDisplay.innerText = keybinds[i].toUpperCase();
		} else if (i == 5) {
			stopButtonDisplay.innerText = keybinds[i].toUpperCase();
		}
	}
}

// returns settings to default
function defaultSettings() {
	stageSlider.value = 1;
	stageSliderText.innerText = 1;
	startingDifficulty = 1;
	stage.innerText = 1
	audioSlider.value = 100;
	audioSliderText.innerText = 100;
	for (var i = 0; i < audio.length; i++) {
		audio[i].volume = 100 / 100;
	}
	audioMiss.volume = 100 / 100;
	speedSlider.value = 100;
	speedSliderText.innerText = 100;
	cssRoot.style.setProperty("--scrollSpeed", 100 / 100 + "s");
	scrollSpeed = cssRoot.style.getPropertyValue("--scrollSpeed").slice(0, -1);
	keybinds = ["a", "s", "k", "l", "r", "f"];
	keyRebinder();
	noteColorText.value = "#ff2142";
	fadeColorText.value = "#3266a8";
	noteColorSet();
	fadeColorSet();
	heldFadeColor = fadeColor;
	fadeBox.checked = true;
	isFade = false;
	fadeClicked();
}

// detects keypress for rebind
function keyWait(k) {
	document.addEventListener('keydown', function onListen(e) {
		e = e || window.event;
		if (keybinds.includes(e.key)) {
			var holder = keybinds[k]
			var holderLocation = keybinds.indexOf(e.key)
			keybinds[holderLocation] = holder;
			keybinds[k] = e.key;
			keyRebinder();
			document.removeEventListener('keydown', onListen);
			return false;
		} else {
			keybinds[k] = e.key;
			keyRebinder();
			document.removeEventListener('keydown', onListen);
			return false;
		}
	});
}

// records key presses
document.addEventListener("keypress", function onEvent(event) {
	if (!isSettings) {
		if (event.key === keybinds[0]) {
			button1.style.backgroundColor = "#6e6e6e";
			button1.style.color = "#ffffff";
			var closestNote = getClosestElement(lane1, "button1");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key === keybinds[1]) {
			button2.style.backgroundColor = "#6e6e6e";
			button2.style.color = "#ffffff";
			var closestNote = getClosestElement(lane2, "button2");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key === keybinds[2]) {
			button3.style.backgroundColor = "#6e6e6e";
			button3.style.color = "#ffffff";
			var closestNote = getClosestElement(lane3, "button3");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key === keybinds[3]) {
			button4.style.backgroundColor = "#6e6e6e";
			button4.style.color = "#ffffff";
			var closestNote = getClosestElement(lane4, "button4");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key === keybinds[4]) {
			startCharting();
		} else if (event.key === keybinds[5]) {
			gameOver();
		}
	}
});

// records key releases
document.addEventListener("keyup", function onEvent(event) {
	if (event.key === keybinds[0]) {
		button1.style.backgroundColor = "#d9d9d7";
		button1.style.color = "#000000";
	} else if (event.key === keybinds[1]) {
		button2.style.backgroundColor = "#d9d9d7";
		button2.style.color = "#000000";
	} else if (event.key === keybinds[2]) {
		button3.style.backgroundColor = "#d9d9d7";
		button3.style.color = "#000000";
	} else if (event.key === keybinds[3]) {
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
function judgment(note, dist, time) {
	if (dist < (30 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (300 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 100));
		noteAccuracy += 1;
		judge.style.color = "#ffff33";
		judge.innerText = "PERFECT!!";
		playSound();
		note.remove();
	} else if (dist < (45 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (200 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 100));
		noteAccuracy += 0.75;
		judge.style.color = "#70dbdb";
		judge.innerText = "Great!";
		playSound();
		note.remove();
	} else if (dist < (60 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (100 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 100));
		noteAccuracy += 0.5;
		judge.style.color = "#1aff1a";
		judge.innerText = "Good";
		playSound();
		note.remove();
	} else if (dist < (100 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (50 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 100));
		noteAccuracy += 0.25;
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
	if (dist > (100 / scrollSpeed)) {
		if (time) {
			accuracyLine.style.left = "100%";
		} else {
			accuracyLine.style.left = "0%";
		}
	} else {
		if (time) {
			accuracyLine.style.left = (50 + ((dist / 2)*scrollSpeed)) + "%";
		} else {
			accuracyLine.style.left = (50 - ((dist / 2)*scrollSpeed)) + "%";
		}
	}
	spawnLine();
	noteSeen += 1;
	judge.classList.remove("bounce");
	combo.classList.remove("bounce");
	judge.scrollBy(0, 0);
	combo.scrollBy(0, 0);
	judge.classList.add("bounce");
	combo.classList.add("bounce");
	combo.innerText = noteCombo;
	score.innerText = Math.round(noteScore);
	if (isRunning) {
		accuracy.innerText = ((noteAccuracy / noteSeen) * 100).toFixed(2) + "%";
	}
}

// subtracts lives
function lifeLost() {
	if (isRunning) {
		lifeList[lives-1].style.display = "none";
		lives -= 1;
		if (lives == 0) {
			displayGameOver();
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
	noteDifficulty = 1;
	spaceDifficulty = 0;
	increaseCount = 0;
	stage.innerText = startingDifficulty;
	lives = 9;
	noteAccuracy = 1;
	noteSeen = 1;
	totalDifficulty = 1;
	savedSpacing = startingSpacing;
	accuracy.innerText = (100).toFixed(2) + "%";
}

// displays game over screen
function displayGameOver() {
	gameOverContainer.style.display = "block";
	overAcc.innerText = ((noteAccuracy / noteSeen) * 100).toFixed(2) + "%";;
	overScore.innerText = Math.round(noteScore);
	overStage.innerText = totalDifficulty;
	gameOverAcc.classList.remove("overFade1");
	gameOverAcc.scrollBy(0, 0);
	gameOverAcc.classList.add("overFade1");
	gameOverScore.classList.remove("overFade2");
	gameOverScore.scrollBy(0, 0);
	gameOverScore.classList.add("overFade2");
	gameOverStage.classList.remove("overFade3");
	gameOverStage.scrollBy(0, 0);
	gameOverStage.classList.add("overFade3");
	gameOverHolder.classList.remove("gameOverAnim");
	gameOverHolder.scrollBy(0, 0);
	gameOverHolder.classList.add("gameOverAnim");
	gameOverContainer.classList.remove("gameOverOut");
	gameOverContainer.scrollBy(0, 0);
	gameOverContainer.classList.add("gameOverOut");
}

// starts the charter
function startCharting() {
	gameOver();
	gameOverContainer.style.display = "none";
	for (i = (spaceIncrease * noteIncrease); i <= startingDifficulty * (spaceIncrease * noteIncrease); i++) {
		difficultyLogic()
	}
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

// displays patterns
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
	difficultyLogic()
	clearInterval(isCharting);
	isCharting = setInterval(function(){autoCharter()}, noteSpacing);
}

// manages difficulty
function difficultyLogic() {
	spaceDifficulty += 1;
	if (spaceDifficulty >= spaceIncrease) {
		spaceDifficulty = 0;
		noteSpacing = noteSpacing * 0.95;
		increaseCount += 1;
		if (increaseCount >= noteIncrease) {
			nextStage.innerText = "STAGE UP!!";
			nextStage.classList.remove("stageAnim");
			nextStage.scrollBy(0, 0);
			nextStage.classList.add("stageAnim");
			increaseCount = 0;
			totalDifficulty += 1
			stage.innerText = totalDifficulty;
			if (totalDifficulty % 4 == 1) {
				noteDifficulty = 1;
				savedSpacing = noteSpacing;
			} else {
				noteDifficulty += 1;
				noteSpacing = savedSpacing;
			}
		}
	}
}

// spawns a note on a set lane
function spawnNote(num) {
	var lane = document.getElementById("lane" + num);
	var divTest = document.createElement("div");
	divTest.className = "note";
	divTest.setAttribute("id", "note" + noteCount);
	divTest.addEventListener('animationend', () => {
		noteSeen += 1;
		audioMiss.play();
		noteCombo = 0;
		judge.style.color = "#ff0000";
		judge.innerText = "MISS";
		combo.innerText = noteCombo;
		divTest.remove();
		lifeLost();
		accuracyLine.style.left = "100%";
		spawnLine();
		accuracy.innerText = ((noteAccuracy / noteSeen) * 100).toFixed(2) + "%";
	});
	lane.appendChild(divTest);
	noteCount += 1;
}

// spawns a line on the accuracy bar
function spawnLine() {
	var divLine = document.createElement("div");
	divLine.className = "line";
	divLine.setAttribute("id", "line" + lineCount);
	divLine.style.left = accuracyLine.style.left;
	divLine.addEventListener('animationend', () => {
		divLine.remove();
	});
	accuracyDiv.appendChild(divLine);
	lineCount += 1;
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
	var notePassed = true;
	if (aPosition.y > bPosition.y) {
		notePassed = false;
	}
	return [Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y), notePassed]; 
}

// gets closest note to the button
function getClosestElement(a, b) {
	const matches = a.querySelectorAll("div.note")
	var distance = Number.MAX_VALUE;
	var closestNote = null;
	var timing = false;
	for (var i = 0; i < matches.length; i++) {
		var noteDistance = getDistanceBetweenElements(document.getElementById(b), document.getElementById(matches[i].id));
		if (noteDistance[0] < distance) {
			timing = noteDistance[1];
			distance = noteDistance[0];
			closestNote = matches[i];
		}
	}
	return [closestNote, distance, timing];
}
