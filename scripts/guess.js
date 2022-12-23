let answer = 0, changes = 0, guesses = 0;
let feedbackText, guessBox, origFeedText, origAnsText, guessButton;
let answerText, origGuessText;
const min = 0, max = 100;
let knownMin = min, knownMax = max;

window.addEventListener("load", init);

const hints = [
  "Guess a number between %min% and %max%.",
  "I'm thinking of a number between %min% and %max%.",
  "I'm considering a number between %min% and %max%.",
  "How many fingers am I holding up? (%min%-%max%)",
  "I wish we had %min%-%max% many more frozen movies.",
  "I saw %min%-%max% FBI agents outside, how many do you see?",
  "On scale of %min%-%max%, how much do you like me?",
  "On scale of %min%-%max%, how quirky am I?",
  "How many questions do I have? (%min%-%max%)",
  "Roll a %min%-%max% sided die.",
];

function init() {
  feedbackText = document.getElementById("feedback");
  guessBox = document.getElementById("guessBox");
  guessButton = document.getElementById("guessButton");
  answerText = document.getElementById("answer");
  origFeedText = feedbackText.innerText;
  origAnsText = answerText.innerText;
  origGuessText = guessButton.value;
  calcAnswer();

  let hint = document.getElementById("hint");
  hint.innerText = (hints[Math.floor(Math.random() * hints.length)]).replace("%min%", min).replace("%max%", max);

  guessBox.addEventListener("keydown", onPress);
}

function onPress(event) {
  if (event.key != "Enter")
    return;
  if (guessButton.disabled)
    return;
  guess();
}

function guess() {
  if (answerText.innerText != origAnsText) {
    reset();
    return;
  }
  let g = parseInt(guessBox.value);
  if (isNaN(g))
    g = parseInt(guessBox.placeholder);
  if (answer == -1)
    calcAnswer();
  if (guesses > 0 && Math.random() < 0.01) {
    changes++;
    calcAnswer();
  }
  guesses++;

  if (g == answer) {
    let text = "You guessed " + answer + " in " + guesses + " guesses";
    if (changes > 0)
      text += ", and I only changed it " + changes + " time" + (changes == 1 ? "" : "s") + "! ;D";
    else
      text += "."
    if (guesses == 1)
      text += "\nImpressive!";
    if (answer == 69)
      text += " (Nice)";

    answerText.innerText = text;
    guessButton.value = "Play Again";
    guessButton.disabled = true;
    guessBox.disabled = true;
    guesses = 0;
    setTimeout(() => {
      guessButton.disabled = false;
    }, 1000);
    return;
  }
  if (g > answer) {
    if (g < knownMax)
      knownMax = g;
  } else if (g > knownMin)
    knownMin = g;

  guessBox.value = "";
  guessBox.placeholder = Math.round((knownMin + knownMax) / 2.0);

  let feedback = guesses > 1 ? feedbackText.innerText + "\n" : "";
  feedback += "The answer is " + (g < answer ? "bigger" : "smaller") + " than " + g + ".";
  let extra = guesses == 1;
  if (guesses == 1) {
    switch (g) {
      case 69:
        feedback += " (Nice)";
        break;
      case 420:
        feedback += " (Timezones were never my thing)";
        break;
      case 314:
        feedback += " (So dumb, and so smart)";
        break;
      case 271:
        feedback += " https://youtu.be/Qskm9MTz2V4";
        break;
      case 666:
        feedback += " EVIL!";
        break;
      case 999:
        feedback += " Dude...";
        break;
      default:
        extra = false;
        break;
    }
  }
  if (g < min || g > max && !extra) {
    feedback += " (Hint: there's a hint!)";
    emphasizeHint();
  }
  feedbackText.innerText = feedback;
}

function emphasizeHint() {
  hint.innerText = "Hint: " + hint.innerText;
}

function reset() {
  calcAnswer();
  guesses = 0;
  changes = 0;
  feedbackText.innerText = origFeedText;
  answerText.innerText = origAnsText;
  guessBox.value = "";
  guessBox.placeholder = Math.round((knownMin + knownMax) / 2.0);
  guessBox.disabled = false;
  guessButton.value = origGuessText;
}

function calcAnswer() {
  answer = Math.floor(Math.random() * (knownMax - knownMin)) + (knownMin + 1);
  knownMin = min;
  knownMax = max;
  // answer = 69;
}