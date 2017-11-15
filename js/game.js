// javascript library for simple game development
document.getElementById('option1').innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Start het spel';



var HasIcecream = false;
var HasBal = false;
var HasHoningpot = false;



var HasKey = false;
function Level1() {
	console.log("Level1()");

	document.getElementById('option1').innerHTML = 'Level 1: optie 1';
	document.getElementById('option2').innerHTML = 'Level 1: optie 2';
	document.getElementById('option3').innerHTML = 'Level 1: optie 3';

	document.getElementById('option1').style.display = "block";
	document.getElementById('option2').style.display = "block";
	document.getElementById('option3').style.display = "block";

	document.getElementById('level_title').innerHTML = 'Level 1';
	document.getElementById('level_image').src = 'img/level1.jpg';
	document.getElementById('key').style.display = "block";

	document.getElementById('option1').onclick = function() {
		if(HasKey){
			Level2();
		} else {
			alert('U dont haz key dumbass');
		}
	}

	document.getElementById('key').onclick = function(){
		document.getElementById('key').style.display = "none";
		HasKey = true;
	}










	
}

function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 2: optie 1';
	opt1.setAttribute("onClick", "javascript:Level3();");


	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/level2.jpg';



	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Level 2: optie 2';
	opt2.onclick = function(){
		if (HasIcecream) {
			Level4();		
		} else {
			Level1();
			alert('u dont haz icecream dumbass')
		}
	}


	var opt2 = document.getElementById('option3');
	opt2.innerHTML = 'Level 2: optie 3';
	opt2.onclick = function(){
		HasIcecream = true;
		if (HasIcecream) {
			Level4();		
		} else {
			Level1();
			alert('u dont haz icecream dumbass')
		}
	}
}


function Level3() {
	console.log("Level3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 3: optie 1';
	opt1.setAttribute("onClick", "javascript:Level1();");


	document.getElementById('level_title').innerHTML = 'Level 3';
	document.getElementById('level_image').src = 'img/level3.jpg';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Level 3: optie 2';
	opt2.onclick = function(){
		HasBal = true;
		if (HasBal) {
			Level4();		
		} else {
			alert('u dont haz bal dumbass')
		}
	}

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Level 3: optie 3';
	opt3.onclick = function(){
		if (HasBal) {
			Level4();		
		} else {
			Level2();
			alert('u dont haz bal dumbass')		
		}
	}
}


function Level4() {
	console.log("Level4()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 4: optie 1';
	opt1.setAttribute("onClick", "javascript:Level3();");

	document.getElementById('level_title').innerHTML = 'Level 4';
	document.getElementById('level_image').src = 'img/level4.jpg';

	var opt3 = document.getElementById('option2');
	opt3.innerHTML = 'Level 4: optie 2';
	opt3.onclick = function(){
		HasHoningpot = true;
		if (HasHoningpot) {
			Level4();		
		} else {
			Level2();
			alert('u dont haz honingpot dumbass')		
		}
	}
}

function Level5() {
	console.log("Level5()");



	document.getElementById('level_title').innerHTML = 'Level 5';
	document.getElementById('level_image').src = 'img/level5.jpg';
}

function Level6() {
	console.log("Level6()");



	document.getElementById('level_title').innerHTML = 'Level 6';
	document.getElementById('level_image').src = 'img/level6.jpg';
}


function Level7() {
	console.log("Level7()");



	document.getElementById('level_title').innerHTML = 'Level 7';
	document.getElementById('level_image').src = 'img/level7.jpg';
}


function Level8() {
	console.log("Level8()");



	document.getElementById('level_title').innerHTML = 'Level 8';
	document.getElementById('level_image').src = 'img/level8.jpg';
}



function Level9() {
	console.log("Level9()");



	document.getElementById('level_title').innerHTML = 'Level 9';
	document.getElementById('level_image').src = 'img/level9.jpg';
}



function Level10() {
	console.log("Level10()");



	document.getElementById('level_title').innerHTML = 'Level 10';
	document.getElementById('level_image').src = 'img/level10.jpg';
}

