let answer = 0, changes = 0, guesses = 0;
let feedbackText, guessBox, origFeedText, origAnsText, guessButton;
let answerText, origGuessText;
const min = 0, max = 100;
let knownMin = min, knownMax = max;

window.onload = init;

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
  hint.innerText = hint.innerText.replace("%min%", min).replace("%max%", max);

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

    answerText.innerText = text;
    guessButton.value = "Play Again";
    guessButton.disabled = true;
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
  feedback += "The answer is" + (g < answer ? " higher" : " lower") + " than " + g + ".";
  if (g < min || g > max) {
    feedback += " (Hint: there's a hint!)";
    hint.innerText = "Hint: " + hint.innerText;
  }
  feedbackText.innerText = feedback;
}

function reset() {
  calcAnswer();
  guesses = 0;
  changes = 0;
  feedbackText.innerText = origFeedText;
  answerText.innerText = origAnsText;
  guessBox.value = "";
  guessBox.placeholder = Math.round((knownMin + knownMax) / 2.0);
  guessButton.value = origGuessText;
}

function calcAnswer() {
  answer = Math.floor(Math.random() * (knownMax - knownMin)) + (knownMin + 1);
  knownMin = min;
  knownMax = max;
}