



function hideOptions() {
  option1Element.style.display = "none";
  option2Element.style.display = "none";
  option3Element.style.display = "none";
  option4Element.style.display = "none";
  option5Element.style.display = "none";
}

function showOptions() {
  option1Element.style.display = "block";
  option2Element.style.display = "block";
  option3Element.style.display = "block";
  option4Element.style.display = "block";
  option5Element.style.display = "block";
}





const newtxt = "As the final moments of your life slip away, you feel the crushing weight of mortality bearing down on you. Your breaths come in shallow gasps, each one harder to draw than the last. You reach out for help, but no one is there to save you. The world around you fades into darkness, and you are left alone with your thoughts. Memories flood your mind, each one a reminder of the life you are about to leave behind. Regrets and missed opportunities fill you with a sense of profound sadness, and you can't help but wonder what could have been different if you had only made different choices. But it's too late now, and as the final breath leaves your body, you feel yourself slipping away into the void.";
const txtElement = document.getElementById("narrative");

let i = 0;
const writerEffect = setInterval(function () {
  if (i < newtxt.length) {
    txtElement.textContent += newtxt.charAt(i);
    i++;
  } 
  else {
    clearInterval(writerEffect);
    displayOptions();
  }
}, 10);


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
var option4Element = document.getElementById("option5");
var option5Element = document.getElementById("option5");


// Typewriter effect function
function typeWriter(element, text, i, callback) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(function() { typeWriter(element, text, i, callback); }, 10);
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


// Option 1
function chooseOption1() {
  
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
          option4Element.style.display = "none";
          option5Element.style.display = "none";
        }
      );
      currentNarrative = "N1a";
      break;
    case "N1a":
      
      option1 = "Investigate the noise";
      option2 = "Continue through the dungeon ";
      option3Element.style.display = "none";
      hideOptions(); // Hide option 3
      updateNarrative(
        "You walk deeper into the dungeon and come across a room with strange markings on the walls. You hear a noise coming from one of the corners of the room. What do you do?",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          showOptions();
          option3Element.style.display = "none";
          option4Element.style.display = "none";
          option5Element.style.display = "none";
        }
      );
      currentNarrative = "N2a";
      break;
    case "N2a":
      
      option1 = "You are a monster; you take the bones from the skeleton and add them to your own body and leave the gem (+1 strength, -1 intelligence)";
      option2 = "Your curiosity takes the best of you, you touch the gem +1 summon";
      option3 = "Go in deeper without looting";
      hideOptions();
      updateNarrative(
        "You quickly scan your surroundings and notice a rusty sword lying on the ground nearby. Without hesitation, you grab the sword and charge towards the monster. With a few quick swings, you are able to dispatch the monster and continue your journey through the dungeon. However, you inspect the body, and you feel the urge to add the bones to your body, however you never saw other skeletons being able to add extra bones to themselves, you also realize there is a gem in the skeleton ",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
          
          showOptions();
          option4Element.style.display = "none";
          option5Element.style.display = "none";
          

        }
      );
      currentNarrative = "N3a";
      break;
    // Add more cases for other narratives and options
    case "N3a":
      option1 = "Continue";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative(
        "You added the bones to yourself and felt you grew stronger with each bone that was left in good condition carefully connected to areas of your body ",
        function() {
          updateOption(option1, option1Element, function() {});
          showOptions();
          option2Element.style.display = "none";
          option3Element.style.display = "none";
          option4Element.style.display = "none";
          option5Element.style.display = "none";
        }
      );
      currentNarrative = "N4a";
      break;
      case "N4a":
                
      option1 = "You fight with your strength (1 strength required)";
      option2 = "You send your skeleton ally to fight (1 summon required)";
      option3 = "You fight";
      hideOptions();
      updateNarrative(
        "You ascend a winding staircase, the only sound your footsteps echoing against the cold, stone walls. As you approach the top, you brace yourself for whatever might await you on the next floor. As you step off the stairs and onto the new floor, you're momentarily taken aback by the sudden shift in atmosphere. The air is thick with the scent of decay and mustiness, and the room is dimly lit by flickering torches on the walls. The space is circular, with a high, vaulted ceiling that stretches far above you. As your eyes adjust to the dim light, you see two skeletons standing before you, their bony fingers tightly wrapped around rusted swords. Their hollow eye sockets seem to fix on you, and you can't help but feel a chill run down your spine. They stand silent, yet menacing, blocking your path forward and leaving you with no choice but to face them. The skeletons are old, their bones yellowed with age and wear. Their tattered clothing hangs off them in shreds, and their swords are pitted and chipped, but still deadly. Their jaws are locked open in silent screams, their faces twisted into expressions of eternal agony. As they move toward you with an unnatural, jerky gait, you realize that these are not mindless undead, but rather creatures with a sinister purpose ",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
        showOptions();
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        

      }
    );
    currentNarrative = "N5a";
    break;
    case "N5a":
      option1 = "Continue";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      hideOptions();
      updateNarrative( "You have an advantage over these foes. Your own body is stronger and has more bones, giving you a greater range of motion and the ability to deliver stronger blows. With a fierce determination, you ready your own sword and charge toward the skeletons. The battle is intense, with the skeletons wielding their swords with deadly precision. But you move with grace and speed, dodging their attacks and striking back with powerful blows. Your skeleton body proves to be an asset as you deliver crushing blows with your own sword and use your increased agility to evade their strikes. Despite their best efforts, the skeletons are no match for your strength and skill. With a final, decisive blow, you defeat them both and emerge victorious. You take a moment to catch your breath, feeling a sense of satisfaction and accomplishment wash over you.  As you move on to the next level of the dungeon, you can't help but feel a sense of confidence and pride in your own skeleton body, knowing that it gives you a unique advantage in this dangerous and unpredictable world. ",
      function(){           
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none"
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative ="N6a"
    break; 

    case "N6a":
      option1 = "You add the bones to your body (+2 strength, -1 intelligence) ";
      option2 = "You touch the gem (+2 summon ,+1 intelligence) ";
      option3 = "You touch one gem and add the bones from the other skeleton ( + 1 strength + 1 summon )";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative(
        "You inspect the bodies, they both have gems in them too, now comes the same choice",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
        showOptions();
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      }
    );
    currentNarrative = "N7a";
    break;
    case "N7a":
      option1 = "Inspect their bodies ";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative( "As you move deeper into the dungeon, you hear a rustling sound up ahead. You slow your pace and move forward cautiously, keeping your sword at the ready. Suddenly, two humans leap out from the shadows, their faces twisted in rage as they charge at you with swords drawn. Without a moment's hesitation, you leap forward to meet them, your newly strengthened skeleton body giving you the strength and power to take on multiple  opponents at once. Your opponents are skilled fighters, but you are able to parry their attacks with ease and deliver crushing blows with your sword. As you fight, you notice something strange about humans. They seem almost terrified of you, their eyes widening in fear as they catch sight of your hulking, skeletal form. You can see the fear in their eyes as they back away from you, their swords trembling in their hands. But you are not afraid. You have grown stronger and more powerful than ever before, and you know that you can take on anyone or anything that stands in your way. You charge forward, your sword flashing in the dim light of the dungeon, and the humans back away even further, their fear turning to outright panic. As the battle wears on, you feel a sense of exhilaration and power coursing through your bones. You realize that your new strength and size, gained from adding the bones of other skeletons to your own, have given you an almost supernatural advantage in combat. As the last of the humans falls to the ground, you look down at their lifeless bodies with a sense of detachment. In the past, you might have felt remorse or regret for taking another life, but now you feel nothing. You realize that the dungeon has changed you, turning you into a relentless, powerful warrior with no mercy for those who stand in your way. ",
      function(){           
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative ="N8a"
    break;

    case "N8a":
      
    option1 = "Use the unspoiled bones from the adventurers to strengthen your body. (+3 Strengths)";
    option2 = "Take the equipment of the humans before you (+2 strength)";
    option3Element.style.display = "none";
    option4Element.style.display = "none";
    option5Element.style.display = "none";
    hideOptions(); // Hide option 3
    updateNarrative(
      "After the battle, you stand over the fallen bodies of the adventurers, feeling no remorse for their deaths. You realize that as a skeleton who does not care about who they are but cares about themself getting stronger, more powerful, you are no longer bound by the same moral and ethical considerations that govern the living. You care only about getting stronger, as you grow in size however you cannot carry the equipment of the average person ",
      function() {
        updateOption(option1, option1Element, function() {});
        updateOption(option2, option2Element, function() {});
        showOptions();
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      }
    );
    currentNarrative = "N9a";
    break;

    case "N9a":
      
    option1 = "You try to fight the lich with your strength ";
    option2 = "You try to fight the lich with your skeletons ";
    option3 = "You care little for the human and charge ( 6 strength required )";
    option4 = "You command your skeletons to fight on your behalf(5 summons atleast )";
    option5Element.style.display = "none";
    hideOptions(); // Hide option 3
    updateNarrative(
      "As you continue deeper into the dungeon, you come across a door that is marked with skull and crossbones. As you enter the room, you find yourself in an eerie and macabre chamber that is littered with bones and skulls. You can feel a chill run down your spine as you take in the morbid scenery.  In the center of the room, you see a weakened lich standing on top of a pile of dead adventurers. The lich is engaged in a fierce battle with a lone adventurer, clad in steel armor and wielding a sword. You can see that the adventurer is fighting with all his might, but the lich is a formidable foe, and his powers seem to be growing stronger by the moment.  You realize that you have a choice to make ",
      function() {
        updateOption(option1, option1Element, function() {});
        updateOption(option2, option2Element, function() {});
        updateOption(option3, option3Element, function() {});
        updateOption(option4, option4Element, function() {});
        showOptions();
        option5Element.style.display = "none";
      }
    );
    currentNarrative = "N10a";
    break;


    case "N10a":
      
    option1 = "You try to converse with the adventurer (1 intelligence required) ";
    option2 = "You try to overpower the adventurer (1 strength required)";
    option3 = "You use your skeletons to fight him (1 skeleton required)";
    option4Element.style.display = "none";
    option5Element.style.display = "none";
    hideOptions(); // Hide option 3
    updateNarrative(
      "At the threshold of the undead-themed room, the weakened lich stood on top of dead adventurers, fighting off the last remaining adventurer in steel armor and a sword. Suddenly, you charged towards the lich, wielding a rusty sword and your raw strength The lich conjured up spells to knock you back, but your strength proved too much to be easily pushed away. You weaved through the spells and closed in on the lich, striking a critical blow that caused the lich to crumble into dust. The badly injured adventurer who had been watching the fight from the sidelines pointed their sword towards you, clearly frightened.  ",
      function() {
        updateOption(option1, option1Element, function() {});
        updateOption(option2, option2Element, function() {});
        updateOption(option3, option3Element, function() {});
        showOptions();
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      }
    );
    currentNarrative = "N11a";
    break;

    case "N11a":
      option1 = "You touch the orb ";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative( "You attempt to use hand gestures to tell the adventurers you mean no harm to him; however he runs away, saddened by the outcome you turn to the lich as an orb appears out of his body, crimson red hovering above the remains calling for you.  ",
      function(){           
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative ="N12a"
    break;
    
        case "12a":
          updateNarrative( "As the skeleton approached the crimson red orb, he could feel the energy emanating from it. He hesitated for a moment, unsure of what the consequences might be. But his curiosity and desire for power outweighed his apprehension, and he reached out a bony hand to touch the orb. As soon as his fingers made contact, he felt a surge of dark magic coursing through his bones. He could feel himself changing, transforming into something more powerful and malevolent. His bones twisted and elongated, his skull reshaped into a more menacing form, and his eyes glowed with a sickly green light. In mere moments, the transformation was complete. The once simple skeleton had become a powerful lich, an undead being with the ability to wield devastating magic and command armies of the dead. The lich cackled with glee, relishing in his newfound power and the terror he would now be able to inflict upon the living. ",function(){});
          option1Element.style.display = "none"; // Hide option 
          option2Element.style.display = "none"; // Hide option 2
          option3Element.style.display = "none"; // Hide option 3
          option4Element.style.display = "none";
          option5Element.style.display = "none";
          break;











  }
}








  


function chooseOption2() {
  switch (currentNarrative) {
    case "N":
      updateNarrative( "Instead of praying to Deus Mortis, you choose to accept your fate and face judgment. You find yourself standing before a trio of hooded figures, each one representing a different aspect of your life. They ask you to recount your deeds and misdeeds, weighing your sins against your virtues. Will your good deeds outweigh your bad, or will you be condemned to an eternity of torment? ",function(){});
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      break;
    case "N1a":
      
    option1 = "Attack the monster";
    option2 = "Attempt to converse with the monster";
    option3 = "Avoid the monster ";
    option4Element.style.display = "none";
    option5Element.style.display = "none";
    hideOptions(); // Hide option 3
    updateNarrative(
      "As you make your way deeper into the dungeon, you encounter a hostile skeleton monster. It seems to have taken notice of you and begins to approach menacingly. You must quickly decide how to deal with the creature. ",
      function() {
        updateOption(option1, option1Element, function() {});
        updateOption(option2, option2Element, function() {});
        updateOption(option3, option3Element, function() {});
        showOptions();
        option4Element.style.display = "none";
        option5Element.style.display = "none";       
      }
    );
    currentNarrative = "N2a";
    break;

    case "N2a":
      option1 = "You are a monster; you take the bones from the skeleton and add them to your own body and leave the gem ( +1 Strength –1 intelligence )";
      option2 = "Your curiosity takes the best of you, you touch the gem  (+1 summon, +1 intelligence) ";
      option3 = "Go in deeper without looting ";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions(); // Hide option 3
      updateNarrative(
          "You try to communicate with the monster using gestures and body language, but it seems that the monster is unable to understand you. In frustration, the monster charges at you and you realize that you will have to fight it. You quickly grab a nearby rusty sword and engage the monster in battle. The fight is tough, but with quick thinking and skillful use of your undead powers, you are able to defeat the monster and continue your journey through the dungeon. You inspect the body, and you feel the urge to add the bones to your body, however you never saw other skeletons being able to add extra bones to themselves, you also realize there is a gem in the skeleton",  
          function(){
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
          showOptions();
          option4Element.style.display = "none";
          option5Element.style.display = "none";       
        }
      );
      currentNarrative = "N3a";
      break;
  
      case "N3a":
        option1 = "Continue";
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        hideOptions();
        updateNarrative(
          "You see the skeleton rise before you, afraid you jump back and grab your sword and point it towards it, however the skeleton before you have no hostility towards you, instead it looks at you as if awaiting a command, you soon figure out that the skeleton has become your ally ",
          function() {
            updateOption(option1, option1Element, function() {});
            showOptions();
            option2Element.style.display = "none";
            option3Element.style.display = "none";
            option4Element.style.display = "none";
            option5Element.style.display = "none";
          }
        );
        currentNarrative = "N4a";
        break;

        case "N4a":
                
        option1 = "You fight with your strength (1 strength required)";
        option2 = "You send your skeleton ally to fight (1 summon required)";
        option3 = "You fight";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        hideOptions();
        updateNarrative(
          "You ascend a winding staircase, the only sound your footsteps echoing against the cold, stone walls. As you approach the top, you brace yourself for whatever might await you on the next floor. As you step off the stairs and onto the new floor, you're momentarily taken aback by the sudden shift in atmosphere. The air is thick with the scent of decay and mustiness, and the room is dimly lit by flickering torches on the walls. The space is circular, with a high, vaulted ceiling that stretches far above you. As your eyes adjust to the dim light, you see two skeletons standing before you, their bony fingers tightly wrapped around rusted swords. Their hollow eye sockets seem to fix on you, and you can't help but feel a chill run down your spine. They stand silent, yet menacing, blocking your path forward and leaving you with no choice but to face them. The skeletons are old, their bones yellowed with age and wear. Their tattered clothing hangs off them in shreds, and their swords are pitted and chipped, but still deadly. Their jaws are locked open in silent screams, their faces twisted into expressions of eternal agony. As they move toward you with an unnatural, jerky gait, you realize that these are not mindless undead, but rather creatures with a sinister purpose ",
          function() {
            updateOption(option1, option1Element, function() {});
            updateOption(option2, option2Element, function() {});
            updateOption(option3, option3Element, function() {});
          showOptions();
          option4Element.style.display = "none";
          option5Element.style.display = "none";
          

        }
      );
      currentNarrative = "N5a";
      break;
      case "N5a":
        option1 = "Continue";
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        hideOptions();
        updateNarrative( "You enter the next floor of the dungeon, your skeleton ally following close behind. As you look around, you spot two skeletons with swords standing in front of you, their empty eye sockets fixed on you and your ally.  With a sense of determination, you ready your sword and move to face the skeletons. Your ally does the same, standing shoulder to shoulder with you as you prepare for battle. The skeletons move forward, their swords glinting in the dim light.The battle is fierce, with the four of you clashing swords in a chaotic dance. Your ally fights with skill and determination, using their own skeleton body to deliver crushing blows and dodge enemy attacks. Together, you and your ally coordinate your attacks, using your combined strength and skill to fend off the skeletons. As the fight wears on, you find yourselves pushed to the brink of exhaustion. But with a final surge of strength, you and your ally catch the two skeletons off guard and strike them down with a flurry of blows. The room falls silent, the only sound the clatter of swords on the stone floor. You turn to your ally, feeling a sense of camaraderie and gratitude for their help in the battle. As you move on to the next level of the dungeon, you know that having a fellow skeleton by your side will be a valuable asset in the trials ahead. ",
        function(){           
        updateOption(option1, option1Element, function() {});
        showOptions();
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      });
      currentNarrative ="N6a"
      break; 
      
      case "N7a":
        option1 = "Inspect their bodies ";
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        hideOptions();
        updateNarrative( "As you make your way through the dark and winding tunnels of the dungeon, you suddenly hear the sound of footsteps approaching. You draw your sword and take a defensive stance, preparing for whatever might come your way. Moments later, two adventurers emerge from the shadows, their swords at the ready. They look at you with suspicion and fear, clearly viewing you as a monster to be vanquished. You try to speak to them, to explain that you mean no harm, but as a skeleton, you are physically incapable of speech. The adventurers don't seem to understand or care, and they attack you with a fierce and unrelenting fury. You fight back with all the strength and skill at your disposal, but the odds are stacked against you. Just as it seems that all hope is lost, your skeleton ally rushes to your aid, attacking one of the adventurers and saving your life from a fatal blow. The battle rages on, with both sides fighting fiercely for their lives. Your skeleton ally's skull is crushed to nothing but bone dust As the final adventurer falls to the ground, you feel a sense of relief mixed with sadness and regret. You wish there had been another way, but as a skeleton, you know that communication with the living is not always possible. You look down at the fallen body of your skeleton ally and feel a sense of gratitude and respect. They gave their life to save yours, and you vow to honor their memory by continuing your journey through the dungeon with even greater determination and strength. ",
        function(){           
        updateOption(option1, option1Element, function() {});
        showOptions();
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      });
      currentNarrative ="N8a"
      break;

      case "N8a":
      
      option1 = "You see they have useful equipment on them, you pick them up. (+2 Strengths)";
      option2 = "You realize you are smart enough to conjure the crystals out of nothing and can place them inside the adventurers to create skeleton allies (+3 intelligence, +2 summons)";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions(); // Hide option 3
      updateNarrative(
        "After the battle, you stand over the fallen bodies of the adventurers, feeling a twinge of remorse for what you have done. You had no choice but to fight in self-defense, but it still weighs heavily on your mind. As you search the bodies for any useful items, it occurs to you that these bodies could be useful to you ",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          showOptions();
          option3Element.style.display = "none";
          option4Element.style.display = "none";
          option5Element.style.display = "none";
        }
      );
      currentNarrative = "N9a";
      break;

      case "N9a":
      
      option1 = "You try to fight the lich with your strength ";
      option2 = "You try to fight the lich with your skeletons ";
      option3 = "You care little for the human and charge ( 6 strength required )";
      option4 = "You command your skeletons to fight on your behalf(5 summons atleast )";
      option5Element.style.display = "none";
      hideOptions(); // Hide option 3
      updateNarrative(
        "As you continue deeper into the dungeon, you come across a door that is marked with skull and crossbones. As you enter the room, you find yourself in an eerie and macabre chamber that is littered with bones and skulls. You can feel a chill run down your spine as you take in the morbid scenery.  In the center of the room, you see a weakened lich standing on top of a pile of dead adventurers. The lich is engaged in a fierce battle with a lone adventurer, clad in steel armor and wielding a sword. You can see that the adventurer is fighting with all his might, but the lich is a formidable foe, and his powers seem to be growing stronger by the moment.  You realize that you have a choice to make ",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
          updateOption(option4, option4Element, function() {});
          showOptions();
          option5Element.style.display = "none";
        }
      );
      currentNarrative = "N10a";
      break;
      
      case "N10a":
      
      option1 = "You try to converse with the adventurer (1 intelligence required) ";
      option2 = "You try to overpower the adventurer (1 strength required)";
      option3 = "You use your skeletons to fight him (1 skeleton required)";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions(); // Hide option 3
      updateNarrative(
        "You enter the undead-themed room and spot the weakened lich fighting a steel-armored adventurer. You call upon your skeleton allies and use your own strength to charge towards the lich. Your skeleton allies distract the lich while you go in for the attack. You manage to strike a few blows before the lich retaliates with a powerful spell that sends your skeleton allies flying. Undeterred, you continue to fight the lich on your own. The lich casts more spells, but with the help of your skeleton allies, you manage to dodge and evade them. You use your enhanced strength to deliver a powerful final blow that shatters the lich's body. The steel-armored adventurer watches in awe as you emerge victorious. Feeling proud and confident, you turn to the adventurer, but they point their sword at you, frightened. You look around you,  ",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
          showOptions();
          option4Element.style.display = "none";
          option5Element.style.display = "none";
        }
      );
      currentNarrative = "N11a";
      break;

      case "N11a":
        option1 = "You die ";
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        hideOptions();
        updateNarrative( "You attempt to fight the adventurer, although injured he still managed to weaken the lich, with one slash of his sword your head falls to the ground and with another you die. ",
        function(){           
        updateOption(option1, option1Element, function() {});
        showOptions();
        option2Element.style.display = "none";
        option3Element.style.display = "none";
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      });
      currentNarrative ="N12a"
      break;

      case "12a":
        updateNarrative( "You died ! ",function(){});
        option1Element.style.display = "none"; // Hide option 
        option2Element.style.display = "none"; // Hide option 2
        option3Element.style.display = "none"; // Hide option 3
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        break;


      

  }

}








function chooseOption3() {
  switch (currentNarrative) {
    case "N":
      updateNarrative( "As you feel yourself slipping away into the void, you choose to embrace it. You let go of your regrets and your past, accepting that your time has come to an end. But as you surrender to the darkness, you feel a faint glimmer of hope. Is it possible that there is something beyond the void, something that you can reach if you only try?   ",function(){});
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      break;

    case "N2a":
      option1 = "Continue";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
    updateNarrative( "You quickly retreat into the shadows and avoid being noticed by the monster. You sneak past it and continue your journey deeper into the dungeon, avoiding other potential threats along the way. Though you may have missed out on potential rewards or information that could have been gained from the monster, you are able to make it further into the dungeon safely.    ",function(){
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative = "N3a";
    break;

    case "N5a":
    updateNarrative( "As you face the two skeletons standing before you, you realize that you are outmatched. You do your best to fight back with your sword, but their attacks are too quick and too precise for you to dodge. With each passing moment, you feel your strength ebbing away. As the skeletons close in on you, you realize with a sense of despair that you lack both the strength and the allies to defeat them. Your attacks are feeble and your movements sluggish, leaving you vulnerable to their strikes. You try to back away, but your feet feel heavy and unresponsive.  In a final, crushing blow, one of the skeletons lands a hit on you, sending you to the ground. You feel a searing pain in your side, and you know that your time is running out. As the other skeleton moves in for the kill, you close your eyes, knowing that you have met your match.  As darkness closes in around you, you cant help but wonder what might have been different if you had been stronger, or if you had found an ally to fight by your side. But in the end, it doesn't matter - you are just another casualty in the unending war of the dungeon, a forgotten skeleton among countless others who have met their end in its depths. ",function(){});
    option1Element.style.display = "none"; // Hide option 
    option2Element.style.display = "none"; // Hide option 2
    option3Element.style.display = "none"; // Hide option 3
    option4Element.style.display = "none";
    option5Element.style.display = "none";
    currentNarrative = "N6a";
    break;    

    case "N7a":
      option1 = "Inspect their bodies";
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      updateNarrative( "As you make your way through the dark and winding tunnels of the dungeon, you suddenly hear the sound of footsteps approaching. You draw your sword and take a defensive stance, preparing for whatever might come your way. Moments later, two adventurers emerge from the shadows, their swords at the ready. They look at you with suspicion and fear, but you know that you are more than capable of handling them, thanks to the strength and power you have gained from using the bones of other skeletons. You try to speak, to tell them that you mean no harm, but your skeletal voice fails you. The adventurers take this as a sign of aggression and attack you relentlessly. With your skeleton ally by your side, you charge forward to meet the adventurers in battle. They attack relentlessly, but you can tank their blows due to having a strong body. As the battle wears on, you try once more to speak to the adventurers, to ask them to stop and listen to reason. But they are too consumed by fear and aggression to hear you. They continue to attack, forcing you to fight back in self-defense. In the end, you emerge victorious, standing tall and proud amid the fallen bodies of your enemies. You look over at your skeleton ally and feel a sense of gratitude and respect. They were an invaluable asset in the battle, and you know that you could not have done it without them. But you also feel a twinge of remorse for the lives that were lost, and for the fact that you were unable to find a peaceful resolution to the conflict. As you move on to the next level of the dungeon, you know that the challenges ahead will be even greater than before. But you are confident in your abilities  ",function(){});
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      updateNarrative ="N8a"
      break;
      

    case "N10a":
      option1 = "You see your next set of bones to add to your body ";
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      updateNarrative( " As you enter the undead themed room, you see the lich standing on top of dead adventurers, with one other adventurer in steel armor and sword engaged in combat with the lich. Without any hesitation, you rush towards them, your hulking monster skeleton body filled with immense strength from the numerous bones you've gathered. The adventurer in steel armor turns around and sees you approaching with your intimidating size and monstrous appearance. Fear grips him, and he raises his sword towards you. You ignore him and charge towards the lich with all your might. The lich tries to fend you off with his magic, but you are too strong for him. Your massive bone-filled body smashes into him, and you overpower him with your raw strength alone. The lich falls to the ground, defeated. The adventurer in steel armor looks at you in shock and horror as he sees the lifeless body of the lich at your feet. He starts to back away slowly, still pointing his sword towards you. You turn your gaze towards him ",function(){});
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      currentNarrative = "N11a"
      break;
            

      case "N13c":
        updateNarrative( " You attempt to fight the adventurer, although injured he still managed to weaken the lich, with one slash of his sword your head falls to the ground and with another you die. ",function(){});
        option1Element.style.display = "none"; // Hide option 
        option2Element.style.display = "none"; // Hide option 2
        option3Element.style.display = "none"; // Hide option 3
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        break;


      case "N14c":
        updateNarrative( " As you stand in the chamber, your towering frame made up of the bones of many skeletons, your empty eye sockets gaze upon the crimson red orb with curiosity. With a mighty roar, you reach out and grasp the orb in your massive hand, feeling the energy coursing through your skeletal fingers.But as you hold the orb, you begin to sense a dark power emanating from it, tempting you to become something more than just a simple skeleton monster. A voice whispers in your mind, promising untold power and knowledge if you but embrace the darkness within.But with a great display of strength, you crush the orb in your hands, shattering it into a million pieces. As the shards rain down around you, you feel a surge of power coursing through your bones. You grow even stronger and bigger, your massive frame towering over everything in the room.With newfound power coursing through your bones, you let out a roar that shakes the very walls of the chamber. The darkness may have tempted you, but your strength and willpower proved stronger, and you stand taller than ever before as a hulking skeleton monster made up of the bones of many.  ",function(){});
        option1Element.style.display = "none"; // Hide option 
        option2Element.style.display = "none"; // Hide option 2
        option3Element.style.display = "none"; // Hide option 3
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        break;
          

      





    
    case "N3a":
      option1 = "Continue";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative(
        "You continue further down the dungeon with regret ",
        function() {
          updateOption(option1, option1Element, function() {});
          showOptions();
          option2Element.style.display = "none";
          option3Element.style.display = "none";
        }
      );
      currentNarrative = "N4a";
      break;
      case "N4a":
                
      option1 = "You fight with your strength (1 strength required)";
      option2 = "You send your skeleton ally to fight (1 summon required)";
      option3 = "You fight";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative(
        "You ascend a winding staircase, the only sound your footsteps echoing against the cold, stone walls. As you approach the top, you brace yourself for whatever might await you on the next floor. As you step off the stairs and onto the new floor, you're momentarily taken aback by the sudden shift in atmosphere. The air is thick with the scent of decay and mustiness, and the room is dimly lit by flickering torches on the walls. The space is circular, with a high, vaulted ceiling that stretches far above you. As your eyes adjust to the dim light, you see two skeletons standing before you, their bony fingers tightly wrapped around rusted swords. Their hollow eye sockets seem to fix on you, and you can't help but feel a chill run down your spine. They stand silent, yet menacing, blocking your path forward and leaving you with no choice but to face them. The skeletons are old, their bones yellowed with age and wear. Their tattered clothing hangs off them in shreds, and their swords are pitted and chipped, but still deadly. Their jaws are locked open in silent screams, their faces twisted into expressions of eternal agony. As they move toward you with an unnatural, jerky gait, you realize that these are not mindless undead, but rather creatures with a sinister purpose ",
        function() {
          updateOption(option1, option1Element, function() {});
          updateOption(option2, option2Element, function() {});
          updateOption(option3, option3Element, function() {});
        showOptions();
        option4Element.style.display = "none";
        option5Element.style.display = "none";
        

      }
    );
    currentNarrative = "N5a";
    break;

    case "N11a":
      option1 = "You die ";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative( "You attempt to fight the adventurer, although injured he still managed to weaken the lich, with one slash of his sword your head falls to the ground and with another you die. ",
      function(){           
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative ="N12a"
    break;

    case "12a":
      updateNarrative( "As you stand in the chamber, your towering frame made up of the bones of many skeletons, your empty eye sockets gaze upon the crimson red orb with curiosity. With a mighty roar, you reach out and grasp the orb in your massive hand, feeling the energy coursing through your skeletal fingers.But as you hold the orb, you begin to sense a dark power emanating from it, tempting you to become something more than just a simple skeleton monster. A voice whispers in your mind, promising untold power and knowledge if you but embrace the darkness within.But with a great display of strength, you crush the orb in your hands, shattering it into a million pieces. As the shards rain down around you, you feel a surge of power coursing through your bones. You grow even stronger and bigger, your massive frame towering over everything in the room.With newfound power coursing through your bones, you let out a roar that shakes the very walls of the chamber. The darkness may have tempted you, but your strength and willpower proved stronger, and you stand taller than ever before as a hulking skeleton monster made up of the bones of many.  ",function(){});
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      break;




  }
  


}

function chooseOption4(){
  switch(currentNarrative){
    case "N10a":
      
    option1 = "You try to converse with the adventurer (1 intelligence required) ";
    option2 = "You try to overpower the adventurer (1 strength required)";
    option3 = "You use your skeletons to fight him (1 skeleton required)";
    option4 = "You tell your skeletons to bring him outside";
    option5 = "You use your intelligence to come up with a primitive form of psychokinesis to converse with the adventurer (3 intelligence required )";
    hideOptions(); // Hide option 3
    updateNarrative(
      "You and your five skeleton allies approach the weakened lich, carefully analyzing its movements and planning your next moves. As the lich attacks one of your allies, you take the opportunity to flank it from behind and strike with your rusty sword, landing a solid hit. The lich retaliates with a blast of dark magic, but your skeleton allies quickly surround it, using their own skeletal limbs to block and deflect the attack. You notice that the lich's attention is now fully focused on you, so you quickly direct your skeleton allies to attack from different angles, confusing the lich and causing it to lose its footing. Using your agility and quick thinking, you maneuver around the lich and strike it again with your rusty sword, causing it to stumble. As the lich struggles to regain its balance, your skeleton allies launch their own attacks, using their sharp blades to chip away at the lich's defenses. You coordinate with them, taking turns distracting the lich and dealing damage. With a final, powerful strike, the lich falls to the ground, defeated. You and your skeleton allies stand victorious, having vanquished the lich without losing any of your precious allies in the fight. Feeling proud and confident, you turn to the adventurer, but they point their sword at you, frightened. You look around you, your skeleton allies surround you sensing the potential danger   ",
      function() {
        updateOption(option1, option1Element, function() {});
        updateOption(option2, option2Element, function() {});
        updateOption(option3, option3Element, function() {});
        showOptions();
        option4Element.style.display = "none";
        option5Element.style.display = "none";
      }
    );
    currentNarrative = "N11a";
    break;
    case "N11a":
      option1 = "You crush the orb ";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative( "Without hesitation, you crush the adventurer with ease and add his bones to your already massive frame. As you absorb his bones, you feel a surge of power flowing through you, making you stronger and more resilient than ever before. Your size and strength have now reached unprecedented levels, making you a true monster among skeletons. You feel invincible, and your confidence grows with each passing moment. you turn to the lich as an orb appears out of his body, crimson red hovering above the remains calling for you. ",
      function(){           
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative ="N12a"
    break;  


    case "12a":
      updateNarrative( "As the normal skeleton approached the crimson red orb, it began to emit a faint, eerie glow. But before touching the orb, the skeleton started to chant an incantation. Suddenly, a bright light shone from within the skeleton's ribcage, and it was as if the skeleton was enveloped in a cocoon of light. As the skeleton touched the orb, the light burst forth, and the skeleton was transformed. The bones of the skeleton seemed to melt away, replaced by flesh and sinew. And where once there were empty eye sockets, there were now piercing blue eyes that shone with a fierce intelligence. The newly transformed human stood before the crimson red orb, feeling the power coursing through their veins. They had become immortal, and their magic was stronger than they could have ever imagined. With a smile on their face, the human looked out into the world, ready to use their newfound power to shape it in ways they could only dream of before. ",function(){});
      option1Element.style.display = "none"; // Hide option 
      option2Element.style.display = "none"; // Hide option 2
      option3Element.style.display = "none"; // Hide option 3
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      break;
    
  }


}

function chooseOption5(){
  switch(currentNarrative){
    case "N11a":
      option1 = "You touch the orb ";
      option2 = "You cast the spell before you touch the orb";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
      hideOptions();
      updateNarrative( "As the adventurer approaches, you feel a surge of energy within you. You realize that you have the ability to communicate with the adventurer through psychokinesis, even though you have no physical means of speech. Using all of your mental strength, you project an image into the adventurer's mind of yourself as a human, then a skeleton, and finally, the hulking monster you have become. You attempt to convey that you mean no harm and that you have no control over your current form. The adventurer explains that he came here to kill a lich and obtain power from it that can grant the person who kills immortality as a human without turning into a lich themself but only if they cast a very specific spell beforehand, the grateful adventurer tells you this spell. you turn to the lich as an orb appears out of his body, crimson red hovering above the remains calling for you. ",
      function(){           
      updateOption(option1, option1Element, function() {});
      showOptions();
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
      option5Element.style.display = "none";
    });
    currentNarrative ="N12a"
    break; 



  }


}


      