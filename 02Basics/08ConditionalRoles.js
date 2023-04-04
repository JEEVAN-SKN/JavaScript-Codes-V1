var user = "testprep";

switch(user) {
    case "admin":
        console.log("U get full access");
        break;
    // case "admin":
    //     return console.log("U get full access");
        
    case "subadmin":
        console.log("acess to create/del courses");
        break;

    case "testprep":
        console.log("access to create/del tests");
        break;

    case "user ":
        console.log("access to content");
        break; 

    default :
        console.log("Trial User");
        
}