const name = "Jeevan";
 // name = "jeeva";  -- error as u cannot change constant

const uid = "abc123";

var firstName = "Jeevan";
var lastName  = "S K N"
var email = "skn@jeev.com";
var country = "India";
var state = "Tamilnadu";
var password = "132453";
var confirmPassword = "132453";
var isLoggedInFromGoogle = false;
var isLoggedInFromFaceBook = false;

//  fullName = prompt("Enter your name");

// different ways to print variables concatenated with hard coded text
console.log("The User ID is:", uid);
console.log("The User Full Name is:" + firstName +' '+ lastName);
console.log("The User Email is:", email);


// template strings `  `
console.log(`  
    The User Id       : ${uid} //interpolation
    The User FullName : ${firstName +' '+ lastName}
    The User Email    " ${email}
`)
