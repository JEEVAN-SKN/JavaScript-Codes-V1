var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;
const email = 'global@email'

if(email === 'global@email'){
    isEmailVerified=true    //if present out:if
                            //else       out:else
}

if(isLoggedIn && isEmailVerified && cardInfo){  // and operator 
    console.log({
        status:"success",
        authorization:true,
    });
} else {
    console.log({
        status:"error",        
        authorization:false,
    });
}

