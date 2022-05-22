function detectWord(str) {
	let x = "";
	for(let i =0; i < str.length; i++){
		if(str[i] === str[i].toLowerCase()){
			x += str[i];
		}
	}
	return x;	
};

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));


