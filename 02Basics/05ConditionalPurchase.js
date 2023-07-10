var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

if(isLoggedIn && isEmailVerified && cardInfo){  // and operator 
    console.log("Allow user to make a purchase");
} else {
    console.log("You are Not Allowed to do that");
}