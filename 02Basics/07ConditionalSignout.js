var authenticated = true;

if (authenticated) {
    console.log("Show signout button")
} else {
    console.log("Show login option");
}

//alternative single line code below 

authenticated ? console.log("Signout Button") : console.log("Login");