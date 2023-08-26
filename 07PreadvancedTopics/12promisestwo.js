const one = ()=> {
    return("I am One");
}
  
//promise is a event that can have 2 states fulfilled or not (if not fulfilled it will report the it didnt fulfill)
// can be created just like creating any other array or object 

const two = async ()=> {   
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("I am two");  // here we cannot type in (return) as we have already used it on promise so we use resolve 
        }, 3000);
    } )
    
}

const three = ()=> { 
    return("I am Three");
}

const callMe = async() => {   // using "async" we mention that this method is gonna be asyncronous 
                              // but to js engine wait for a specifc method to complete we need to use await
    let valOne = one();
    console.log(valOne);

    // let valTwo = two();   //without await keyword outputs (Promise {<pending>})
    // console.log(valTwo);


    let valTwo = await two();  // as i put await it waits till this method completes execution
    console.log(valTwo);       // meanwhile no other task was done 

    let valThree = three();
    console.log(valThree);
}

callMe();

// so therey using promises we made the event loop to wait/halt until the second method is executed 

// if we replace resolve with reject in abive code we will get a error 
// we wil discuss about reject in detail later on 