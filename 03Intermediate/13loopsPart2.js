//forEach loop 
        //not officialy considered as a loop but as a method of an array 

const myStates = [
    "Rajasthan",
    "Delhi",
    2023,
    "TamilNadu",
    "Kerala",
    "Assam",
    
]

// tricky question in js interviews 
    var i=0;
    for (;;){        //eventhough no declaration,checkingor increment in for loop decalaration it stll runs perfectly 
     if(i>3) break;  //gives output as 0,1,2,3 //the ideas is that if the var i is declared and it incrementor which takes
     console.log(i); // forward the loop is existent in the loop body it is enough for the loop to run
     i++;            //not advised in production but may be asked for interview purposes
    }


//forEach method 

myStates.forEach((s)=>console.log(s)) //prints all the values in array
// so whenever array are manipulated instead of declaring, incrementing,seting limits 
//we can direclty use forEach method 