function encryptText(){
	const textToEncrypt = document.getElementById("Enc").value;
	let letter
	let finalResult = "";
	let string = textToEncrypt.length;
	for(let count = 0; count < string; count++) {
		letter = textToEncrypt.charAt(count);
		
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
		finalResult = finalResult + letter

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
	document.getElementById("Enc").value = finalResult;
	document.getElementById("Dec").value = "";
}
function copyText(a) {
	const copyDecrypt = document.getElementById("Dec").value;
	const copyEncrypt = document.getElementById("Enc").value;
	const value = a
	switch (value) {
		case 1:
			navigator.clipboard.writeText(copyEncrypt);
			break;
		case 2:
			navigator.clipboard.writeText(copyDecrypt);
	}
}