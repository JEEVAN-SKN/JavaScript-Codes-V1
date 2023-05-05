var testArray = [2, 4, 6, 3, 1, 5, 9, 8];
// fill method 
console.log(testArray.fill("h"));
        // fills(reolaces all with h)
testArray = [2, 4, 6, 3, 1, 5, 9, 8];
console.log(testArray.fill("h",3));
        //fills(replaces) with h from index_3(inclusive) till end

testArray = [2, 4, 6, 3, 1, 5, 9, 8];
console.log(testArray.fill("h",1,5));
        //fills(replaces) in positions from index 1 and before
        //   index 5 in array with letter h
//(a,b,c)   - a is what shuld be filled 
        //  - b is where to start(inclusive)
        //  - c is where to end(exclusive - ends at c-1 position)



// filter method 
const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];
        //can be used when we want to remove something from array
const result = myNumber.filter((num) => num !== 55 && num !== 23 );
//filters and gives results that satisfy the callback func condition
// filters array and gets everything except 55 and 23 
const res = myNumber.filter((num) => num < 55 );
console.log(result);
console.log(res);

// Slice 

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(2));
// used  with single argument then it, slices from that index(inclusive) 
// till end and outputs it 

console.log(users.slice(2,5));
// 2 arguments gives part of array mentioned
// start 2(inclusive), end 5(exclusive)

//Splice


users.splice(1,2,5,8);
console.log(users);
//starts form index 1 and deletes 2 elements as mentioned in secind argument(count)
// then replaces them with consecutively given arguments 

users.splice(1,2,5);
console.log(users);
//if arguments given to replace is less than the count deleted 
//then ignores that index and left shifs all other 

// (a,b,c) - a : start position
        // - b :count of elemnts to deleted 
        // - c,d,.. : elemnts to be added there 








 




