// Define a function that can answer role of a user 
// eg: admin, subadmin, testprep, user, other 

// Input : getUserRole(name, role)

// function getUserRole(name, role) { -- normal function decl

// var  getUserRole = function (name,role){ --function in a varible
 
/// arrow functions 
var getUserRole = (name,role) => {
  
    switch (role) {
        case "admin":
            return `${name} i admin with all acces`;
            break; //not necessary
        
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        
        case "testprep":
            return `${name} testprep with access to create and delete tests`;
            break;
            
        case "user":
            return `${name} is user with access to the content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }

}



console.log(getUserRole("Jeevan","user")); // this works but below doesnt work

getUserRole("Jeevan","user"); //updates values in db
console.log(getUserRole); // doesnt print value, only shows function info 

var getRole = getUserRole("Muni", "other");
console.log(getRole);