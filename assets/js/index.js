var pixelsContainer = document.getElementById("pixels-container")

document.addEventListener("DOMContentLoaded", function() {
  var pixelAmount = Math.floor(Math.random() * 25) + 10;
  
  for (let i = 0; i < pixelAmount; i++) {
    var pixel = document.createElement("div");
    pixel.className = "pixel";

    var pixelX = Math.floor(Math.random() * 100) + 1;
    var pixelY = Math.floor(Math.random() * 100) + 1;
    pixel.style.left = pixelX + "%";
    pixel.style.top = pixelY + "%";

    pixelsContainer.appendChild(pixel);
  }
})

var prefaceHeader = document.getElementById("preface-header");

window.addEventListener("scroll", function() {
  var distanceFromTop = prefaceHeader.getBoundingClientRect().top;
  var distanceFromBottom = prefaceHeader.getBoundingClientRect().bottom;
  var scrollThreshold = 190; // Change this threshold as needed

  if (distanceFromBottom <= scrollThreshold) {
    prefaceHeader.style.opacity = "0";
  } else {
    prefaceHeader.style.opacity = "1";
  }
});

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var algo1 = document.getElementById("algo1");
var algo2 = document.getElementById("algo2");
var algorithms = document.getElementById("algorithms");
var algoTTS = document.getElementById("algo2-tts1");
var tts2 = document.getElementById("tts2");

var bodyOverflow = function() {
  var algo1Rect = algo1.getBoundingClientRect();

  if (algo1Rect.right < windowWidth) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
};

window.addEventListener("scroll", bodyOverflow);
algorithms.addEventListener("scroll", bodyOverflow);

var algoTTSOverflow = function() {
  var algo2Rect = algo2.getBoundingClientRect();

  if (algo2Rect.bottom < windowHeight) {
    algorithms.style.overflowX = "hidden";
  } else {
    algorithms.style.overflowX = "auto";
  }
};

window.addEventListener("scroll", algoTTSOverflow);
algoTTS.addEventListener("scroll", algoTTSOverflow);

var ttsSound = document.getElementById("tts-sound");
var soundButton = document.getElementById("sound-button");

soundButton.addEventListener("click", function(){
  if (ttsSound.paused) {
    ttsSound.play();
    soundButton.classList.toggle("active")
  }
  else {
    ttsSound.pause();
    soundButton.classList.remove("active")
  }
})

var navPopup = document.getElementById("navPopup");
var popupToggle = function() {
  var tts2Rect = tts2.getBoundingClientRect();

  if (tts2Rect.top <= 0) {
    setTimeout(function() {
      navPopup.classList.add("active");
    }, 0);
  }
};

algoTTS.addEventListener("scroll", popupToggle);

var navBtn = document.getElementById("nav-btn");
var closeButton = document.querySelectorAll(".close-button");
var navigation = document.getElementById("navigation");

navBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})
closeButton.forEach(button => {
  button.addEventListener("click", () => {
    navPopup.classList.remove("active");
    navigation.classList.remove("active");
  })
})







var keyUp = document.getElementById("key-up");
var keyLeft = document.getElementById("key-left");
var keyDown = document.getElementById("key-down");
var keyRight = document.getElementById("key-right");

document.addEventListener("keydown", function(event) {
  if (event.key === 'ArrowUp') {
    keyUp.classList.add('lit');}

  if (event.key === 'ArrowLeft') {
    keyLeft.classList.add('lit');}

  if (event.key === 'ArrowDown') {
    keyDown.classList.add('lit');}

  if (event.key === 'ArrowRight') {
    keyRight.classList.add('lit');}
})

document.addEventListener("keyup", function(event) {
  if (event.key === 'ArrowUp') {
    keyUp.classList.remove('lit');}

  if (event.key === 'ArrowLeft') {
    keyLeft.classList.remove('lit');}

  if (event.key === 'ArrowDown') {
    keyDown.classList.remove('lit');}

  if (event.key === 'ArrowRight') {
    keyRight.classList.remove('lit');}
})