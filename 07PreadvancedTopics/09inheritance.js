// inhertance - a child class can inherit some or all of the parent class features

class Student {   //norma;p class decl (parent clas here)
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return `Student Name is ${this.name}
        Student Age is ${this.age}`
    }
    courseList = []
    enrollCourse(course){
        this.courseList.push(course);
    }
    getCourseList(){
        return this.courseList;
    }

    copy(){
        console.log("Hi Hellpo there")
    }

    static logInfo(){   // static func cannot be inherited
        return `Hi Hello Vanakkam`
    }
}


class Apprentice extends Student { //extends eyword to inherit parent class
        constructor(name,age){ 
            super(name,age)   //super keyword to give current constructor arguments to inherit the parent constructor features
        }
        getApprenticeInfo(){
            return "I am a apprentice"
        }

        copy(){   // function with same name as in parent class but diff use
            console.log("Bye see u later ");
        }
}

const ashok = new Apprentice("ashok",28);

console.log(ashok.getApprenticeInfo()); //local function 

ashok.enrollCourse("Java");
ashok.enrollCourse("JavaScript");
ashok.enrollCourse("C");
ashok.enrollCourse("C++"); // enrolled thru inherited fucntion 

console.log(ashok.getCourseList()); // courses listed 
console.log(ashok.getInfo());
// above gives crct output as the methods are inherited from parents
// but super key used to make constructor function of parent execute for 
// child object arguments ..


// console.log(ashok.logInfo()); 
        // gives error cause it is a static fucntion declared in parent function
        // static function cannot be inherited 

ashok.copy(); // prints copy function of child class 
// When there are function with same name in both parent and child 
// js intelligently chooses child fucntion and executes it when invoked 