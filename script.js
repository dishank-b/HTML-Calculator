input = "";
var result;


function equalTo(){
	input = document.getElementById("display").innerHTML;
	document.getElementById("display").style.background.color = "yellow";

	if (input === "") {
		document.getElementById("display").innerHTML = 
		"Please write a Expression";
		input = "";
	}
	
	else if (input.indexOf('--') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('++') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('//') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('**') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('+-') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('+*') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('+/') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('-*') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('-/') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else if (input.indexOf('-+') !== -1) {
		document.getElementById("display").innerHTML = "Syntax Error";
		console.log("Syntax Error");
		input = "";
	}

	else {
		result = eval(input);
		document.getElementById("display").innerHTML = result ;
		input = result.toString();
		console.log(result);

	}
}
 
function add(key){
	if (key == 'pi') {
		input = input  + Math.PI.toString();
		document.getElementById("display").innerHTML = input;
		console.log(input);

	}

	else{
		input = input + key;
		document.getElementById("display").innerHTML = input;
		console.log(input);
	}

}

function clean () {
	document.getElementById("display").innerHTML = "";
	input = "";
}
