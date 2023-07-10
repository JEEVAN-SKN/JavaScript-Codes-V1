// for loop 

for (let i=1; i<=10; i++){  //printing numbers 1-10
    console.log(i);
}

const myStates = [
    "Rajasthan",
    "Delhi",
    2023,
    "TamilNadu",
    "Kerala",
    "Assam",
    
]

for ( i=0; i<myStates.length; i++) {  //printing the etries of array
    console.log(myStates[i]);
}

// now in case we only need a particluar datatype data form these arrays 
// we can add if case combined with the power of 'contine' and 'break' controlling the loops control flow
console.log("MODIFIED LOOP STRUC BELOW");

console.log("ONLY STRINGS");
for ( i=0; i<myStates.length; i++) {  
    if (typeof myStates[i] !== "string") continue;  //when array element is not string ignores rest of code and goes 
    console.log(myStates[i]);                       // ont o next iteration (continue)
}


console.log("EVERYTHING except strings");
for ( i=0; i<myStates.length; i++) {  
    if (typeof myStates[i] == "string") continue;  //when array element is string ignores rest of code and goes 
    console.log(myStates[i]);                       // ont o next iteration (continue)
}

console.log("STOP when element not string ");
for ( i=0; i<myStates.length; i++) {  
    if (typeof myStates[i] !== "string") break;  //when array element is not string stops loop execution(break)
    console.log(myStates[i]);                       
}

     //remember let declaration of a variable only lives till its scope 
     //eg for the function scope under which it is declared 
     //so it can be redeclared outside the scope again with no errors
     //while not the same case for var type declaration 

// while loop

// while(i<myStates.length){
//     console.log(myStates[i])   //prints for infinity..cause i is always less than array length unless incremented
// }

while(i<myStates.length){
    console.log(myStates[i]);
    i++
}

//do while loop ( to execute a condition once  before the while loop starts off )

let c=20;

do{ 
    console.log(c);
    c++;
}while (c<10)  //for lopp doesnt run cos c is > 10 but prints atleast once due to do statement 

//upcoming for each loop