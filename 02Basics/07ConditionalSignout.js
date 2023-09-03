var authenticated = true;

if (authenticated) {
    console.log("Show signout button")
} else {
    console.log("Show login option");
}

//alternative single line code below 

authenticated ? console.log("Signout Button") : console.log("Login");

var auth = {
    status:false, //out:{ status: false, token: '1293043', type: 'user', name: 'none' }
                //if true out:{ status: true, token: '1293043', type: 'user', name: 'subramanian' }
    token:"1293043",
    type:"user"
}

auth.status?auth.name="subramanian":auth.name ="none"

console.log(auth);