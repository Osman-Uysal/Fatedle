



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
