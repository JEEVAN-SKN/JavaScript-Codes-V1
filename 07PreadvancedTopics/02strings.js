// latest versions js modifications 

// types of defining string 
var h = "hitesh"; //recommended
var j = 'jeevan'; // also acceptable 

// but inother langs '' is fo esingle character and "" is for multiple
// so best recommended is to use ""

// bit inorder to insert ' or " inside a string we need to use \ before it
 var hello = 'he\'s' // or "he's" or 'he"s' or "he\"s"

 console.log(hello);

 // instead use backticks

 var buddy = `he's such a "nice" guy`

console.log(buddy);


//template strings  // interpolation 

var fullName = `${buddy} and a good father`;
console.log(fullName);

// methods to use in variables 
 
console.log(fullName.charAt(0)); // gives character at given index by treating string as array
console.log(fullName.endsWith("?"));  // gicen true or false by checking last character with given input
console.log(fullName.includes("good"));  // gives true or false by checking whether string contains given substring 
console.log(fullName.toUpperCase()); // turns into uppercase
// lot of other methods refer mdndocs

