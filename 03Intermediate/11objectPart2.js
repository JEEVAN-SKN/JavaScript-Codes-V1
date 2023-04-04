var courseList = true;

var user = {
    firstName : "Jeevan",
    lastName : "S K N",
    role : "user",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        //we need access to courseList of user obejct
        //not courseList variable so fro current context use 'this'
        this.courseList.push(courseName);
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

console.log(user.info());


