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

for (i=0; i<myStates.length; i++) {  //printing the netries of array
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