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


// Apply typewriting effect to "day" and "God" h2 elements
const dayElement = document.getElementById("day");
const GodElement = document.getElementById("God");
const today = new Date();
const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });
let k = 0;
const dayIntervalId = setInterval(function () {
  dayElement.textContent += dayOfWeek[k];
  k++;

  if (k === dayOfWeek.length) {
    clearInterval(dayIntervalId);
  }
}, 100);

let God;
switch (dayOfWeek) {
  case "Monday":
    God = "Moon";
    break;
  case "Tuesday":
    God = "Toxic";
    break;
  case "Wednesday":
    God = "Death";
    break;
  case "Thursday":
    God = "Spider";
    break;
  case "Friday":
    God = "Dragon";
    break;
  case "Saturday":
    God = "Stone";
    break;
  case "Sunday":
    God = "Demon";
    break;
}
let l = 0;
const godIntervalId = setInterval(function () {
  GodElement.textContent += God[l];
  l++;

  if (l === God.length) {
    clearInterval(godIntervalId);
  }
}, 50);

