var courseList = 'hi_everyone';

var user = {
    firstName : "Jeevan",
    lastName : "S K N",
    role : "user",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        //we need access to courseList array of user object
        //not courseList variable from globalc context so from current context use 'this'
        this.courseList.push(courseName);
        //we use this because there is another courselist out of object user 
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function () {
        return `The firstName is ${this.firstName} 
The lastName is ${this.lastName}
The role is ${this.role}
The loginCount is ${this.loginCount}
The status of FacebookSign in is ${this.facebookSignedIn}
The courselist is ${this.courseList} `
    }
}; 

console.log(user.firstName);
console.log(user.getCourseCount());
// we need to add () to getCourseCount as it is a method 
// value is 0 as no course is added

// adding a course to user 
user.buyCourse("ReactJSCourse");
user.buyCourse("AngularJSCourse");
console.log(user.getCourseCount());
// values changes to 2 as two course is added  
console.log(user.courseList)

console.log(user.info());
console.log(user.getCourseCount());
console.log(user.buyCourse()); //prints undefined as no return statement in func
                            // just adds a undefined entry in courseList array

console.log(user.buyCourse("MernCourse")); //prints undefined as no return statement in func
                        // just adds a MernCourse entry in courseList array 
console.log(user.courseList)



var setofUsers = [{
    id:100,
    firstName : "Jeevan",
    lastName : "S K N",
    role : "user",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (...courseName) { //for giving set of inputs
        this.courseList.push(...courseName); //pushing set of inputs
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function () {
        return `The firstName is ${this.firstName} 
                The lastName is ${this.lastName}
                The role is ${this.role}
                The loginCount is ${this.loginCount}
                The status of FacebookSign in is ${this.facebookSignedIn}
                The courselist is ${this.courseList} `
    }
},
{
    id:101,
    firstName : "Jeevigaa",
    lastName : "S K N",
    role : "user",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (...courseName) {
        this.courseList.push(...courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function () {
        return `The firstName is ${this.firstName} 
                The lastName is ${this.lastName}
                The role is ${this.role}
                The loginCount is ${this.loginCount}
                The status of FacebookSign in is ${this.facebookSignedIn}
                The courselist is ${this.courseList} `
    }
},
{
    id:102,
    firstName : "Niggarun",
    lastName : "S K N",
    role : "user",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (...courseName) {
        this.courseList.push(...courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function () {
        return `The firstName is ${this.firstName} 
                The lastName is ${this.lastName}
                The role is ${this.role}
                The loginCount is ${this.loginCount}
                The status of FacebookSign in is ${this.facebookSignedIn}
                The courselist is ${this.courseList} `
    }
}]

setofUsers.map((key)=>{
    if(key.id === 100){ //accessing each element thru id
        key.buyCourse("python","java","angular","blove")
    }
    if(key.id === 101){
        key.buyCourse("dsa","bzzs","NA","EA")
    }
    if(key.id === 102){
        key.buyCourse("priCum","Defeated","MTS","MT")
    }
 
})

setofUsers.map((key)=>{
    console.log(key);
})