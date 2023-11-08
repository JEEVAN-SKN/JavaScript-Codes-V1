let array = [1,2,3,4,5]
let assignarray = array
assignarray[1] = "hello"
console.log(array,assignarray); //output: [ 1, 'hello', 3, 4, 5 ] [ 1, 'hello', 3, 4, 5 ]
    //when we changed the assignarray , it also changed the original array
        //because when we assign an array into another array , the new array just points to the memory location of the contetns of the original array
        //thats y  when we changed the new array it also affect the original array bcs both of them point at the same location

// to avoid this we can use slice operation  or spread operation to copying array

//slice method 
let newarray = [1,2,4,5]
let slicearray = newarray.slice()
slicearray[2] = "hello"
console.log(newarray,slicearray); // output: [ 1, 2, 4, 5 ] [ 1, 2, 'hello', 5 ]
let spreadarray = [...newarray]  // spread operator
spreadarray[2] = "helio"
console.log(newarray,slicearray,spreadarray); //[ 1, 2, 4, 5 ] [ 1, 2, 'hello', 5 ] [ 1, 2, 'helio', 5 ]
// so we can use either spread operator or slice method to copy array 

//Array.from method
let arrayfrom = [1,2,3,4,5]
let arrayfrom2 = Array.from(arrayfrom)
arrayfrom2[2] = "everybody"
console.log(arrayfrom,arrayfrom2); 

// LIMITATIONS with spread and slice --> they are shallow copy ( first level copied , deeper level referenced)
    // they only work upto one dimension or level
        //if we use them on two dimensional arrays they dont work the same way

let spreaddemo = [[1,2],[2,3],[3,4]]
let spreadtest = spreaddemo
spreadtest[2][2] = "hello"
console.log(spreaddemo,spreadtest); // output: [ [ 1, 2 ], [ 2, 3 ], [ 3, 4, 'hello' ] ] [ [ 1, 2 ], [ 2, 3 ], [ 3, 4, 'hello' ] ]
            // both are changed 

let slicedemo = [[1,2],[2,3],[3,4]]
let slicetest = slicedemo
slicedemo[2][1] = "hey"
console.log(slicedemo,slicetest);//output: [ [ 1, 2 ], [ 2, 3 ], [ 3, 'hey' ] ] [ [ 1, 2 ], [ 2, 3 ], [ 3, 'hey' ] ]
            //both changes 
 
let arrayfromdemo = [[1,2],[2,3],[3,4]]
let arrayfromtest = Array.from(arrayfromdemo)
arrayfromtest[2][1] = "solved"
console.log(arrayfromdemo,arrayfromtest);  // output [ [ 1, 2 ], [ 2, 3 ], [ 3, 'solved' ] ] [ [ 1, 2 ], [ 2, 3 ], [ 3, 'solved' ] ]
            // both changes 

//SOLUTION  -->  JSON.parse( a string is converted into an object)  (deep level copying )
        // and JSON.stringify (An object is converted to a string)

        var deepArray = [[1,2], [2,3], [3,5]]
        var deepCopy = JSON.parse(JSON.stringify(deepArray))
        deepCopy[0][0] = "hello"  
        console.log(deepArray,deepCopy) //output: [ [ 1, 2 ], [ 2, 3 ], [ 3, 5 ] ] [ [ 'hello', 2 ], [ 2, 3 ], [ 3, 5 ] ]
            // only deepCopy is changed 


// Other methods for copying array (shallow copy ) 
    // for loop
            nums = [2, 4, 6]
            numsClone = []
            for (i = 0; i < nums.length; i++) {
            numsClone[i] = nums[i];
            }
            numsClone[2] = "hello"
            console.log(nums,numsClone); // [ 2, 4, 6 ] [ 2, 4, 'hello' ]
    
    // while loop
            itr = 0;                    // can also be written as:  itr = -1
            while (itr < nums.length) {//                           while(++itr < nums.length){
            numsClone[itr] = nums[itr];//                           numsClone[itr] = nums.[itr]
            itr++                       //                          }
            }
            numsClone[2] = "hello"
            console.log(nums,numsClone); // [ 2, 4, 6 ] [ 2, 4, 'hello' ]


    // forEach()
           nums.forEach((element, index) => (numsClone[index] = element)) 
           numsClone[2] = "hello"
           console.log(nums,numsClone); // [ 2, 4, 6 ] [ 2, 4, 'hello' ]

    // map()
            originalArr = [1,2,4];
            duplicateArr = originalArr.map((i) => i);
            duplicateArr[1] = 3 
            console.log(originalArr,duplicateArr) // output : [ 1, 2, 4 ] [ 1, 3, 4 ]

    // filter()
            num = [3, 5, 7];
            numClone = nums.filter(() => true);
            numClone[2] = "hello"
            console.log(num,numClone) // [ 3, 5, 7 ] [ 2, 4, 'hello' ]

    //reduce()
            arr = [2, 4, 6]
            arrClone = nums.reduce((duplicateArray, e) => {duplicateArray.push(e);return duplicateArray}, []);
            arrClone[1] = "hi"
            console.log(arr,arrClone)  //[ 2, 4, 6 ] [ 2, 'hi', 6 ]

    // from()
        numbers = [10, 20, 30, 40, 50]
        numberscopy = Array.from(numbers);    
        numberscopy[1] = "hey Everyone"    
        console.log(numbers,numberscopy) // [ 10, 20, 30, 40, 50 ] [ 10, 'hey Everyone', 30, 40, 50 ]

    // Array.concat()
        dig = [8, 9, 10]
        digcopy = nums.concat();  // if we don't pass any argument in the concat method, returns copy of the array     
        digcopy[2] = "omega"  
        console.log(dig,digcopy) // [ 8, 9, 10 ] [ 2, 4, 'omega' ]