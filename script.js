// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var chances = 3;

//Global Variables
var pattern = [1, 2, 3, 4, 5, 1, 2, 5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

var pic1 = document.getElementById("t");
var pic2 = document.getElementById("g");
var pic3 = document.getElementById("c");
var pic4 = document.getElementById("bb");
var pic5 = document.getElementById("db");

function startGame() {
  context.resume();
  //initialize game variables
  clueHoldTime = 1000; // restore clue hold time to the inital value
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  chances = 3;
  pic1.classList.add("hidden");
  pic2.classList.add("hidden");
  pic3.classList.add("hidden");
  pic4.classList.add("hidden");
  pic5.classList.add("hidden");

  randArr(); // randomize pattern;
  console.log(pattern); //log pattern

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime = clueHoldTime - 50;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You Won!.");
}

/*
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //game has started
  if(btn = pattern[guessCounter]){
    //if guess was correct
    if(guessCounter >= progress){
      //check if the counter is >= progress to make progress longer 
      if(progress == pattern.length - 1){
        //if progress == pattern length means pattern is finished and game is won
        winGame();
      }else{
        //if game still in progress than increment progress to make the pattern longer and play next sequence
        progress++;
        playClueSequence();
      }
      
    }else{
      //guesses has not reached threshold of progress nor won the game so just increment progress
      guessCounter++;
    }
  }else{
    //guess was wrong so they lose
    loseGame();
  }
}

*/
function guess(btn) {
  console.log("user guessed: " + btn);
  context.resume();

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter >= progress) {
      if (progress >= pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    chances--;
    alert("Wrong! remaining guesses: " + chances);
    hidePic(btn);
    if (chances == 0) {
      loseGame();
    }
  }
}

function randArr() {
  var temp;
  var randNum;
  for (var i = 0; i < pattern.length; i++) {
    temp = pattern[i];
    randNum = Math.floor(Math.random() * pattern.length);
    pattern[i] = pattern[randNum];
    pattern[randNum] = temp;
  }
}

// Sound Synthesis Functions
const freqMap = {
  //1: 261.6,
  //2: 329.6,
  //3: 392,
  //4: 466.2
  1: 100,
  2: 140,
  3: 180,
  4: 220,
  5: 260
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if(btn==1){
    pic1.classList.remove("hidden");
  }else if(btn==2){
    pic2.classList.remove("hidden");
  }else if(btn==3){
    pic3.classList.remove("hidden");
  }else if(btn==4){
    pic4.classList.remove("hidden");   
  }else if(btn==5){
    pic5.classList.remove("hidden");   
  }
  
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function hidePic(x){
  if(x==1){
    pic1.classList.add("hidden");
  }else if(x==2){
    pic2.classList.add("hidden");
  }else if(x==3){
    pic3.classList.add("hidden");
  }else if(x==4){
    pic4.classList.add("hidden");   
  }else if(x==5){
    pic5.classList.add("hidden");   
  }
}


function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
