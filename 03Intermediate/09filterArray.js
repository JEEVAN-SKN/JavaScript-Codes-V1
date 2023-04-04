var testArray = [2, 4, 6, 3, 1, 5, 9, 8];
// fill method 
console.log(testArray.fill("h",1,5));

//fills in positions from 1 and before 5 in array
    //with letter h
//(a,b,c)   - a is what shuld be filled 
        //  - b is where to start(inclusive)
        //  - c is where to end(exclusive - ends at c-1 position)



// filter method 
const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((num) => num !== 55 && num !== 23 );
// filters array and gets everything except 55 and 23 
const res = myNumber.filter((num) => num < 55 );
console.log(result);
console.log(res);

// Slice 

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(2));
// splice with single argument then it, removes till that 
// and returns remaining

console.log(users.slice(2,5));
// 2 arguments gives part of array mentioned
// start 2(inclusive), end 5(exclusive)

//Splice

users.splice(1,2,5,8);
// (a,b,c) - a : start position
        // - b :count of elemnts to deleted 
        // - c,d,.. : elemnts to be added there 
console.log(users);







 




