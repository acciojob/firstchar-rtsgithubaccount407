function firstChar(text) {
  // your code here
	for(let i=0; i<text.length; i++){
		if(text[i] !== ' ') // char blank nhi h mean kuch na kuch value h 
		{
			return text[i];
		}
		return ''
	}
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
