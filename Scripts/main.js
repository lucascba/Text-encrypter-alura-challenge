function encryptText(){
	const textToEncrypt = document.getElementById("Enc").value;
	let letter
	let finalResult = "";
	let string = textToEncrypt.length;
	for(let count = 0; count < string; count++) {
		letter = textToEncrypt.charAt(count);
		if (letter < 'a' || letter > 'z') {
			document.getElementById("error").textContent = "⚠️Uppercase and special characters are forbidden.⚠️";
			document.getElementById("error").style = "";
			document.getElementById("Enc").value = "";
			return;
		} else {
			switch(letter.toLowerCase()) {
			case 'a':
				finalResult = finalResult + "ai";
				break;
			case 'e':
				finalResult = finalResult + "enter";
				break;
			case 'i':
				finalResult = finalResult + "imes";
				break;
			case 'o':
				finalResult = finalResult + "ober";
				break;
			case 'u':
				finalResult = finalResult + "ufat";
				break;
			default:
				finalResult = finalResult + letter;
			}
		}
	}
	document.getElementById("Dec").value = finalResult;
	document.getElementById("Enc").value = "";
}
function decryptText() {
	let textToDecrypt = document.getElementById("Dec").value;
	let letter
	let finalResult = ""
	let string = textToDecrypt.length
	for(let count = 0; count < string; count++) {
		letter = textToDecrypt.charAt(count);
		finalResult = finalResult + letter;

		if (letter < 'a' || letter > 'z') {
			document.getElementById("error2").textContent = "⚠️Uppercase and special characters are forbidden.⚠️";
			document.getElementById("error2").style = "";
			document.getElementById("Dec").value = "";
			return;
		} else {
			switch(letter.toLowerCase()) {
				case 'a':
					count++;
					break;
				case 'e':
					count = count + 4;
					break;
				case 'i':
					count = count + 3;
					break;
				case 'o':
					count = count + 3;
					break;
				case 'u':
					count = count + 3;
					break;
			}
		}
	}
	document.getElementById("Enc").value = finalResult;
	document.getElementById("Dec").value = "";
}
function copyText(a) {
	const copyDecrypt = document.getElementById("Dec").value;
	const copyEncrypt = document.getElementById("Enc").value;
	const value = a
	switch (value) {
		case 1:
			navigator.clipboard.writeText(copyEncrypt).then(
			  () => {
			    /* clipboard successfully set */
			  },
			  () => {
			    /* clipboard write failed */
			  }
			);
			break;
		case 2:
			navigator.clipboard.writeText(copyDecrypt).then(
			  () => {
			    /* clipboard successfully set */
			  },
			  () => {
			    /* clipboard write failed */
			  }
			);
	}
}
function myFunction(value){
	switch (value) {
		case 1:
			document.getElementById("copy01").value = "Copied";
			break;
		case 2:
			document.getElementById("copy02").value = "Copied";
	}
}
function myFunction2(value){
	switch (value) {
		case 1:
			document.getElementById("copy01").value = "Copy Text";
			break;
		case 2:
			document.getElementById("copy02").value = "Copy Text";
	}
}
function errorOut() {
	document.getElementById("error").textContent = "";
	document.getElementById("error").style = "background: none; border: none;";
	document.getElementById("error2").textContent = "";
	document.getElementById("error2").style = "background: none; border: none;";
}