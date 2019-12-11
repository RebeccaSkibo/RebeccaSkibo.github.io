//		Date: 12/09/2019
//		Name: Rebecca A Skibo
//		Assign: Final
//		file: swap.js

console.log("enter javascript page");

showImg();

/* randomNumber = Math.floor(0  3*Math.random())
	pict1, pict2, */
function showImg() {
	var	randomNum = Math.floor(0 + 3*Math.random());
	if (randomNum ==1) {
		//Displays the first add
		document.getElementById("pic").src="images/caboose.jpg"; //Gets the caboose picture
	}
	else if (randomNum ==2) {
		//Displays the second add 
		document.getElementById("pic").src="images/model.jpg"; //Gets the model picture
		
	}
	else {
		//Displays the third add
		document.getElementById("pic").src ="images/pumpcar.jpg"; //Gets the pump car  picture
	}
	
} 

