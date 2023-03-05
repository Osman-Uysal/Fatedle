function hideOptions() {
  option1Element.style.display = "none";
  option2Element.style.display = "none";
  option3Element.style.display = "none";
}

function showOptions() {
  option1Element.style.display = "block";
  option2Element.style.display = "block";
  option3Element.style.display = "block";
}





const newtxt = "As the final moments of your life slip away, you feel the crushing weight of mortality bearing down on you. Your breaths come in shallow gasps, each one harder to draw than the last. You reach out for help, but no one is there to save you. The world around you fades into darkness, and you are left alone with your thoughts. Memories flood your mind, each one a reminder of the life you are about to leave behind. Regrets and missed opportunities fill you with a sense of profound sadness, and you can't help but wonder what could have been different if you had only made different choices. But it's too late now, and as the final breath leaves your body, you feel yourself slipping away into the void.";
const txtElement = document.getElementById("narrative");

let i = 0;
const writerEffect = setInterval(function () {
  if (i < newtxt.length) {
    txtElement.textContent += newtxt.charAt(i);
    i++;
  } else {
    clearInterval(writerEffect);
    displayOptions();
  }
}, 20);


function displayOptions(){
const options = ["Pray to Deus mortis", "Face Judgment", "Embrace the Void"];
const optionElements = document.querySelectorAll(".option-text");

let j = 0;
const typeWriterOptions = setInterval(function () {
  if (j < optionElements.length) {
    optionElements[j].textContent += options[j].charAt(optionElements[j].textContent.length);
    if (optionElements[j].textContent === options[j]) {
      j++;
    }
  } else {
    clearInterval(typeWriterOptions);
  }
}, 100);
}

var currentNarrative = "N";


var narrativeElement = document.getElementById("narrative");
var option1Element = document.getElementById("option1");
var option2Element = document.getElementById("option2");
var option3Element = document.getElementById("option3");

// Typewriter effect function
function typeWriter(element, text, i, callback) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(function() { typeWriter(element, text, i, callback); }, 20);
  }
  else {
    callback();
  }
}

// Update narrative function with typewriter effect
function updateNarrative(narrative, callback) {
  narrativeElement.textContent = "";
  typeWriter(narrativeElement, narrative, 0, callback);
}

// Update option function with typewriter effect
function updateOption(option, element, callback) {
  element.textContent = "";
  typeWriter(element, option, 0, callback);
}

function chooseOption1() {
  console.log("1");
  switch (currentNarrative) {
    case "N":

      option1 = "Go deeper into the dungeon";
      option2 = "Go back to the surface";
      option3Element.style.display = "none"; // Hide option 3
      hideOptions();
      updateNarrative(
        "Moments later, you awaken in a strange and unfamiliar place. The darkness that surrounded you before has lifted, and you can see that you are in some sort of dungeon. But something is different. You feel lighter, almost weightless, and as you look down, you realize that your body is no longer flesh and blood, but instead a skeleton. How did this happen? What force could have brought you back from the dead, and why in this form?",
        function() {

          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          showOptions();
          option3Element.style.display = "none";
        }
      );
      currentNarrative = "N1a";
      break;
    case "N1a":
      console.log(currentNarrative);
      option1 = "Investigate the noise";
      option2 = "Continue through the dungeon";
      option3Element.style.display = "none";
      hideOptions(); // Hide option 3
      updateNarrative(
        "You walk deeper into the dungeon and come across a room with strange markings on the walls. You hear a noise coming from one of the corners of the room. What do you do?",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          showOptions();
          option3Element.style.display = "none";
        }
      );
      currentNarrative = "N2a";
      break;
    case "N2a":
      console.log(currentNarrative);
      option1 = "Approach the figure";
      option2 = "Hide and observe";
      option3Element.style.display = "none"; // Hide option 3
      hideOptions();
      updateNarrative(
        "As you investigate the noise, you see a shadowy figure moving in the corner of the room. What do you do?",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          showOptions();
          option3Element.style.display = "none";

        }
      );
      currentNarrative = "N3a";
      break;
    // Add more cases for other narratives and options
    case "N3a":
      narrativeElement.textContent = "Coming Soon...";
        option1Element.style.display = "none"; // Hide option 
        option2Element.style.display = "none"; // Hide option 2
        option3Element.style.display = "none"; // Hide option 3
        break;
    }
  }


  


function chooseOption2() {
  switch (currentNarrative) {
    case "N":
      narrativeElement.textContent = "Coming Soon...";
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      break;
    case "N1a":
      narrativeElement.textContent = "Coming Soon...";
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      break;
    case "N2a":
      narrativeElement.textContent = "Coming Soon...";
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      break; 
    // Add more cases for other narratives and options

  }

}




function chooseOption3() {
  switch (currentNarrative) {
    case "N":
      narrativeElement.textContent = "Coming Soon...";
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      break;
    case "N1a":
      // Add typewriting effect to narrative and options
      typeWriter(narrativeElement, "Coming Soon...");
      typeWriter(option1Element, "Option 1");
      typeWriter(option2Element, "Option 2");
      typeWriter(option3Element, "Option 3");
      break;
    case "N2a":
      // Add typewriting effect to narrative and options
      typeWriter(narrativeElement, "Coming Soon...");
      typeWriter(option1Element, "Option 1");
      typeWriter(option2Element, "Option 2");
      typeWriter(option3Element, "Option 3");
      break;
  }
}



      // Event listeners for the options
      // option1Element.addEventListener("click", chooseOption1);
      // option2Element.addEventListener("click", chooseOption2);
      // option3Element.addEventListener("click", chooseOption3);
      