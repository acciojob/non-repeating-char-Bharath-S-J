function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={}
	let res=0
	for(let i=0;i<str.length;i++){
		let c=str[i]
		obj[c]=(obj[c] || 0)+1;
	}
	for(let i=0;i<str.length;i++){
		let c=str[i]
		if(obj[c]==1) return c
	}
	return null
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
