const newtxt = ["Start new game", "Load Game","Settings"];
const txtElements = document.getElementsByClassName("txt");



let i = 0;
const intervalId = setInterval(function () {
  let j = 0;
  const textIntervalId = setInterval(function () {
    txtElements[i].textContent += newtxt[i][j];
    j++;

    if (j === newtxt[i].length) {
      clearInterval(textIntervalId);
      i++;
      if (i === newtxt.length) {
        clearInterval(intervalId);
      }
    }
  }, 50);
}, 1000);

// Add click event listeners to each button
const startNewGameButton = document.getElementsByClassName("txt")[0];
startNewGameButton.addEventListener("click", function () {
  window.location.href = "gamePage.html";
});

const loadGameButton = document.getElementsByClassName("txt")[1];
loadGameButton.addEventListener("click", function () {
  window.location.href = "loadGame.html";
});

const settingsButton = document.getElementsByClassName("txt")[2];
settingsButton.addEventListener("click", function () {
  window.location.href = "settings.html";
});


