var email = true;
var facebook = false;
var google = true;



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

if(email && facebook && google){ //and operator
    console.log("all accounts linked");
}else{
    if(!email){
        console.log("Email not linked");
    }
    if(!facebook){
        console.log("Facebook not linked");
    }
    if(!google){
        console.log("Google not linked");
    }

}

//other way by accessing objects

var accounts = {email,facebook,google}

if(Object.values(accounts).forEach( acc =>    //Object.values()
    acc)){ //checks whether all elements of object are true
    console.log("all accounts linked");
}else{
    for (const [account,linked] in Object.entries(accounts)){ 
        //saves all accounts into account and values to linked
        //if any of the linked value is false 
        // if executes
        if(!linked){
            console.log(`${account} is not linked`);
        }
    }
}








