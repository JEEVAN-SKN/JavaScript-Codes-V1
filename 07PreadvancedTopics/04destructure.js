// destructuring
// rule both left and right side should be same 


const user = ["jeevan",3,"admin"];
var fname = user[0];
var num = user[1];
console.log(num);

// instead of using this syntax 
// we can use destructuring the data 

var [no1,no2,n] = user; // here we use same type (array in both left and right) 
//there shouldnt be an object in lhs and an array in rhs 
// allthe entries of array will be index wise stored to given array entries in  left 
// if u put in more entries in lhs than in rhs then it will be undefined 

console.log(n);

// destructuring in arrays 
// rule1 : both sides same type , rule2: same keyname : a objects have key and value pair  
                                    // and hence in lhs u must mentiom the exact key name 

const myUser = {
    name : "jeevan",
    courseCount : "3",
    role: "developer"
}

console.log(myUser.role);
// instead of this use destructuring 

const { name, courseCount, role} = myUser;
console.log(role);

// but of u type in different kay name in lhs it shows output as indefined