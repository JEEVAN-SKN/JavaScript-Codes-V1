//forEach is a method whereas for of and for in are official loops


// for of loop 
    // used for arrays 

    const names = ["Youtube","Instagram","Facebook","Twitter","Discord"];

    for(const n of names){ //like py
        console.log(n);  //prints all entries of array
    }

// for in loop
    // used for objects

    const symbols ={
        yt:"Youtube",
        it:"Instagram",
        fb:"Facebook",
        tw:"Twitter",
        ds:"Discord"
    };

    for (const n in symbols){
        console.log(n); // prints only keys of objects values eg:yt
        console.log(symbols[n]); // prints only values of objects keys eg:Youtube
        console.log(`The Key is ${n} and the Value is ${symbols[n]} `); //can also be written like this 
                        //will individually u print for eack key value pair
        //if all three ways specified all 3 is done for each key value pait then to the next
        

    }