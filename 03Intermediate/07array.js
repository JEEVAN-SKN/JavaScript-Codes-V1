
//classic way to declare array 
var countries = ["India", "USA", "Japan", "Russia"];

// new popular way to declare array 
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam" );

console.log(states); //out:["Rajasthan", "Delhi", "Mumbai", "Assam" ]
console.log(states[2]); //out:Mumbai
console.log(countries[2]);//out:Japan
console.log(countries);//out:["India", "USA", "Japan", "Russia"]

console.log(states.length); //out:4
states[0] = "Punjab";
console.log(states); //out:[ 'Punjab', 'Delhi', 'Mumbai', 'Assam' ]
console.log(states[0]);//out:punjab

// Arrays can also diff datatypes 
var user = ["jeevan", "sknjeev@gmail.com", 3, 34, true];
console.log(user); // but diff datatypes not recommended 


 states.pop(); //removes last element
 console.log(states); //out:[ 'Punjab', 'Delhi', 'Mumbai' ]
 states.push("Tamilnadu"); //adds at lastindex
 console.log(states);//out:[ 'Punjab', 'Delhi', 'Mumbai', 'Tamilnadu' ]

 states.shift(); //removes first element and left shifts all
 console.log(states); //out:['Delhi', 'Mumbai', 'Tamilnadu' ]
 states.unshift("Karnataka");//adds as first element  //unshift always need a input
 console.log(states);  //out:[ 'Karnataka', 'Delhi', 'Mumbai', 'Tamilnadu' ]      // and right shifts all

 //get index of a element in an array
 console.log(states.indexOf("Delhi")); //out:1

 //gives -1 index for non-existenet element 
 console.log(states.indexOf("Kerala")); //out:-1

 //-1 index usecase :
    //when user needs to delete an element
    //use if case and if user types in a nonexistent element
    //then the index of it will be -1 
    //so if index is -1 then show error to user 

//converting a string into an array
console.log(Array.from("Jeevan"));


const arr = [
    {name:"sub",age:20,roll:42},
    {name:"cub",age:21,roll:43},
    {name:"mub",age:22,roll:44},
    {name:"tub",age:23,roll:45}
]
console.log(arr);
//the above is just a array where 0th index contains  {name:sub,age:20,roll:42},
//and 1st index contains {name:cub,age:21,roll:43}, and so on

function arrayOperation(operation,arr,obj){
    switch(operation){
        case 'push':
            arr.push(obj)
            break
        case 'pop':
            arr.pop()
            break
    }
}

arrayOperation('push',arr,{name:"shit",age:30,roll:50})
console.log(arr);
//out:
// [
//     { name: 'sub', age: 20, roll: 42 },
//     { name: 'cub', age: 21, roll: 43 },
//     { name: 'mub', age: 22, roll: 44 },
//     { name: 'tub', age: 23, roll: 45 },
//     { name: 'shit', age: 30, roll: 50 }
//   ]
arrayOperation('pop',arr) // it is not necessary to add all the arguments to fn like java

console.log(arr);
//out:
// [
//     { name: 'sub', age: 20, roll: 42 },
//     { name: 'cub', age: 21, roll: 43 },
//     { name: 'mub', age: 22, roll: 44 },
//     { name: 'tub', age: 23, roll: 45 },
//    
//   ]