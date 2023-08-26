const one = ()=> {
    return("I am One");
}

// const two = ()=> {
//     setTimeout(()=>{return("I am two")},3000)  // in below calMe execution it shows undefined 
         
// }   

const two = async ()=> {    // it shows Promise {undefined } (not proper way of promises just a preview)
    setTimeout(()=>{return("I am two")},3000)
    
}

const three = ()=> { 
    return("I am Three");
}



const callMe = () => {  // instead of the individual function calling like in previous excercise we create a varibale 
                        // which calls these methods and holds these values and then console log them (similar to production level code ) 
     let valOne = one();
     console.log(valOne);

     let valTwo = two();  // this assignment thinks the value comes in an instant and thus it gets nothing in instant 
     console.log(valTwo); // hence shows as undefined in console logging 
                        // but in case of just adding async before method decl it shows "Promise {undefined}"

     let valThree = three();
     console.log(valThree);
}

callMe(); // we get output valOne, valTwo and undefined for valThree
        
        //incase of async before func declaration  we get output valOne, valTwo and Promise {undefined} for valThree

