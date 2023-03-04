var currentNarrative = "N1a";
var option1 = "Pray to Deus mortis";
var option2 = "Face Judgment";
var option3 = "Embrace the Void";

var narrativeElement = document.getElementById("narrative");
var option1Element = document.getElementById("option1");
var option2Element = document.getElementById("option2");
var option3Element = document.getElementById("option3");

function chooseOption1() {
    switch (currentNarrative) {
      case "N1":
        currentNarrative = "N1";
        option1 = "Go deeper into the dungeon";
        option2 = "Go back to the surface";
        narrativeElement.textContent = "Moments later, you awaken in a strange and unfamiliar place. The darkness that surrounded you before has lifted, and you can see that you are in some sort of dungeon. But something is different. You feel lighter, almost weightless, and as you look down, you realize that your body is no longer flesh and blood, but instead a skeleton. How did this happen? What force could have brought you back from the dead, and why in this form?";
        option1Element.textContent = option1;
        option2Element.textContent = option2;
        option3Element.style.display = "none"; // Hide option 3
        break;
      case "N1a":
        currentNarrative = "N1a";
        option1 = "Investigate the noise";
        option2 = "Continue through the dungeon";
        narrativeElement.textContent = "You walk deeper into the dungeon and come across a room with strange markings on the walls. You hear a noise coming from one of the corners of the room. What do you do?";
        option1Element.textContent = option1;
        option2Element.textContent = option2;
        option3Element.style.display = "none"; // Hide option 3
        break;
      case "N2a":
        currentNarrative = "N2a";
        option1 = "Approach the figure";
        option2 = "Hide and observe";
        narrativeElement.textContent = "As you investigate the noise, you see a shadowy figure moving in the corner of the room. What do you do?";
        option1Element.textContent = option1;
        option2Element.textContent = option2;
        option3Element.style.display = "none"; // Hide option 3
        break;
      // Add more cases for other narratives and options
      default:
        break;
    }
  }
  

function chooseOption2() {
  switch (currentNarrative) {
    case "N1a":
      currentNarrative = "N2b";
      option1 = "You died";
      option2 = "You died";
      narrativeElement.textContent = "Your dead";
      option1Element.textContent = option1;
      option2Element.textContent = option2;
      option3Element.style.display = "none"; // Hide option 3
      break;
    // Add more cases for other narratives and options
    default:
      break;
  }
}



      function chooseOption3() {
        switch (currentNarrative) {
          case "N1a":
            currentNarrative = "N2c";
            option1 = "You died";
            option2 = "You died";
            narrativeElement.textContent = "You embrace the void";
            option1Element.textContent = option1;
            option2Element.textContent = option2;
            option3Element.style.display = "none"; // Hide option 3
            break;
          // Add more cases for other narratives and options
          default:
            break;
        }
      }
      
      // Event listeners for the options
      option1Element.addEventListener("click", chooseOption1);
      option2Element.addEventListener("click", chooseOption2);
      option3Element.addEventListener("click", chooseOption3);
      