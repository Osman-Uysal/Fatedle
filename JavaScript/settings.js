const newtxt = ["Sound" , "Music "];
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




const musicToggle = document.getElementById("music-toggle");
const soundToggle = document.getElementById("sound-toggle");

musicToggle.addEventListener("change", function () {
  if (musicToggle.checked) {
    console.log("Music turned on");
  } else {
    console.log("Music turned off");
  }
});

soundToggle.addEventListener("change", function () {
  if (soundToggle.checked) {
    console.log("Sound turned on");
  } else {
    console.log("Sound turned off");
  }
});
