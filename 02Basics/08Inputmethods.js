// in Js we can use prompt to get input from user in browser console 

// let num  = prompt("give ur input");
// console.log(num);  // but this wont work in node as it doesnt have this feature

//for getting input from user in terminal console we need to use modules

//Way : 1 -- using readline module and creating an interface which is already installed with node

const read = require("readline");
const input = read.createInterface({
    input:process.stdin, 
    output:process.stdout
})

input.question("enter ur name",(fname) => {console.log(fname);input.close()})


//Way:2 -- using prompt-sync after installing it in your pc

//To install in your pc (linux) in terminal -> npm install prompt-sync

// const prompt = require("prompt-sync")({signin:true})

// let variable = prompt("Enter ur name here: ")
// console.log(variable); 

