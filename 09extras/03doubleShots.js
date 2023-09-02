const google = "google";
const fb = null;

if(google){  // here var google is not boolean but as it has some content it is truthy value hence the conditon executes 
    console.log("Hi");
}

if(fb){ // here as fb is not boolean it is not false but as it contains null values which is falsy value the condition diesnt execute
    console.log("Hello");
}

// but in executing these conditional with boolean true and false values rather than truthy and falsy values is more 
// recommended in production codebase 

//we generally use reverse boolena approach liek below 

if(!fb) {
    console.log("Hola"); //it executes as reverse boolean of fb(null-false) is true
}

// but instead to boolean-fy these truthy and falsy values we use double shots(!!)

if(!!fb){
    console.log("Hola");
}
