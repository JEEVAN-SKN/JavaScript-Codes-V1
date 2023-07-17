// there are several ways to declare variable in js such as var , let , const 

// we've seen in several areas instead of showing errors js just shows undefined this is due to var 
// cos at first js was fdeveloped for web(frontend ) were errors for small mistaked is not suitable 
// hence it shows undefined and only shows error when it is critical

// but later js when used in backend , every error is important hence "let" was introduced 

// also in other lang {} is considered as scope 
// whereas in js a function is considered as scope 

console.log(name); // eventhough we used it before decalration
        // it shos undefined instead of error 

var name = " jeevan"; // we use var here

// but in case of let 

// console.log(fname); // it brings in error when using "let"

// let fname = "subbu";

// same way js consider only function as scope 
// and when we declare a var inside a if scope(not realy scope in js) 
// it is also accessibel outside if scope 

if(true) {
    var user = "Muni";
}
console.log(user); // it gives output due to the scope diff in js 
                // js doesnt consider if {} as a scope as it is not a func 

// solution : is to use "let" declaraion 

// if(true) {
//     let player = "arun";
// }console.log(player); // error due to "let" declaration 


// thereby an user can use var decl to traditionally use js in fronted with js scope nature way
// and if he wants to use it in backend , he can use let declaration to avoid errors

