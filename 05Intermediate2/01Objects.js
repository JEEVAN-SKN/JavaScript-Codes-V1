//new keyword and proto 


// // type this in browser console
//     var lco = {
//         fname : "jeevan"
//     }

//     console.log(lco); // shows object content but addition to that it also 
        // shows __proto__ object which contains a lot of details including constructors 
                    //every property's value has f as prefix referring functional object .

// scenario : in a webiste every sngle time a user signs up we need to create an object containing his personal details 
            // but unique for each user (i.e) we need to create a prototype
    // creating such protoypes name always starts with capital letter(recommended_not_compulsary)

var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount; // here we use this to define object (it is another way to define objects)
    this.getCourseCount = function(){ // it is the functional way to define objects(recommended)
        console.log(`Course count is : ${this.courseCount}`);
    }                 
}

// now this is similar to classes in other lang
    // now we have created an protoype foe each user signup
    
var jeevan = User("jeevan",2);
console.log(jeevan);  // here it gives undefined bcs our prototype is nothing but a function 
                    // so we've learnt under regular function call this keyword returns window object
                    // here in node as it is {} we get undefined 

    // but inorder to  functionally define an object we need to use "new" keyword which creates 
            // unique object instance for each call


// new keyword features: 
        // responsible for invoking the constructor and creating an unique instance of the object everytime
        // takes care of the changing the regular function (line no33) into an instance creating contructor call
        // Changes the this keyword form global (window) object to scope specific contents


var muni= new User("muni",3);
console.log(muni);  // gives object details 
muni.getCourseCount();
console.log(muni.firstName);


var subbu = new User("subramanian",4); // creates a new unique instance of the same object 
console.log(subbu); 
subbu.getCourseCount();
console.log(subbu.firstName);  // but here we canalso direclty create a function to print firstname instead of console.log
    // but accessing the source code for every minute functionality addition 
    // is not advisable (react practices) so we can use proto of the object here 

//proto can be used for accessing to adding(injecting) more properties/functions, getters, setters to objects 
// and whenever new instances are created for a existing object all these proto based declarations are also 
    // implemented to the new instance of the object

User.prototype.getFirstName = function(){
    console.log(`Your FirstName is: ${this.firstName}`);
}

muni.getFirstName();
subbu.getFirstName();

// hence we can access,overwrite all the properties and funcitos mentioned in the 
// proto object of an object in browser console and also add new funcitons/properties 


