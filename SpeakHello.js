// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {

// STEP 3:
var helloSpeaker = {};
var speakWord = "Hello";

// STEP 4:
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

// STEP 5: 
window.helloSpeaker = helloSpeaker;
}) (window);

