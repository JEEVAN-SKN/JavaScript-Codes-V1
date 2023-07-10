var email = true;
var facebook = true;
var google = false;

if(email) {
    console.log("Login Success");
}
if(facebook) {
    console.log("Facebook Signed In");
}
if(google) {
    console.log("Google Signed In");
}

if(email || facebook || google) { // or operator 
    console.log("Login Success");
}










