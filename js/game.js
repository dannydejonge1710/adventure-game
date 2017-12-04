// javascript library for simple game development
document.getElementById('option1').innerHTML = "Start";
document.getElementById('level_title').innerHTML = "Start het spel";
document.getElementById('verhaaltje').innerHTML = "In het spel Destiny vecht je tegen verschillende monsters. Het is steeds de bedoeling om het beste wapen uit te kiezen tegen dat monster. Wanneer je het wapen gekozen hebt, blijkt of je het monster hebt verslagen met dat wapen en ga je naar de volgende kamer. Heb je niet het goede wapen gekozen verlies je een leven en blijf je in dezelfde kamer met een ander monster. Je krijgt 2 levens om het spel uit te spelen en in sommige kamers zijn levens te vinden. Ben je al je levens kwijt is het game over.";

var HasKey = false;
function Level1() {

	//Destiny The Fallen Dreg

	console.log("Level1()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('optiondownload').style.display = "none";
	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('level_title').innerHTML = 'Chamber 1';
	document.getElementById('level_image').src = "img/level1.jpg";
	document.getElementById('key').src = "img/key.png";
	document.getElementById('verhaaltje').innerHTML = "Dregs usually carry Shock Daggers and Shock Pistols, occasionally using Shock Grenades, and rarely Shrapnel Launchers. They are undisciplined fighters, and will hiss and clatter, revealing their position. They seem to wear only light armor with little to no exo-atmospheric protection, and will melee at close ranges, though they aren't as strong as more elite Fallen variants.";

	document.getElementById('key').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey){
			Level2();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey){
			Leveldead();
		} else {
			alert('U dont haz Key dumbass');
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey){
			Leveldead();
		} else {
			alert('U dont haz Key dumbass');
		}
	}

	document.getElementById('key').onclick = function(){
	document.getElementById('key').style.display = "none";
	HasKey = true;
	}	
}

function Leveldead() {

	HasKey = false;

	console.log("Leveldead")

	document.getElementById('option1').innerHTML = 'Back To Start';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";

	document.getElementById('verhaaltje').innerHTML = "Nice try, you're dead now!";
	document.getElementById('level_title').innerHTML = "YOU'RE DEAD!";
	document.getElementById('level_image').src = 'img/leveldead.jpg';

	document.getElementById('option1').setAttribute("onClick", "javascript:Level1();");
}




var HasKey2 = false;
function Level2() {

	//Destiny The Fallen Shank

	console.log("Level2()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Shanks attack in small swarms and fire small plasma cannons in short bursts. For the most part, their attacks are relatively weak. They can also boost themselves up to avoid grenades or small arms fire, but this tactic isn't used often.";
	document.getElementById('level_title').innerHTML = 'Chamber 2';
	document.getElementById('level_image').src = 'img/level2.jpg';
	document.getElementById('key2').src = "img/key2.png";

	document.getElementById('key2').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey2){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key2').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey2){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key2').style.display = "none";
			HasKey = false;
		}
	}
	document.getElementById('option3').onclick = function() {
		if(HasKey2){
			Level3();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key2').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key2').onclick = function(){
	document.getElementById('key2').style.display = "none";
	HasKey2 = true;
	}
}

var HasKey3 = false;
function Level3() {

	//Destiny The Fallen Servitoren

	console.log("Level3()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "A Servitor is a spherical, mechanical Fallen class. Servitors can float in air and shoot purple Void blasts from their eye. A Servitor's weak point is the center of its eye.They provide the Fallen's life-sustaining ether and are treated as gods by the Fallen.";

	document.getElementById('level_title').innerHTML = 'Chamber 3';
	document.getElementById('level_image').src = 'img/level3.jpg';
	document.getElementById('key3').src = "img/key3.png";

	document.getElementById('key3').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey3){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key3').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey3){
			Level4();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key3').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey3){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key3').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key3').onclick = function(){
	document.getElementById('key3').style.display = "none";
	HasKey3 = true;
	}
}

var HasKey4 = false;
var HasFalseKey9 = false;
function Level4() {

	//Destiny The Hive Ogre

	console.log("Level4()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "When engaging Ogres, be mindful that they have powerful attacks, making almost any position unsafe regardless of cover. At range, they will use Void blasts from their foreheads that can easily disorient and take down players. However, this spot is also the main weak point on an Ogre, and shooting there will deal critical damage. Therefore, be sure to try and get an angle off to the side, away from the main line of fire of the Ogre's energy blast to get easy shots on its forehead without it being able to keep track of you. Close combat is ill-advised, as their powerful melee attacks will make short work of players, so always keep your distance.";

	document.getElementById('level_title').innerHTML = 'Chamber 4';
	document.getElementById('level_image').src = 'img/level4.jpg';
	document.getElementById('key4').src = "img/key4.png";
	document.getElementById('falsekey9').src = "img/falsekey9.png";

	document.getElementById('key4').style.display = "block";
	document.getElementById('falsekey9').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey4){
			Level5();
			document.getElementById('falsekey9').style.display = "none";
		} else if(HasFalseKey9){
			LevelTeleport();
			document.getElementById('key4').style.display = "none";
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key4').style.display = "none";
			document.getElementById('falsekey9').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey4){
			Leveldead();
			document.getElementById('falsekey9').style.display = "none";
		}else if(HasFalseKey9){
			LevelTeleport();
			document.getElementById('key4').style.display = "none";
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key4').style.display = "none";
			document.getElementById('falsekey9').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey4){
			Leveldead();
			document.getElementById('falsekey9').style.display = "none";
		}else if(HasFalseKey9){
			LevelTeleport();
			document.getElementById('key4').style.display = "none";
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key4').style.display = "none";
			document.getElementById('falsekey9').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key4').onclick = function(){
	document.getElementById('key4').style.display = "none";
	document.getElementById('falsekey9').style.display = "none";
	HasKey4 = true;
	}

	document.getElementById('falsekey9').onclick = function(){
	document.getElementById('falsekey9').style.display = "none";
	document.getElementById('key4').style.display = "none"
	HasFalseKey9 = true;
	}
}

var HasKey5 = false;

function Level5() {

	//The Hive Acolytes

	console.log("Level5()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Acolytes fight in small groups of two or three, often accompanied by a Knight and/or Wizard, and tend to prefer ranged attacks, but they can melee in close quarters if necessary. Acolytes will often take cover when they spot an enemy.";
	document.getElementById('level_title').innerHTML = 'Chamber 5';
	document.getElementById('level_image').src = 'img/level5.jpg';
	document.getElementById('key5').src = "img/key5.png";

	document.getElementById('key5').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey5){
			Level6();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key5').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey5){
			Leveldead();
		} else {
			Level6();
			alert('U dont haz Key dumbass');
			document.getElementById('key5').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey5){
			Leveldead();
		} else {
			Level6();
			alert('U dont haz Key dumbass');
			document.getElementById('key5').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key5').onclick = function(){
	document.getElementById('key5').style.display = "none";
	HasKey5 = true;
	}
}

var HasKey6 = false;

function Level6() {

	//The Vex Hobgoblin

	console.log("Level6()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Hobgoblins are a class of the Vex species. Hobgoblins are larger than their Goblin brethren and can be distinguished by their larger size, different head shape, and distinctive tails. They are designed to attack from a distance using their Line Rifles. Attacking a Hobgoblin will cause them to crouch and emit a solar-based shield that blocks all damage for a few seconds. This shield will cause minor damage if touched.";
	document.getElementById('level_title').innerHTML = 'Chamber 6';
	document.getElementById('level_image').src = 'img/level6.jpg';
	document.getElementById('key6').src = 'img/key6.png';

	document.getElementById('key6').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey6){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key6').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey6){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key6').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey6){
			Level7();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key6').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key6').onclick = function(){
	document.getElementById('key6').style.display = "none";
	HasKey6 = true;
	}
}

var HasKey7 = false;

function Level7() {

	//The Vex Harpies

	console.log("Level7()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Harpies are a type of Vex. Harpies are smaller, flying enemies that rapidly dart in and out of battle, occasionally firing from their filament-filled eyes.";

	document.getElementById('level_title').innerHTML = 'Chamber 7';
	document.getElementById('level_image').src = 'img/level7.jpg';
	document.getElementById('key7').src = "img/key7.png";

	document.getElementById('key7').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey7){
			Level8();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key7').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey7){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key7').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey7){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key7').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key7').onclick = function(){
	document.getElementById('key7').style.display = "none";
	HasKey7 = true;
	}
}

var HasKey8 = false;
var HasFalseKey10 = false;

function Level8() {

	//The Cabal Psion

	console.log("Level8()");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Psions are a class of the Cabal species. Psions are smaller than other Cabal, and use their mental powers to confront their enemies and pilot the massive vehicles they use. In combat, Psions utilize standard rifles, and are physically weaker than their Cabal brethren, but make up for it with a smaller frame, greater agility, and powerful shockwave attacks that can deal heavy damage.";

	document.getElementById('level_title').innerHTML = 'Chamber 8';
	document.getElementById('level_image').src = 'img/level8.jpg';
	document.getElementById('key8').src = "img/key8.png";
	document.getElementById('falsekey10').src = "img/falsekey10.png";

	document.getElementById('key8').style.display = "block";
	document.getElementById('falsekey10').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey8){
			Leveldead();
			document.getElementById('falsekey10').style.display = "none";
		} else if(HasFalseKey10){
			LevelTeleport2();
			document.getElementById('key8').style.display = "none";
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('falsekey10').style.display = "none";
			document.getElementById('key8').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey8){
			Levelwin();
			document.getElementById('falsekey10').style.display = "none";
		} else if(HasFalseKey10){
			LevelTeleport2();
			document.getElementById('key8').style.display = "none";
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('falsekey10').style.display = "none";
			document.getElementById('key8').style.display = "none";
			HasKey = false;
		}

	}

	document.getElementById('option3').onclick = function() {
		if(HasKey8){
			Leveldead();
			document.getElementById('falsekey10').style.display = "none";
		} else if(HasFalseKey10){
			LevelTeleport2();
			document.getElementById('key8').style.display = "none";
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('falsekey10').style.display = "none";
			document.getElementById('key8').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key8').onclick = function(){
	document.getElementById('key8').style.display = "none";
	document.getElementById('falsekey10').style.display = "none";
	HasKey8 = true;
	}

	document.getElementById('falsekey10').onclick = function(){
	document.getElementById('falsekey10').style.display = "none";
	document.getElementById('key8').style.display = "none";
	HasFalseKey10 = true;
	}
}

function Levelwin() {

	HasKey = false;

	//Je hebt gewonnen

	console.log("Levelwin")

	document.getElementById('option1').innerHTML = 'Back To Start';

	document.getElementById('optiondownload').style.display = "block";
	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";

	document.getElementById('verhaaltje').innerHTML = "Je hebt gewonnen nu. Klik op 'Back to start' om opnieuw te beginnen!";

	document.getElementById('level_title').innerHTML = 'YOU WIN';
	document.getElementById('level_image').src = 'img/levelwin.jpg';
	document.getElementById('key').style.display = "none";

	document.getElementById('option1').setAttribute("onClick", "javascript:Level1();");
}


var HasKey11 = false;
function LevelUnknown1() {

	// The Fallen Captain

	console.log("LevelUnknown1");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "The Captain is a class of Fallen. They are a known rank of Fallen, carrying themselves with an air of superiority and nobility. They have been shown to wield most Fallen weapons, and are almost always enshrouded within an absorption shield. They have the ability to teleport short distances.";

	document.getElementById('level_title').innerHTML = 'Unknown Chamber 1';
	document.getElementById('level_image').src = 'img/level11.jpg';
	document.getElementById('key11').src = "img/key11.png";

	document.getElementById('key11').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey11){
			LevelUnknown2();
		} else {
			LevelUnknown1();
			alert('U dont haz Key dumbass');
			document.getElementById('key11').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey11){
			Leveldead();
		} else {
			LevelUnknown1();
			alert('U dont haz Key dumbass');
			document.getElementById('key11').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey11){
			Leveldead();
		} else {
			LevelUnknown1();
			alert('U dont haz Key dumbass');
			document.getElementById('key11').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key11').onclick = function(){
	document.getElementById('key11').style.display = "none";
	HasKey11 = true;
	}
}

var HasKey12 = false;

function LevelUnknown2() {

	//The Fallen Skiff

	console.log("LevelUnknown2");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Slipping out of stealth only to offload a crew of Fallen, the Skiff is rarely seen. On the other hand, its rumbling, booming arrival is difficult to miss - as are the weapons it uses to support its troop deployments.";

	document.getElementById('level_title').innerHTML = 'Unknown Chamber 2';
	document.getElementById('level_image').src = 'img/level12.jpg';
	document.getElementById('key12').src = "img/key12.png";

	document.getElementById('key12').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey12){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key12').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey12){
			LevelUnknown3();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key12').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey12){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key12').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key12').onclick = function(){
	document.getElementById('key12').style.display = "none";
	HasKey12 = true;
	}
}

var HasKey13 = false;

function LevelUnknown3() {

	//The Hive Thrall

	console.log("LevelUnknown3");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Thrall are the smallest, weakest and fastest Hive enemies. Their main purpose is to overwhelm their enemies with sheer volume and numbers, although it doesn't take that much effort to kill one. Feral and fearless, Thralls are a plague upon the battlefield. Their swarming, twisted frames are driven by unfettered rage, and of all the creatures of the Hive, they are the fastest.";

	document.getElementById('level_title').innerHTML = 'Unknown Chamber 3';
	document.getElementById('level_image').src = 'img/level13.jpg';
	document.getElementById('key13').src = "img/key13.png";

	document.getElementById('key13').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey13){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key13').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey13){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key13').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey13){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key13').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key13').onclick = function(){
	document.getElementById('key13').style.display = "none";
	HasKey13 = true;
	}
}

var HasKey14 = false;

function LevelUnknown4() {

	// The Hive Tomb Ship

	console.log("LevelUnknown4");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "A Tombship is a Hive dropship. They possess a form of a teleportation, warping in and out of combat zones with green wormholes. The Tombships also have defensive capabilities, as they are able to launch purple explosive blasts, known as Axion Darts, at enemy targets.";

	document.getElementById('level_title').innerHTML = 'Unknown Chamber 1';
	document.getElementById('level_image').src = 'img/level14.jpg';
	document.getElementById('key14').src = "img/key14.png";

	document.getElementById('key14').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey14){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key14').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey14){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key14').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey14){
			LevelUnknown5();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key14').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key14').onclick = function(){
	document.getElementById('key14').style.display = "none";
	HasKey14 = true;
	}
}

var HasKey15 = false;

function LevelUnknown5() {

	// The Vex Hydra

	console.log("LevelUnknown5");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Hydras are segmented machines that float through the air to attack; each segment bearing its own turret, these robotic centipedes fire these turrets as they wriggle through the air. Hydras also utilize unidirectional defensive circular shields and are equipped with a powerful weapon called the Aeon Maul. In addition to being formidable combatants, Hydras serve as major processing nodes for the Vex network.";

	document.getElementById('level_title').innerHTML = 'Unknown Chamber 2';
	document.getElementById('level_image').src = 'img/level15.jpg';
	document.getElementById('key15').src = "img/key15.png";

	document.getElementById('key15').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey15){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key15').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey15){
			LevelUnknown6();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key15').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey15){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key15').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key15').onclick = function(){
	document.getElementById('key15').style.display = "none";
	HasKey15 = true;
	}
}

var HasKey16 = false;

function LevelUnknown6() {

	//The Cabal Colossus

	console.log("LevelUnknown6");

	document.getElementById('option1').innerHTML = 'Shotgun';
	document.getElementById('option2').innerHTML = 'Zwaard';
	document.getElementById('option3').innerHTML = 'Laser';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('verhaaltje').innerHTML = "Massive, even for Cabal standards, they lead through their own relentless demeanor, wielding devastating Gatling-style Heavy Slug Throwers and Cabal Slug Launchers.";

	document.getElementById('level_title').innerHTML = 'Unknown Chamber 3';
	document.getElementById('level_image').src = 'img/level16.jpg';
	document.getElementById('key16').src = "img/key16.png";

	document.getElementById('key16').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey16){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key16').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option2').onclick = function() {
		if(HasKey16){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key16').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('option3').onclick = function() {
		if(HasKey16){
			Leveldead();
		} else {
			Level1();
			alert('U dont haz Key dumbass');
			document.getElementById('key16').style.display = "none";
			HasKey = false;
		}
	}

	document.getElementById('key16').onclick = function(){
	document.getElementById('key16').style.display = "none";
	HasKey16 = true;
	}
}

function LevelTeleport() {

	//You've been teleported to an unknown level.

	HasKey = false;

	console.log("LevelTeleport")

	document.getElementById('option1').innerHTML = 'Go!';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";

	document.getElementById('verhaaltje').innerHTML = "You've been teleported to an unknown chamber!";
	document.getElementById('level_title').innerHTML = "YOU'VE BEEN TELEPORTED!";
	document.getElementById('level_image').src = 'img/levelteleport.jpg';

	document.getElementById('option1').setAttribute("onClick", "javascript:LevelUnknown1();");
}

function LevelTeleport2() {

	//You've been teleported to an unknown level.

	HasKey = false;

	console.log("LevelTeleport")

	document.getElementById('option1').innerHTML = 'Go!';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";

	document.getElementById('verhaaltje').innerHTML = "You've been teleported to an unknown chamber!";
	document.getElementById('level_title').innerHTML = "YOU'VE BEEN TELEPORTED!";
	document.getElementById('level_image').src = 'img/levelteleport.jpg';

	document.getElementById('option1').setAttribute("onClick", "javascript:LevelUnknown4();");
}


