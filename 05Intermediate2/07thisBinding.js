//when we code these in browser and console.log it we can get proto for whole object 
// but also get separate proto for methods defined in objects 

// Note: in JS everything is kind of taken as an object

// till now we've seen array has an proto eth some specific methods
// all objects have proto with specific methods 
// and same goes to methods specified as value in objects 


const jeevan = {
    firstName : "Jeevan",
    lastname : "S K N",
    role : "learner",
    courseCount : 3,
    getInfo: function () {
        console.log(`
        FirstName is ${this.firstName}
        LastName is ${this.lastName}
        Role is ${this.role}
        No. of courses: ${this.courseCount} courses
        `);
    }
};

const dj = {   // is almost same as obj jeevan except method getInfo()
    firstName : "Rock",
    lastName : "DJ",
    role: "Sub-Admin",
    courseCount : 4
};

jeevan.getInfo(); 
// dj.getInfo(); // shows error as it doesnt has getInfo() method

// here in getInfo() method we use this keyword which under given scope point to the parent object 
// we just need to change this parent obj of the getInfo() cos all other props are same btw dj and jeevan
// hence we use bind method present in the proto of methods within objects

jeevan.getInfo.bind(dj); //referencing 
 jeevan.getInfo.bind(dj)();  //running directly 
// or 
var djInfo = jeevan.getInfo.bind(dj); //refrencing 
djInfo();

// in bind we can refer and then execute (or) we need to add extra bracket for execution

// call methid direclty executes bind fucntionality

jeevan.getInfo.call(dj);



