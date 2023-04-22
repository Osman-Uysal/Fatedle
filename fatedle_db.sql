DROP TABLE IF EXISTS narratives, statistics,choices;

CREATE TABLE narratives
  (
     `narrative_id`        VARCHAR(255) NOT NULL,
     `day_of_week`         VARCHAR(10) NOT NULL,
     `narrative_text`      TEXT NOT NULL,
     PRIMARY KEY (`narrative_id`)
  )
engine = innodb
DEFAULT charset = utf8mb4;

CREATE TABLE choices(
	`choice`            VARCHAR(255) DEFAULT NULL,
    `choice_id` 		VARCHAR(255) NOT NULL,
    `owner_id` 		VARCHAR(255) NOT NULL,
    `next_id` 		VARCHAR(255) NOT NULL,
	PRIMARY KEY (`choice_id`),
	FOREIGN KEY (`owner_id`) REFERENCES narratives(`narrative_id`),
    FOREIGN KEY (`next_id`) REFERENCES narratives(`narrative_id`)


)engine = innodb
DEFAULT charset = utf8mb4;



INSERT INTO `narratives`
            (`narrative_id`,
            `day_of_week`,
             `narrative_text`
)
VALUES      

			( "N1a","Wednesday",
"as the final moments of your life slip away, you feel the crushing weight of mortality bearing down on you. your breaths come in shallow gasps, each one harder to draw than the last.  you reach out for help, but no one is there to save you. the world around you fades into darkness, and you are left alone with your thoughts. memories flood your mind, each one a reminder of the life you are about to leave behind.  regrets and missed opportunities fill you with a sense of profound sadness, and you can't help but wonder what could have been different if you had only made different choices.   but it's too late now, and as the final breath leaves your body, you feel yourself slipping away into the void."

	 ),
            
	( "N2a","Wednesday",
"Mmoments later, you awaken in a strange and unfamiliar place. the darkness that surrounded you before has lifted, and you can see that you are in some sort of dungeon. but something is different. you feel lighter, almost weightless, and as you look down, you realize that your body is no longer flesh and blood, but instead a skeleton. how did this happen? what force could have brought you back from the dead, and why in this form? "
 ),
 
 
 
 ("N2b","Wednesday","Instead of praying to Deus Mortis, you choose to accept your fate and face judgment. You find yourself standing before a trio of hooded figures, each one representing a different aspect of your life. They ask you to recount your deeds and misdeeds, weighing your sins against your virtues. Will your good deeds outweigh your bad, or will you be condemned to an eternity of torment? "
 ),
 ("N2c","Wednesday","As you feel yourself slipping away into the void, you choose to embrace it. You let go of your regrets and your past, accepting that your time has come to an end. But as you surrender to the darkness, you feel a faint glimmer of hope. Is it possible that there is something beyond the void, something that you can reach if you only try?  "),
 ("N3a","Wednesday","As you make your way back to the surface, you encounter a group of guards who are posted at the entrance to the dungeon. Despite your attempts to communicate using gestures and body language, they seem to view you as a threat and draw their weapons. In the confusion, one of the guards strikes you down, ending your undead existence. "),
 ("N3b","Wednesday","As you make your way deeper into the dungeon, you encounter a hostile skeleton monster. It seems to have taken notice of you and begins to approach menacingly. You must quickly decide how to deal with the creature. "),
 ("N4a","Wednesday","You quickly scan your surroundings and notice a rusty sword lying on the ground nearby. Without hesitation, you grab the sword and charge towards the monster. With a few quick swings, you are able to dispatch the monster and continue your journey through the dungeon. However, you inspect the body, and you feel the urge to add the bones to your body, however you never saw other skeletons being able to add extra bones to themselves, you also realize there is a gem in the skeleton "),
 
 ("N4b","Wednesday","You try to communicate with the monster using gestures and body language, but it seems that the monster is unable to understand you. In frustration, the monster charges at you and you realize that you will have to fight it. You quickly grab a nearby rusty sword and engage the monster in battle. The fight is tough, but with quick thinking and skillful use of your undead powers, you are able to defeat the monster and continue your journey through the dungeon. You inspect the body, and you feel the urge to add the bones to your body, however you never saw other skeletons being able to add extra bones to themselves, you also realize there is a gem in the skeleton  "),
 ("N4c","Wednesday","You quickly retreat into the shadows and avoid being noticed by the monster. You sneak past it and continue your journey deeper into the dungeon, avoiding other potential threats along the way. Though you may have missed out on potential rewards or information that could have been gained from the monster, you are able to make it further into the dungeon safely. "),
 ("N5a","Wednesday","You added the bones to yourself and felt you grew stronger with each bone that was left in good condition carefully connected to areas of your body "),
 ("N5b","Wednesday","You see the skeleton rise before you, afraid you jump back and grab your sword and point it towards it, however the skeleton before you have no hostility towards you, instead it looks at you as if awaiting a command, you soon figure out that the skeleton has become your ally "),
 ("N5c","Wednesday","You continue further down the dungeon with regret "),
 ("N6a","Wednesday","You ascend a winding staircase, the only sound your footsteps echoing against the cold, stone walls. As you approach the top, you brace yourself for whatever might await you on the next floor. As you step off the stairs and onto the new floor, you're momentarily taken aback by the sudden shift in atmosphere. The air is thick with the scent of decay and mustiness, and the room is dimly lit by flickering torches on the walls. The space is circular, with a high, vaulted ceiling that stretches far above you. 
As your eyes adjust to the dim light, you see two skeletons standing before you, their bony fingers tightly wrapped around rusted swords. Their hollow eye sockets seem to fix on you, and you can't help but feel a chill run down your spine. They stand silent, yet menacing, blocking your path forward and leaving you with no choice but to face them. 
The skeletons are old, their bones yellowed with age and wear. Their tattered clothing hangs off them in shreds, and their swords are pitted and chipped, but still deadly. Their jaws are locked open in silent screams, their faces twisted into expressions of eternal agony. As they move toward you with an unnatural, jerky gait, you realize that these are not mindless undead, but rather creatures with a sinister purpose "),
 ("N7a","Wednesday","you have an advantage over these foes. Your own body is stronger and has more bones, giving you a greater range of motion and the ability to deliver stronger blows. With a fierce determination, you ready your own sword and charge toward the skeletons. 
The battle is intense, with the skeletons wielding their swords with deadly precision. But you move with grace and speed, dodging their attacks and striking back with powerful blows. Your skeleton body proves to be an asset as you deliver crushing blows with your own sword and use your increased agility to evade their strikes. 
Despite their best efforts, the skeletons are no match for your strength and skill. With a final, decisive blow, you defeat them both and emerge victorious. You take a moment to catch your breath, feeling a sense of satisfaction and accomplishment wash over you. 
As you move on to the next level of the dungeon, you can't help but feel a sense of confidence and pride in your own skeleton body, knowing that it gives you a unique advantage in this dangerous and unpredictable world. "),
 ("N7b","Wednesday","You enter the next floor of the dungeon, your skeleton ally following close behind. As you look around, you spot two skeletons with swords standing in front of you, their empty eye sockets fixed on you and your ally. 
With a sense of determination, you ready your sword and move to face the skeletons. Your ally does the same, standing shoulder to shoulder with you as you prepare for battle. The skeletons move forward, their swords glinting in the dim light. 
The battle is fierce, with the four of you clashing swords in a chaotic dance. Your ally fights with skill and determination, using their own skeleton body to deliver crushing blows and dodge enemy attacks. Together, you and your ally coordinate your attacks, using your combined strength and skill to fend off the skeletons. 
As the fight wears on, you find yourselves pushed to the brink of exhaustion. But with a final surge of strength, you and your ally catch the two skeletons off guard and strike them down with a flurry of blows. The room falls silent, the only sound the clatter of swords on the stone floor. 
You turn to your ally, feeling a sense of camaraderie and gratitude for their help in the battle. As you move on to the next level of the dungeon, you know that having a fellow skeleton by your side will be a valuable asset in the trials ahead. "),
 ("N7c","Wednesday","As you face the two skeletons standing before you, you realize that you are outmatched. You do your best to fight back with your sword, but their attacks are too quick and too precise for you to dodge. With each passing moment, you feel your strength ebbing away. 
As the skeletons close in on you, you realize with a sense of despair that you lack both the strength and the allies to defeat them. Your attacks are feeble and your movements sluggish, leaving you vulnerable to their strikes. You try to back away, but your feet feel heavy and unresponsive. 
In a final, crushing blow, one of the skeletons lands a hit on you, sending you to the ground. You feel a searing pain in your side, and you know that your time is running out. As the other skeleton moves in for the kill, you close your eyes, knowing that you have met your match. 
As darkness closes in around you, you can't help but wonder what might have been different if you had been stronger, or if you had found an ally to fight by your side. But in the end, it doesn't matter - you are just another casualty in the unending war of the dungeon, a forgotten skeleton among countless others who have met their end in its depths. "),
 ("N8a","Wednesday","You inspect the bodies, they both have gems in them too, now comes the same choice, "),
 ("N9a","Wednesday","As you move deeper into the dungeon, you hear a rustling sound up ahead. You slow your pace and move forward cautiously, keeping your sword at the ready. Suddenly, two humans leap out from the shadows, their faces twisted in rage as they charge at you with swords drawn. 
Without a moment's hesitation, you leap forward to meet them, your newly strengthened skeleton body giving you the strength and power to take on multiple opponents at once. Your opponents are skilled fighters, but you are able to parry their attacks with ease and deliver crushing blows with your sword. 
As you fight, you notice something strange about humans. They seem almost terrified of you, their eyes widening in fear as they catch sight of your hulking, skeletal form. You can see the fear in their eyes as they back away from you, their swords trembling in their hands. 
But you are not afraid. You have grown stronger and more powerful than ever before, and you know that you can take on anyone or anything that stands in your way. You charge forward, your sword flashing in the dim light of the dungeon, and the humans back away even further, their fear turning to outright panic. 
As the battle wears on, you feel a sense of exhilaration and power coursing through your bones. You realize that your new strength and size, gained from adding the bones of other skeletons to your own, have given you an almost supernatural advantage in combat. 
As the last of the humans falls to the ground, you look down at their lifeless bodies with a sense of detachment. In the past, you might have felt remorse or regret for taking another life, but now you feel nothing. You realize that the dungeon has changed you, turning you into a relentless, powerful warrior with no mercy for those who stand in your way. "),
 ("N9b","Wednesday","As you make your way through the dark and winding tunnels of the dungeon, you suddenly hear the sound of footsteps approaching. You draw your sword and take a defensive stance, preparing for whatever might come your way. 
Moments later, two adventurers emerge from the shadows, their swords at the ready. They look at you with suspicion and fear, clearly viewing you as a monster to be vanquished. 
You try to speak to them, to explain that you mean no harm, but as a skeleton, you are physically incapable of speech. The adventurers don't seem to understand or care, and they attack you with a fierce and unrelenting fury. 
You fight back with all the strength and skill at your disposal, but the odds are stacked against you. Just as it seems that all hope is lost, your skeleton ally rushes to your aid, attacking one of the adventurers and saving your life from a fatal blow. 
The battle rages on, with both sides fighting fiercely for their lives. Your skeleton ally's skull is crushed to nothing but bone dust 
As the final adventurer falls to the ground, you feel a sense of relief mixed with sadness and regret. You wish there had been another way, but as a skeleton, you know that communication with the living is not always possible. 
You look down at the fallen body of your skeleton ally and feel a sense of gratitude and respect. They gave their life to save yours, and you vow to honor their memory by continuing your journey through the dungeon with even greater determination and strength. "),
 ("N9c","Wednesday","As you make your way through the dark and winding tunnels of the dungeon, you suddenly hear the sound of footsteps approaching. You draw your sword and take a defensive stance, preparing for whatever might come your way. 
Moments later, two adventurers emerge from the shadows, their swords at the ready. They look at you with suspicion and fear, but you know that you are more than capable of handling them, thanks to the strength and power you have gained from using the bones of other skeletons. 
You try to speak, to tell them that you mean no harm, but your skeletal voice fails you. The adventurers take this as a sign of aggression and attack you relentlessly. 
With your skeleton ally by your side, you charge forward to meet the adventurers in battle. They attack relentlessly, but you can tank their blows due to having a strong body 
As the battle wears on, you try once more to speak to the adventurers, to ask them to stop and listen to reason. But they are too consumed by fear and aggression to hear you. They continue to attack, forcing you to fight back in self-defense. 
In the end, you emerge victorious, standing tall and proud amid the fallen bodies of your enemies. You look over at your skeleton ally and feel a sense of gratitude and respect. They were an invaluable asset in the battle, and you know that you could not have done it without them. 
But you also feel a twinge of remorse for the lives that were lost, and for the fact that you were unable to find a peaceful resolution to the conflict. As you move on to the next level of the dungeon, you know that the challenges ahead will be even greater than before. But you are confident in your abilities "),
 ("N10a","Wednesday","After the battle, you stand over the fallen bodies of the adventurers, feeling no remorse for their deaths. You realize that as a skeleton who does not care about who they are but cares about themself getting stronger, more powerful, you are no longer bound by the same moral and ethical considerations that govern the living. You care only about getting stronger, as you grow in size however you cannot carry the equipment of the average person "),
 ("N10b","Wednesday","After the battle, you stand over the fallen bodies of the adventurers, feeling a twinge of remorse for what you have done. You had no choice but to fight in self-defense, but it still weighs heavily on your mind. 
As you search the bodies for any useful items, it occurs to you that these bodies could be useful to you "),
 ("N11a","Wednesday","As you continue deeper into the dungeon, you come across a door that is marked with skull and crossbones. As you enter the room, you find yourself in an eerie and macabre chamber that is littered with bones and skulls. You can feel a chill run down your spine as you take in the morbid scenery. 
In the center of the room, you see a weakened lich standing on top of a pile of dead adventurers. The lich is engaged in a fierce battle with a lone adventurer, clad in steel armor and wielding a sword. 
You can see that the adventurer is fighting with all his might, but the lich is a formidable foe, and his powers seem to be growing stronger by the moment. 
You realize that you have a choice to make "),
 ("N12a","Wednesday","At the threshold of the undead-themed room, the weakened lich stood on top of dead adventurers, fighting off the last remaining adventurer in steel armor and a sword. Suddenly, you charged towards the lich, wielding a rusty sword and your raw strength 
The lich conjured up spells to knock you back, but your strength proved too much to be easily pushed away. You weaved through the spells and closed in on the lich, striking a critical blow that caused the lich to crumble into dust. 
The badly injured adventurer who had been watching the fight from the sidelines pointed their sword towards you, clearly frightened.  "),
 ("N12b","Wednesday","You enter the undead-themed room and spot the weakened lich fighting a steel-armored adventurer. You call upon your skeleton allies and use your own strength to charge towards the lich. Your skeleton allies distract the lich while you go in for the attack. You manage to strike a few blows before the lich retaliates with a powerful spell that sends your skeleton allies flying. 
Undeterred, you continue to fight the lich on your own. The lich casts more spells, but with the help of your skeleton allies, you manage to dodge and evade them. You use your enhanced strength to deliver a powerful final blow that shatters the lich's body. The steel-armored adventurer watches in awe as you emerge victorious. 
Feeling proud and confident, you turn to the adventurer, but they point their sword at you, frightened. You look around you,  "),
 ("N12c","Wednesday","As you enter the undead themed room, you see the lich standing on top of dead adventurers, with one other adventurer in steel armor and sword engaged in combat with the lich. Without any hesitation, you rush towards them, your hulking monster skeleton body filled with immense strength from the numerous bones you've gathered. 
The adventurer in steel armor turns around and sees you approaching with your intimidating size and monstrous appearance. Fear grips him, and he raises his sword towards you. You ignore him and charge towards the lich with all your might. 
The lich tries to fend you off with his magic, but you are too strong for him. Your massive bone-filled body smashes into him, and you overpower him with your raw strength alone. The lich falls to the ground, defeated. 
The adventurer in steel armor looks at you in shock and horror as he sees the lifeless body of the lich at your feet. He starts to back away slowly, still pointing his sword towards you. You turn your gaze towards him "),
 ("N12d","Wednesday","You and your five skeleton allies approach the weakened lich, carefully analyzing its movements and planning your next moves. As the lich attacks one of your allies, you take the opportunity to flank it from behind and strike with your rusty sword, landing a solid hit. The lich retaliates with a blast of dark magic, but your skeleton allies quickly surround it, using their own skeletal limbs to block and deflect the attack. 
You notice that the lich's attention is now fully focused on you, so you quickly direct your skeleton allies to attack from different angles, confusing the lich and causing it to lose its footing. Using your agility and quick thinking, you maneuver around the lich and strike it again with your rusty sword, causing it to stumble. 
As the lich struggles to regain its balance, your skeleton allies launch their own attacks, using their sharp blades to chip away at the lich's defenses. You coordinate with them, taking turns distracting the lich and dealing damage. With a final, powerful strike, the lich falls to the ground, defeated. 
You and your skeleton allies stand victorious, having vanquished the lich without losing any of your precious allies in the fight. 
Feeling proud and confident, you turn to the adventurer, but they point their sword at you, frightened. You look around you, your skeleton allies surround you sensing the potential danger "),
 ("N13a","Wednesday","You attempt to use hand gestures to tell the adventurers you mean no harm to him; however he runs away, saddened by the outcome you turn to the lich as an orb appears out of his body, crimson red hovering above the remains calling for you. "),
 ("N13b","Wednesday","You attempt to fight the adventurer, although injured he still managed to weaken the lich, with one slash of his sword your head falls to the ground and with another you die. "),
 ("N13d","Wednesday","Without hesitation, you crush the adventurer with ease and add his bones to your already massive frame. As you absorb his bones, you feel a surge of power flowing through you, making you stronger and more resilient than ever before. 

Your size and strength have now reached unprecedented levels, making you a true monster among skeletons. You feel invincible, and your confidence grows with each passing moment. you turn to the lich as an orb appears out of his body, crimson red hovering above the remains calling for you. "),
 ("N13e","Wednesday","You order your five skeleton allies to take the adventurer outside to safety. They approach the adventurer cautiously, but the man panics and attacks them with his sword. In the process, two of your skeleton allies are struck down by the adventurer's blade. However, the remaining three skeletons are able to disarm the adventurer and subdue him. 

With the adventurer now under control, your skeleton allies begin to move him towards the exit. Although two of your allies have fallen, you are grateful that the rest were able to work together to get the job done. They successfully drag the adventurer outside as you stay in the room alone, you turn to the lich as an orb appears out of his body, crimson red hovering above the remains calling for you. "),
 ("N13f","Wednesday",""),
 ("N14a","Wednesday","As the skeleton approached the crimson red orb, he could feel the energy emanating from it. He hesitated for a moment, unsure of what the consequences might be. But his curiosity and desire for power outweighed his apprehension, and he reached out a bony hand to touch the orb. 
As soon as his fingers made contact, he felt a surge of dark magic coursing through his bones. He could feel himself changing, transforming into something more powerful and malevolent. His bones twisted and elongated, his skull reshaped into a more menacing form, and his eyes glowed with a sickly green light. 
In mere moments, the transformation was complete. The once simple skeleton had become a powerful lich, an undead being with the ability to wield devastating magic and command armies of the dead. The lich cackled with glee, relishing in his newfound power and the terror he would now be able to inflict upon the living. "),
 
 ("N14b","Wednesday","You died "),
 
 ("N14c","Wednesday"," 
As you stand in the chamber, your towering frame made up of the bones of many skeletons, your empty eye sockets gaze upon the crimson red orb with curiosity. With a mighty roar, you reach out and grasp the orb in your massive hand, feeling the energy coursing through your skeletal fingers. 
But as you hold the orb, you begin to sense a dark power emanating from it, tempting you to become something more than just a simple skeleton monster. A voice whispers in your mind, promising untold power and knowledge if you but embrace the darkness within. 
But with a great display of strength, you crush the orb in your hands, shattering it into a million pieces. As the shards rain down around you, you feel a surge of power coursing through your bones. You grow even stronger and bigger, your massive frame towering over everything in the room. 
With newfound power coursing through your bones, you let out a roar that shakes the very walls of the chamber. The darkness may have tempted you, but your strength and willpower proved stronger, and you stand taller than ever before as a hulking skeleton monster made up of the bones of many. "),
 
 ("N14d","Wednesday","As the normal skeleton approached the crimson red orb, it began to emit a faint, eerie glow. But before touching the orb, the skeleton started to chant an incantation. Suddenly, a bright light shone from within the skeleton's ribcage, and it was as if the skeleton was enveloped in a cocoon of light. 
As the skeleton touched the orb, the light burst forth, and the skeleton was transformed. The bones of the skeleton seemed to melt away, replaced by flesh and sinew. And where once there were empty eye sockets, there were now piercing blue eyes that shone with a fierce intelligence. 
The newly transformed human stood before the crimson red orb, feeling the power coursing through their veins. They had become immortal, and their magic was stronger than they could have ever imagined. 
With a smile on their face, the human looked out into the world, ready to use their newfound power to shape it in ways they could only dream of before. "),
  

( "VN1a","Monday", 

"as the final moments of your life slip away, you feel the crushing weight of mortality bearing down on you. your breaths come in shallow gasps, each one harder to draw than the last.  you reach out for help, but no one is there to save you. the world around you fades into darkness, and you are left alone with your thoughts. memories flood your mind, each one a reminder of the life you are about to leave behind.  regrets and missed opportunities fill you with a sense of profound sadness, and you can't help but wonder what could have been different if you had only made different choices.   but it's too late now, and as the final breath leaves your body, you feel yourself slipping away into the void." 

  

 ), 

             

( "VN2a","Monday", 

"Moments later, you awaken in a strange and unfamiliar place. The darkness that surrounded you before has lifted, and you can see that you are in some sort of dungeon. But something is different. You feel a hunger burning within you, and as you look down, you realize that your body is no longer human, but instead a vampire. How did this happen? What force could have turned you into one of the undead, and why in this form?" 

), 

  

  

  

("VN2b","Monday","Instead of praying to Deus Mortis, you choose to accept your fate and face judgment. You find yourself standing before a trio of hooded figures, each one representing a different aspect of your life. They ask you to recount your deeds and misdeeds, weighing your sins against your virtues. Will your good deeds outweigh your bad, or will you be condemned to an eternity of torment? " 

), 

("VN2c","Monday","As you feel yourself slipping away into the void, you choose to embrace it. You let go of your regrets and your past, accepting that your time has come to an end. But as you surrender to the darkness, you feel a faint glimmer of hope. Is it possible that there is something beyond the void, something that you can reach if you only try?  "), 

("VN3a","Monday","As you make your way back to the surface, you encounter a group of guards who are posted at the entrance to the dungeon. Despite your attempts to communicate, they seem to view you as a threat and draw their weapons. In the confusion, one of the guards strikes you down, ending your undead existence. "), 

("VN3b","Monday","As you make your way deeper into the dungeon, you encounter a hostile goblin monster. It seems to have taken notice of you and begins to approach menacingly. You must quickly decide how to deal with the creature. "), 

 

("VN4a","Monday","You quickly scan your surroundings and notice a rusty sword lying on the ground nearby. Without hesitation, you grab the sword and charge towards the monster, a goblin. As you engage in battle, you notice the goblin's neck pulsing with each beat of its heart, and you feel a sudden urge to taste its blood. You pause, weighing the consequences of drinking from the goblin. Would it grant you more power and strength, or would it only deepen your thirst for blood? "), 

  

("VN4b","Monday","You try to communicate with the monster using gestures and body language, but it seems that the goblin is unable to understand you. In frustration, the goblin charges at you, and you realize that you will have to fight it. You quickly grab a nearby rusty sword and engage the goblin in battle. The fight is tough, but with quick thinking and skillful use of your undead powers, you are able to defeat the goblin and continue your journey through the dungeon. As you inspect the body, you feel a strange hunger stirring within you, and you realize that the taste of goblin blood would satisfy your thirst. You pause, considering the consequences of giving in to your vampiric nature. Would drinking the goblin's blood make you stronger, or would it only deepen your thirst and weaken your resolve? "), 

("VN4c","Monday","You quickly retreat into the shadows and avoid being noticed by the monster. You sneak past it and continue your journey deeper into the dungeon, avoiding other potential threats along the way. Though you may have missed out on potential rewards or information that could have been gained from the monster, you are able to make it further into the dungeon safely. "), 

 

("VN5a","Monday","You drank the blood of the goblin using your (+ 1 vitality) "), 

("VN5b","Monday","Yo udecide to drink the blood (+1 strength) (+1 intelligence)"), 

 

("VN5c","Monday","You continue further down the dungeon with regret "), 

("VN6a","Monday","You ascend a winding staircase, the only sound your footsteps echoing against the cold, stone walls. As you approach the top, you brace yourself for whatever might await you on the next floor. As you step off the stairs and onto the new floor, you're momentarily taken aback by the sudden shift in atmosphere. The air is thick with the scent of decay and mustiness, and the room is dimly lit by flickering torches on the walls. The space is circular, with a high, vaulted ceiling that stretches far above you. 

As your eyes adjust to the dim light, you see two lizardmen standing before you, their scaled bodies tensed and ready to attack. Their eyes lock onto yours, and you can't help but feel a chill run down your spine. They stand silent, yet menacing, blocking your path forward and leaving you with no choice but to face them. 

The lizardmen are old, their scales dull and scarred with battle. Their armor is worn and dented, and their weapons are crude yet effective. Their jaws are locked in a silent hiss, their faces twisted into expressions of deadly determination. As they move toward you with a fluid, predatory gait, you realize that these are not mindless monsters, but rather creatures with a sinister purpose." 

 
), 

 

("VN7a","Monday","you have an advantage over these foes. Your own body is stronger and has more bones, giving you a greater range of motion and the ability to deliver stronger blows. With a fierce determination, you ready your own sword and charge toward the skeletons.  

The battle is intense, with the skeletons wielding their swords with deadly precision. But you move with grace and speed, dodging their attacks and striking back with powerful blows. Your skeleton body proves to be an asset as you deliver crushing blows with your own sword and use your increased agility to evade their strikes.  

Despite their best efforts, the lizardmen are no match for your strength and skill. With a final, decisive blow, you defeat them both and emerge victorious. You take a moment to catch your breath, feeling a sense of satisfaction and accomplishment wash over you.  

As you move on to the next level of the dungeon, you can't help but feel a sense of confidence and pride in your own vampire body, knowing that it gives you a unique advantage in this dangerous and unpredictable world. "), 

("VN7b","Monday"," You enter the next floor of the dungeon, your senses heightened as you scan your surroundings. Your eyes lock onto two humans, their weapons at the ready, blocking your path. You feel a rush of excitement at the prospect of battle, but also a sense of caution - your newly discovered blood magic powers are still unfamiliar to you. 

With a deep breath, you focus your mind on the blood coursing through the veins of your opponents. You feel a surge of power as you draw the life force from them, using it to fuel your own strength. The humans are caught off guard, unable to comprehend what is happening to them as their strength is drained away. 

You move with purpose, striking with precision and efficiency as you continue to feed on their blood. You can feel their life force flowing into you, invigorating you and heightening your senses. The battle is over quickly, your opponents lying lifeless on the ground at your feet. 

 

"), 

("VN7c","Monday","  

As you face the two lizardmen standing before you, you realize that you are outmatched. You try to use your vampire powers to gain an advantage, but their thick hides seem impervious to your attacks. Their sharp claws and teeth tear into you, causing you to lose more and more blood with each passing moment. 

You feel your strength ebbing away, and you realize with a sense of despair that you lack the skills and the allies to defeat them. Your attacks are feeble and your movements sluggish, leaving you vulnerable to their strikes. You try to back away, but your feet feel heavy and unresponsive. 

In a final, crushing blow, one of the lizardmen lands a hit on you, sending you to the ground. You feel a searing pain in your chest, and you know that your time is running out. As the other lizardman moves in for the kill, you close your eyes, knowing that you have met your end in the dungeon. 

As darkness closes in around you, you can't help but wonder what might have been different if you had been stronger or more prepared. But in the end, it doesn't matter - you are just another casualty in the unending war of the dungeon, a forgotten vampire among countless others who have met their end in its depths. 

 "), 

 

("VN8a","Monday","You inspect the bodies, now comes the same choice, "), 

("VN9a","Monday","As you move deeper into the dungeon, you hear a rustling sound up ahead. You slow your pace and move forward cautiously, keeping your sword at the ready. Suddenly, two humans leap out from the shadows, their faces twisted in rage as they charge at you with swords drawn.  

 

Without a moment's hesitation, you leap forward to meet them, your strong vampire body giving you the power and agility to take on multiple opponents at once. Your opponents are mere humans, skilled fighters but no match for your superior strength and speed. You move with lightning-fast reflexes, dodging their attacks with ease and delivering crushing blows with your bare hands. 

Within moments, the fight is over. Your opponents lie motionless on the ground, defeated and lifeless. You stand amidst the carnage, feeling the rush of adrenaline and the thrill of victory. 

But as the dust settles, you realize with a sinking feeling that you have crossed a line that cannot be uncrossed. You have taken the lives of others without mercy or hesitation, and you know that you can never go back to who you once were.  

"), 

 

 

("VN9b","Monday"," As you make your way through the dark and winding tunnels of the dungeon, you suddenly hear the sound of footsteps approaching. You draw your sword and take a defensive stance, preparing for whatever might come your way. Moments later, two adventurers emerge from the shadows, their swords at the ready. They look at you with suspicion and fear, clearly viewing you as a monster to be vanquished. You use your heightened vampire senses to sense the blood coursing through their veins, and a sudden realization strikes you. With a flick of your wrist, you use your blood magic to manipulate their blood, causing it to boil and burst from their bodies in a gruesome display. The adventurers fall to the ground, their bodies lifeless and limp. You feel a sense of power and satisfaction, but also a tinge of regret at the loss of life. As a vampire, you are powerful and virtually indestructible, but you are also burdened with the knowledge that your strength comes at a great cost. "), 

 

 

("VN9c","Monday"," As you make your way through the dungeon, you suddenly hear the sound of footsteps approaching. You draw your sword and take a defensive stance, preparing for whatever might come your way. Moments later, two adventurers emerge from the shadows, their swords at the ready. You try to speak to them, to explain that you mean no harm, but they don't seem to care, viewing you as a monster to be vanquished. They charge at you with a fierce and unrelenting fury, and you do your best to fight back with your limited strength and skill. But the odds are stacked against you, and you soon find yourself overpowered and outmatched. The adventurers' swords strike true, and you feel the searing pain of their blades cutting through your flesh. You try to stay on your feet, but the pain is too great, and you collapse to the ground. As the adventurers stand over you, ready to deliver the final blow, you feel a sense of regret and sadness. You wish that you had been stronger or had more allies to fight by your side, but it's too late now. With a final strike, your vision fades to black, and you know that your journey through the dungeon has come to an end. "), 

 

 

 

("VN10a","Monday","After the battle, you stand over the fallen bodies of the adventurers, feeling no remorse for their deaths. You realize that as a vampire who does not care about who they are but cares about themself getting stronger, more powerful, you are no longer bound by the same moral and ethical considerations that govern the living. You care only about getting stronger, as you grow stronger however you cannot carry the equipment of the average person because you are too tall "), 

("VN10b","Monday","After the battle, you stand over the fallen bodies of the adventurers, feeling a twinge of remorse for what you have done. You had no choice but to fight in self-defense, but it still weighs heavily on your mind.  

As you search the bodies for any useful items, it occurs to you that these bodies could be useful to you "), 

 

 

("VN11a","Monday"," As you enter the room, you are greeted by an overwhelming smell of mold and decay. The chamber is dimly lit by flickering torches, revealing a scene of chaos and destruction. Broken weapons and torn banners are scattered all around, and you can see a group of cackling goblins feasting on the remains of fallen adventurers. 

In the center of the room, you notice a goblin king standing on a makeshift throne made of stolen treasure. The goblin king is surrounded by his loyal minions, cheering him on as he faces off against a lone adventurer. 

The adventurer is struggling to keep up with the goblin king's agility and cunning tactics. The goblin king seems to be enjoying the fight, taunting the adventurer with his high-pitched laughter. 

As you assess the situation, you realize that you have a choice to make. Do you intervene and risk the wrath of the goblin king and his army? 

 "), 

 

 

("VN12a","Monday", "At the threshold of the goblin-themed room, the weakened Goblin King stood on top of dead adventurers, fighting off the last remaining adventurer in steel armor and a sword. Suddenly, you charged towards the Goblin King, wielding a rusty sword and your raw strength. 

The Goblin King summoned a horde of goblin minions to attack you, but your strength proved too much for the small creatures. You cleaved through them with ease, determined to reach the Goblin King. 

As you got closer, the Goblin King conjured up spells to knock you back, but you weaved through the spells and closed in on the Goblin King, striking a critical blow that caused the Goblin King to crumble into dust. 

The badly injured adventurer who had been watching the fight from the sidelines pointed their sword towards you, clearly frightened. 

  "), 

 

("VN12b","Monday"," You enter the dark, damp chamber and spot the weakened Goblin King fighting a heavily armed adventurer. As a powerful vampire with extensive knowledge of blood magic, you call upon your vampiric powers and use your own strength to charge towards the Goblin King. 

Your powers allow you to summon an army of bats to distract the Goblin King while you go in for the attack. You manage to strike a few blows, draining his life force with every strike, before the Goblin King retaliates with a powerful spell that sends your bats flying. 

Undeterred, you continue to fight the Goblin King on your own. He casts more spells, but with the help of your vampiric powers, you manage to dodge and evade them. You use your enhanced strength to deliver a powerful final blow that drains the last of the Goblin King's life force, leaving him a lifeless husk on the ground. 

As you bask in your victory, you turn to the adventurer, but they point their sword at you, frightened. You look around you, realizing that your vampiric powers and use of blood magic have made you appear threatening and dangerous to the adventurer. You try to reassure them that you are not a threat, but they remain wary and cautious in your presence.  

"),  

("VN13a","Monday","You kill the adventurer and drink his blood. "), 

("VN13b","Monday","You heal the adventurer using blood magic after which he runs away, you drink the blood of the goblin king"), 

 

("VN14a","Monday","As you drink the adventurer’s blood you start turning into a beast, a monster with no mind of its own, you leave the lifeless body of the adventurer and venture into the dark of the dungeon "), 

  

("VN14b","Monday","You drink the blood of the goblin king, it empowers you and strengthens your body, you feel stronger, you have become a Vampire lord ")
 
 


 
 
 
 ;

INSERT INTO `choices`
(	`choice` ,			
	`choice_id`,
    `owner_id`,
    `next_id`)  
VALUES 
("Pray to Deus mortis", "O1a","N1a","N2a"),
("Embrace the Void","O1c","N1a","N2b"),
("Face Judgment", "O1b","N1a","N2c"),
("Go deeper into the dungeon","O2a","N2a","N3a"),
("Go back to the surface","O2b","N2a","N3b"),
("Attack the monster","O3a","N3b","N4a"),
("Attempt to converse with the monster","O3b","N3b","N4b"),
("Avoid the monster","O3c","N3b","N4c"),
("You are a monster; you take the bones from the skeleton and add them to your own body and leave the gem(+1 Strength, – 1 intelligence )","O4a","N4a","N5a"),
("Your curiosity takes the best of you, you touch the gem(+1 summon)","O4b","N4a","N5b"),
("Go in deeper without looting","O4c","N4a","N5c"),
("You are a monster; you take the bones from the skeleton and add them to your own body and leave the gem (+1 Strength –1 intelligence) ","O4d","N4b","N5b"),
("Your curiosity takes the best of you, you touch the gem  ( +1 summon, +1 intelligence )","04e","N4b","N5b"),
("Go in deeper without looting  ","04f ","N4b","N5b"),
("You fight with your strength (1 strength needed) "," 06a ","N6a","N7a"),
("You send your skeleton ally to fight (1 summon needed) "," 06b ","N6a","N7b"),
("You fight ","06c ","N6a","N7c"),
("You add the bones to your body  (+2 strength, -1 intelligence)","O8a","N8a","N9a"),
("You touch the gem  (+2 summon + 1 intelligence )","O8b","N8a","N9b"),
("You touch one gem and add the bones from the other skeleton (+ 1 strength + 1 summon)","O8c","N8a","N9c"),
("Inspect their bodies ","O9a ","N9a","N10a"),
("Inspect their bodies   (–1 summon) ","O9b","N9b","N10b"),
("Inspect their bodies ","O9b ","N9c","N10b"),
("Use the unspoiled bones from the adventurers to strengthen your body (+ 3 strength)","O10a","N10a","N11a") ,
("Take the equipment of the humans before you (+ 2 strength)","O10b","N10a","N11a") ,
("You see they have useful equipment on them, you pick them up(+ 2 strength)","O10c","N10a","N11a"), 
("You realize you are smart enough to conjure the crystals out of nothing and can place them inside the adventurers to create skeleton allies(+ 3 intelligence + 2 summons)","O10d","N10b","N11a"),
("You try to fight the lich with your strength","O11a","N11a","N12a") ,
("You try to fight the lich with your skeletons","O11b","N11a","N12b"), 
("You care little for the human and charge (6 strength atleast)","O11c","N11a","N12c"),
("You command your skeletons to fight on your behalf (5 summons atleast)","O11d","N11a","N12d"),
("You try to converse with the adventurer (1 intelligence required)","O12a","N12a","N13a"),
("You try to overpower the adventurer (1 strength required)","O12b","N12a","N13b"),
("You use your skeletons to fight him (1 skeleton required)","O12c","N12a","N13b"),
("You try to converse with the adventurer (1 intelligence required)","O12p","N12b","N13a"),
("You try to overpower the adventurer (1 strength required)","O12e","N12b","N13b"),
("You use your skeletons to fight him (1 skeleton required)"," O12f","N12b","N13f"),
("You see your next set of bones to add to your body","O12d","N12c","N13d"),
("You try to converse with the adventurer (1 intelligence required)"," O12h","N12d","N13a"),
("You try to overpower the adventurer (1 strength required)","O12i ","N12d","N13b"),
("You use your skeletons to fight him (1 skeleton required)","O12z ","N12d","N13b"),
("You tell your skeletons to bring him outside (5 skeletons required)","O12k","N12d","N13d"),
("You use your intelligence to come up with a primitive form of psychokinesis to converse with the adventurer (3 intelligence required)","O12l ","N12d","N13e"),
("You touch the orb","O13a","N13a","N14a"),
("You crush the orb  ","O13b","N13b","N14b"),
("You touch the orb ","O13c ","N13e","N14a"),
("You touch the orb ","O13d ","N13f","N14a"),
("You cast the spell before you touch the orb ","O13e ","N13f","N14d"),
("Pray to luna dei ", "VO1a","VN1a","VN2a"), 

("Embrace the Void","VO1c","VN1a","VN2b"), 

("Face Judgment", "VO1b","VN1a","VN2c"), 

 

 

 

("Go deeper into the dungeon","VO2a","VN2a","VN3a"), 

("Go back to the surface","VO2b","VN2a","VN3b"), 

 

("Attack the monster","VO3a","VN3b","VN4a"), 

("Attempt to converse with the monster","VO3b","VN3b","VN4b"), 

("Avoid the monster","VO3c","VN3b","VN4c"), 

 

("You are a monster; you drink the monster's blood with your left fang (+1 strength)","VO4a","VN4a","VN5a"), 

("you drink the monster’s blood with your right fang (+1 intelligence )","VO4b","VN4a","VN5b"), 

("Go in deeper without looting","VO4c","VN4a","VN5c"), 

 

("You fight with your strength (1 strength needed) "," VO6a ","VN6a","VN7a"), 

("You use your magic to fight (1 intelligence needed) "," VO6b ","VN6a","VN7b"), 

("You fight ","VO6c ","VN6a","VN7c"), 

 

("You drink with your left fang x (+2 strengt)","VO8a","VN8a","VN9a"), 

("You drink with your right fang (+2 intelligence )","VO8b","VN8a","VN9b"), 

 

 

("Inspect their bodies ","VO9a ","VN9a","VN10a"), 

("Inspect their bodies ","VO9b ","VN9c","VN10b"), 

 

 

 

 

("You drink their blood with your left fang (+ 2 strength)","VO10a","VN10a","VN11a") , 

("You drink their blood with your right fang (+ 2 intelligence)","VO10b","VN10a","VN11a") , 

 

("You try to fight the lich with your strength","VO11a","VN11a","VN12a") , 

("You try to fight the lich with your magic","VO11b","VN11a","VN12b"),  

 

("You attack the adventurer (1 strength required)","VO12a","VN12a","VN13a"), 

("You try to heal the adventurer (1 intelligence required)","VO12b","VN12a","VN13b")


;

CREATE TABLE statistics
  (
     vigor        INT(11) NOT NULL DEFAULT 0,
     strength     INT(11) NOT NULL DEFAULT 0,
     summon       INT(11) NOT NULL DEFAULT 0,
     intelligence INT(11) NOT NULL DEFAULT 0
  );



