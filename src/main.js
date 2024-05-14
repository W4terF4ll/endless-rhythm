// add a way to disable life loss in practice? (maybe no)
// allow for multiple custom patterns at once >:3
// disable stage up when space scaling is disabled
// add setting to remove life loss in practice mode
// normalize speed values in pactice mode (wtf)

// https://i.imgur.com/W4vfn3e.png
// [1 = first lane, 2 = second lane... 5 = double note, 6 = triple note, 7 = quad note]
// Streams should start and end with different notes 
// Streams shouldn't start or end with doubles, triples, or quads
let patternList = [
	{	
		type: 0,
		streams: [
			[]
		],
		jumps: [
			[]
		],
	},
	{
		type: 1,
		count: 1,
		streams: [
			[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
			[4, 3, 1, 2, 4, 3, 1, 2, 4, 3, 1, 2],
			[1, 2, 3, 4],
			[3, 2, 1, 4],
			[4, 3, 1, 2],
			[2, 1, 4, 3],
			[3, 2, 1, 2],
			[1, 4, 3, 2],
			[4, 3, 2, 3],
			[1, 2],
			[4, 3],
			[2, 3, 4, 3, 2, 1],
			[3, 2, 3, 2],
		],
		jumps: [
			[]
		],
	},
	{
		type: 2,
		count: 2,
		streams: [
			[1, 2, 1, 3, 1, 4],
			[1, 2, 1, 4, 3, 2],
			[2, 3, 2, 1, 4, 3],
			[2, 1, 2, 3, 4, 3],
			[4, 3, 2, 5, 1, 4, 2, 3, 1, 4, 3, 2],
			[1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2],
			[2, 3, 5, 4, 1, 2, 3],
			[1, 5, 2, 4, 3],
			[1, 2, 5, 3, 4, 2, 1],
			[3, 5, 2, 4, 1]
		],
		jumps: [
			[5, 1, 2, 5, 3, 4, 5, 1, 2, 5, 3, 4],
			[5, 1, 3, 5, 2, 4, 5, 1, 3, 5, 2, 4],
			[5, 1, 4, 5, 2, 3, 5, 1, 4, 5, 2, 4],
			[5, 1, 4],
			[5, 2, 3],
			[5, 2, 4],
			[5, 1, 2],
			[5, 1, 3],
			[5, 3, 4]
		],
	},
	{
		type: 3,
		count: 2,
		streams: [
			[1, 2, 5, 3, 4, 5, 1, 2, 3, 4],
			[4, 3, 5, 2, 1, 5, 3, 4, 2, 1],
			[2, 5, 1, 3, 2, 3, 5, 2, 4, 3],
			[3, 5, 1, 2, 3, 5, 4, 1, 2, 5, 3, 4, 1, 2],
			[1, 5, 2, 4, 3, 5, 1, 2, 4, 5, 2, 3, 1, 5, 3, 4, 2],
			[4, 5, 1, 3, 2, 5, 3, 4, 1, 5, 2, 3, 4, 5, 1, 2, 3]
		],
		jumps: [
			[5, 1, 4, 5, 1, 4],
			[5, 1, 2, 5, 1, 2],
			[5, 3, 4, 5, 3, 4],
			[5, 1, 2, 5, 2, 3, 5, 3, 4],
			[6, 1, 2, 3],
			[6, 2, 3, 4],
			[6, 1, 3, 4],
			[6, 1, 2, 4],
			[6, 2, 3, 4, 6, 1, 3, 4, 6, 1, 2, 4, 6, 1, 2, 3]
		],
	},
	{
		type: 4,
		count: 2,
		streams: [
			[4, 3, 2, 1, 6, 2, 3, 4, 1, 2, 3, 4, 6, 3, 2, 1, 4, 3, 2, 1],
			[2, 1, 2, 6, 1, 3, 4, 2, 3, 4, 3, 6, 1, 2, 4, 3],
			[4, 5, 3, 1, 2, 3, 4, 1, 5, 2, 4, 3],
			[2, 5, 3, 1, 2, 5, 3, 4, 1, 2],
			[3, 2, 6, 1, 3, 4, 2, 3, 1, 6, 2, 3, 4, 1],
			[4, 3, 6, 1, 2, 4, 3, 2],
			[1, 2, 6, 1, 3, 4, 2, 3, 4, 6, 1, 2, 3, 4],
		],
		jumps: [
			[5, 2, 4],
			[5, 1, 2],
			[5, 1, 3],
			[5, 3, 4],
			[6, 2, 3, 4, 6, 1, 3, 4, 6, 1, 2, 4, 6, 1, 2, 3],
			[6, 1, 3, 4],
			[6, 1, 2, 3],
			[7, 1, 2, 3, 4],
		],
	},
];

// quotes var
var gameOverQuotes = ["skill issue", "pro tip: don't miss", "what a run!", "nice try..", ";v;", "almost.. almost..", "getting better!", "stand proud, you're strong", "practice makes perfect!", "WHOA."
, "faster! FASTER!!", "they didn't believe in us..", "all warmed up now?", "S++++", "error: skill not found"]

// running vars
var isCharting;
var isRunning = false;
var audioCheck = true;

// pattern vars
var randomPattern = 0;
var patternProgress = 0;
var patternLength = 0;
var currentPattern = [1];
var patternHolder = [1];
var patternLoop = 0;
var doubleSelect = false;
var speedMod = 1;
var randomDiff = 1;
var randomType = Math.floor(Math.random() * patternList[randomDiff].count) + 1;
var currentPattern = patternList[1].streams[0];
var previousPattern = patternList[1].streams[0];

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
var startingSpacing = 200;
var savedSpacing = startingSpacing;
var noteSpacing = startingSpacing;
var spaceDifficulty = 0;
var spaceIncrease = 50;
var startingDifficulty = 1;
var noteDifficulty = 1;

// note color vars
var isFade = true;
var heldFadeColor;
var fadeColor;
var noteColor;

// acc bar var
var isBar = true;

// menu vars
var isSettings = false;
var isPractice = false;

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
var audioStageUp;
var audioGameOver;
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
var overQuote;
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

// practice vars
var practiceText;
var practiceDifficulty = 1;
var practiceSpacing = 200;
var practiceScaling;
var isScale = true;
var practicePatterns;
var isPattern = true;
var practiceDisabledText;
var practiceDisabledInput;
var customPattern = [1, 2, 3, 4];
var practiceRunning = false;
var spaceBox
var difficultySliderText;
var difficultySlider;

// saved vars
var speedSliderValue;
var audioSliderValue;
var stageSliderValue;
var keybinds;
var noteColorValue;
var fadeColorValue;
var fadeBoxChecked;
var accBoxChecked;

var difficultySliderValue;
var noteSpacingValue;
var spaceBoxChecked;
var patternBoxChecked;
var patternInputValue;

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
	noteSpacingText = document.getElementById("noteSpacingText");
	practiceText = document.getElementById("practiceText");
	spaceBox = document.getElementById("spaceBox");
	practiceDisabledText = document.getElementById("practiceDisabledText");
	patternInputText = document.getElementById("patternInputText");
	difficultySlider = document.getElementById("difficultySlider");
	nextStage = document.getElementById("nextStage");
	overQuote = document.getElementById("overQuote");
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
		audio[i] = new Audio("./res/hit.wav");
	}
	audioMiss = new Audio("./res/miss.wav");
	audioStageUp = new Audio("./res/stageup.wav");
	audioGameOver = new Audio("./res/gameover.wav");
	
	
	// setting default fade
	fadeBox.checked = true;
	
	// setting default bar
	accBox.checked = true;
	
	// setting default scaling
	spaceBox.checked = true;
	
	// setting default pattern
	patternBox.checked = false;

	// setting saved vars
	speedSliderValue = speedSlider.value;
	audioSliderValue = audioSlider.value;
	stageSliderValue = stageSlider.value;
	keybinds = ["a", "s", "k", "l", "r", "f"];
	noteColorValue = noteColorText.value;
	fadeColorValue = fadeColorText.value;
	fadeBoxChecked = fadeBox.checked;
	accBoxChecked = accBox.checked;
	spaceBoxChecked = spaceBox.checked;
	patternBoxChecked = patternBox.checked;
	
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
		audioStageUp.volume = sliderValue / 100;
		audioGameOver.volume = sliderValue / 100;
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
	
	// difficulty slider logic
	difficultySlider = document.getElementById("difficultySlider");
	difficultySliderText = document.getElementById("difficultyText");
	difficultySlider.addEventListener('input', function(event) {
		var sliderValue = event.target.value;
		difficultySliderText.innerText = sliderValue;
		practiceDifficulty = sliderValue;
	});
	
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
	difficultySliderValue = difficultySlider.value;
	noteSpacingValue = noteSpacingText.value;
	console.log(spaceBox.checked);
	spaceBoxChecked = spaceBox.checked;
	console.log(spaceBoxChecked);
	console.log(patternBox.checked);
	patternBoxChecked = patternBox.checked;
	console.log(patternBoxChecked);
	patternInputValue = patternInputText.value;
	localStorage.setItem("speedSliderValue", speedSliderValue);
	localStorage.setItem("audioSliderValue", audioSliderValue);
	localStorage.setItem("stageSliderValue", stageSliderValue);
	localStorage.setItem("keybinds", JSON.stringify(keybinds));
	localStorage.setItem("noteColorValue", noteColorValue);
	localStorage.setItem("fadeColorValue", fadeColorValue);
	localStorage.setItem("fadeBoxChecked", fadeBoxChecked);
	localStorage.setItem("accBoxChecked", accBoxChecked);
	localStorage.setItem("difficultySliderValue", difficultySliderValue);
	localStorage.setItem("noteSpacingValue", noteSpacingValue);
	localStorage.setItem("spaceBoxChecked", spaceBoxChecked);
	localStorage.setItem("patternBoxChecked", patternBoxChecked);
	localStorage.setItem("patternInputValue", patternInputValue);
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
	difficultySliderValue = localStorage.getItem("difficultySliderValue") || 1;
	if ("undefined" === difficultySliderValue) {
		difficultySliderValue = 1
	}
	noteSpacingValue = localStorage.getItem("noteSpacingValue") || "200";
	if ("undefined" === noteSpacingValue) {
		noteSpacingValue = 200
	}
	spaceBoxChecked = localStorage.getItem("spaceBoxChecked") || true;
	if ("undefined" === spaceBoxChecked) {
		spaceBoxChecked = true;
	}
	patternBoxChecked = localStorage.getItem("patternBoxChecked") || false;
	if ("undefined" === patternBoxChecked) {
		patternBoxChecked = false;
	}
	patternInputValue = localStorage.getItem("patternInputValue") || "1 2 3 4";
	if ("undefined" === patternInputValue) {
		patternInputValue = "1 2 3 4";
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
	audioStageUp.volume = audioSliderValue / 100;
	audioGameOver.volume = audioSliderValue / 100;
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
	if (fadeBoxChecked.toString() == "false") {
		fadeBox.checked = false;
		fadeColor = noteColor;
		isFade = false;
	} else {
		fadeBox.checked = true;
		fadeColor = heldFadeColor;
		isFade = true;
	}
	if (accBoxChecked.toString() == "false") {
		accBox.checked = false;
		accuracyDiv.style.display = "none";
		isBar = false;
	} else {
		accBox.checked = true;
		accuracyDiv.style.display = "block";
		isBar = true;
	}
	difficultySlider.value = difficultySliderValue;
	difficultySliderText.innerText = difficultySliderValue;
	practiceDifficulty = difficultySliderValue;
	noteSpacingText.value = noteSpacingValue;
	noteSpacingSet();
	patternInputText.value = patternInputValue;
	practicePatternSet();
	//i dont think this works please test/fix
	if (spaceBoxChecked.toString() == "false") {
		spaceBox.checked = false;
		isScale = true;
		scaleClicked();
	} else {
		spaceBox.checked = true;
		isPattern = false;
		scaleClicked();
	}
	if (patternBoxChecked.toString() == "false") {
		patternBox.checked = false;
		isPattern = true;
		patternClicked();
	} else {
		patternBox.checked = true;
		isPattern = false;
		patternClicked();
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

// opens practice menu
function openPractice() {
	if (isRunning && practiceRunning) {
		gameOver();
	}
	practiceContainer.style.display = "block";
	isPractice = true;
}

// closes practice menu
function closePractice() {
	practiceContainer.style.display = "none";
	isPractice = false;
}

// toggles space scaling in practice
function scaleClicked() {
	if (isScale) {
		practiceScaling = false;
		isScale = false;
	} else {
		practiceScaling = true;
		isScale = true;
	}
}

// toggles custom patterns in practice
function patternClicked() {
	if (isPattern) {
		practicePatterns = false;
		difficultySliderText.style.color = "#ffffff";
		difficultySlider.disabled = false;
		practiceDisabledText.disabled = true;
		patternInputText.disabled = true;
		isPattern = false;
	} else {
		practicePatterns = true;
		difficultySliderText.style.color = "#707070";
		difficultySlider.disabled = true;
		practiceDisabledText.disabled = false;
		patternInputText.disabled = false;
		isPattern = true;
	}
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

// sets note spacing in practice
function noteSpacingSet() {
	practiceSpacing = noteSpacingText.value;
}

// sets custom pattern in practice
function practicePatternSet() {
	customPattern = patternInputText.value;
	customPattern = customPattern.split(" ");
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
	audioStageUp.volume = 100 / 100;
	audioGameOver.volume = 100 / 100;
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
	accBox.checked = true;
	isBar = false;
	accClicked();
}

// returns practice to default
function defaultPractice() {
	difficultySlider.value = 1;
	difficultySliderText.innerText = 1;
	practiceDifficulty = 1;
	spaceBox.checked = true;
	isScale = false;
	scaleClicked();
	patternBox.checked = false;
	isPattern = true;
	patternClicked();
	isScale = false;
	scaleClicked();
	noteSpacingText.value = "200";
	noteSpacingSet();
	patternInputText.value = "1 2 3 4";
	practicePatternSet();
}

// detects keypress for rebind
function keyWait(k) {
	document.addEventListener('keydown', function onListen(e) {
		e = e || window.event;
		if (keybinds.includes(e.key.toLowerCase())) {
			var holder = keybinds[k]
			var holderLocation = keybinds.indexOf(e.key.toLowerCase())
			keybinds[holderLocation] = holder;
			keybinds[k] = e.key.toLowerCase();
			keyRebinder();
			document.removeEventListener('keydown', onListen);
			return false;
		} else {
			keybinds[k] = e.key.toLowerCase();
			keyRebinder();
			document.removeEventListener('keydown', onListen);
			return false;
		}
	});
}

// records key presses
document.addEventListener("keypress", function onEvent(event) {
	if (!isSettings && !isPractice) {
		if (event.key.toLowerCase() === keybinds[0]) {
			button1.style.backgroundColor = "#6e6e6e";
			button1.style.color = "#ffffff";
			var closestNote = getClosestElement(lane1, "button1");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key.toLowerCase() === keybinds[1]) {
			button2.style.backgroundColor = "#6e6e6e";
			button2.style.color = "#ffffff";
			var closestNote = getClosestElement(lane2, "button2");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key.toLowerCase() === keybinds[2]) {
			button3.style.backgroundColor = "#6e6e6e";
			button3.style.color = "#ffffff";
			var closestNote = getClosestElement(lane3, "button3");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key.toLowerCase() === keybinds[3]) {
			button4.style.backgroundColor = "#6e6e6e";
			button4.style.color = "#ffffff";
			var closestNote = getClosestElement(lane4, "button4");
			judgment(closestNote[0], closestNote[1], closestNote[2]);
		} else if (event.key.toLowerCase() === keybinds[4]) {
			startCharting();
		} else if (event.key.toLowerCase() === keybinds[5]) {
			gameOver();
		}
	}
});

// records key releases
document.addEventListener("keyup", function onEvent(event) {
	if (event.key.toLowerCase() === keybinds[0]) {
		button1.style.backgroundColor = "#d9d9d7";
		button1.style.color = "#000000";
	} else if (event.key.toLowerCase() === keybinds[1]) {
		button2.style.backgroundColor = "#d9d9d7";
		button2.style.color = "#000000";
	} else if (event.key.toLowerCase() === keybinds[2]) {
		button3.style.backgroundColor = "#d9d9d7";
		button3.style.color = "#000000";
	} else if (event.key.toLowerCase() === keybinds[3]) {
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

/* changes accuracy text to a gradient (WIP)
function accuracyGradient() {
	var roundedAccuracy = ((noteAccuracy / noteSeen) * 100).toFixed(2);
	accuracy.style.color = ["hsl(", roundedAccuracy, ",100%,75%)"].join("");
}*/

// judges accuracy, updates combo & score
function judgment(note, dist, time) {
	if (dist < (30 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (300 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 1000));
		noteAccuracy += 1;
		judge.style.color = "#ffff33";
		judge.innerText = "PERFECT!!";
		playSound();
		note.remove();
	} else if (dist < (45 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (200 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 1000));
		noteAccuracy += 0.66;
		judge.style.color = "#70dbdb";
		judge.innerText = "Great!";
		playSound();
		note.remove();
	} else if (dist < (60 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (100 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 1000));
		noteAccuracy += 0.33;
		judge.style.color = "#1aff1a";
		judge.innerText = "Good";
		playSound();
		note.remove();
	} else if (dist < (100 / scrollSpeed)) {
		noteCombo += 1;
		noteScore += (50 * (1000 / noteSpacing) * noteDifficulty) * (1 + (noteCombo / 1000));
		noteAccuracy += 0.16;
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
	score.innerText = noteScore.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 0,});
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
			gameOver();
		}
	}
}

// regains lives
function lifeGained() {
	if (isRunning && lives < 9) {
		lifeList[lives].style.display = "block";
		lives += 1;
	}
}

// resets game
function gameOver() {
	displayGameOver();
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
	score.innerText = noteScore.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 0,});
	highScore.innerText = bestScore.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 0,});
	for (var i = 0; i < lifeList.length; i++) {
		lifeList[i].style.display = "block";
	}
	spaceIncrease = 50;
	noteSpacing = startingSpacing;
	noteDifficulty = 1;
	spaceDifficulty = 0;
	stage.innerText = startingDifficulty;
	lives = 9;
	noteAccuracy = 1;
	noteSeen = 1;
	totalDifficulty = 1;
	savedSpacing = startingSpacing;
	patternLoop = 0
	accuracy.innerText = (100).toFixed(2) + "%";
}

function openChangelog() {
	window.open("https://github.com/W4terF4ll/endless-rhythm/blob/main/CHANGELOG.md")
}

// displays game over screen
function displayGameOver() {
	if (audioCheck) {
		audioGameOver.play();
	}
	gameOverContainer.style.display = "block";
	overQuote.innerText = gameOverQuotes[Math.floor(Math.random() * gameOverQuotes.length)];
	overAcc.innerText = ((noteAccuracy / noteSeen) * 100).toFixed(2) + "%";;
	overScore.innerText = noteScore.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 0,});
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

// starts practice mode
function startPractice() {
	practiceRunning = true;
	practiceText.hidden = false;
	closePractice();
}

// stops practice mode
function stopPractice() {
	practiceRunning = false;
	practiceText.hidden = true;
	closePractice();
}

// starts the charter
function startCharting() {
	audioCheck = false;
	gameOver();
	gameOverContainer.style.display = "none";
	audioCheck = true;
	loopCount = 0;
	if (!practiceRunning) {
		while (totalDifficulty != startingDifficulty) {
			difficultyLogic();
		}
	}
	isRunning = true;
	patternSelector();
	clearInterval(isCharting);
	if (!practiceRunning) {
		isCharting = setInterval(function(){autoCharter()}, noteSpacing);
	} else {
		isCharting = setInterval(function(){autoCharter()}, practiceSpacing);
	}
}

// selects patterns
function patternSelector() {
	previousPattern = currentPattern;
	if (practiceRunning && practicePatterns) {
		currentPattern = customPattern;
		patternHolder = currentPattern;
		patternLength = currentPattern.length;
		doubleSelect = true;
		speedMod = 2;
		return;
	}
	if (patternLoop == 0) {
		if (practiceRunning) {
			randomDiff = practiceDifficulty;
		} else {
			randomDiff = Math.floor(Math.random() * (noteDifficulty - (noteDifficulty - 1) + 1) + (noteDifficulty - 1))
		}
		if (randomType == 1 && noteDifficulty > 1) {
			if (randomDiff < 1) {
				randomDiff = 1;
			}
			randomType = 2;
			patternLoop = Math.floor(Math.random() * 5) + 5;
		} else {
			if (randomDiff < 1) {
				randomDiff = 1;
			}
			randomType = 1;
			patternLoop = Math.floor(Math.random() * 10) + 10;
		}
	} else if (patternLoop == 1 && randomType == 1 && noteDifficulty > 1) {
		currentPattern = patternList[0].streams[0];
		patternHolder = currentPattern;
		patternLength = currentPattern.length;
		patternLoop = 0;
		return;
	}
	if (randomDiff == 1 || randomType == 1) {
			doubleSelect = false;
			speedMod = 1;
			//randomDiff = Math.floor(Math.random() * noteDifficulty) + 1;
			randomPattern = Math.floor(Math.random() * (patternList[randomDiff].streams.length));
			currentPattern = patternList[randomDiff].streams[randomPattern];
	} else if (randomType == 2) {
			doubleSelect = true;
			speedMod = 2;
			//randomDiff = Math.floor(Math.random() * (noteDifficulty - 2 + 1)) + 2;
			randomPattern = Math.floor(Math.random() * (patternList[randomDiff].jumps.length));
			currentPattern = patternList[randomDiff].jumps[randomPattern];
	}
	patternHolder = currentPattern;
	patternLength = currentPattern.length;
	patternLoop -= 1;
}

// stops the charter
function stopCharting() {
	clearInterval(isCharting);
}

// reads patterns
function noteLogic() {
	if (patternHolder[patternProgress] <= 4) {
		spawnNote(patternHolder[patternProgress]);
		patternProgress += 1;
	} else {
		temp = patternHolder[patternProgress];
		patternProgress += 1;
		for (i = 0; i <= temp - 4; i++) {
			spawnNote(patternHolder[patternProgress]);
			patternProgress += 1;
		}
	}
}

// displays patterns
function autoCharter() {
	if (patternProgress < patternLength) {
		noteLogic();
	} else {
		patternProgress = 0;
		patternSelector();
		//console.log(currentPattern, doubleSelect, previousPattern[previousPattern.length-1], currentPattern[0]);
		if (!doubleSelect && previousPattern[previousPattern.length-1] == currentPattern[0]) {
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
			currentPattern = mirrorHolder;
		}
		noteLogic();
	}
	difficultyLogic();
	clearInterval(isCharting);
	if (!practiceRunning) {
		isCharting = setInterval(function(){autoCharter()}, noteSpacing * speedMod);
	} else {
		isCharting = setInterval(function(){autoCharter()}, practiceSpacing * speedMod);
	}
}

// manages difficulty
function difficultyLogic() {
	spaceDifficulty += 1;
	if (spaceDifficulty >= spaceIncrease) {
		audioStageUp.play();
		spaceDifficulty = 0;
		spaceIncrease = Math.floor(spaceIncrease * 1.1);
		if (!practiceRunning) {
			noteSpacing = noteSpacing * 0.95;
		} else if (practiceRunning && practiceScaling) {
			practiceSpacing = practiceSpacing * 0.95;
		}
		nextStage.innerText = "STAGE UP!!";
		lifeGained();
		nextStage.classList.remove("stageAnim");
		nextStage.scrollBy(0, 0);
		nextStage.classList.add("stageAnim");
		totalDifficulty += 1
		stage.innerText = totalDifficulty;
		if (totalDifficulty % 4 == 1 && noteDifficulty < 4) {
			noteDifficulty += 1;
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
