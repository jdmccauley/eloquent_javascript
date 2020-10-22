/*The purpose of this program is to make two functions that take arrays and tests, do the .every method, where:
* One uses a loop
* The other uses the .some method

Call the function 'every'.

Note the following:
* The array .some method returns true if any of the elements in the array pass the condition
* The array .every method returns true if all elements in the array pass the condition


Output should work such that:
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/

//Version 1, using a loop
function every(array, test){
    let condition = true;
    for (let i = 0; i < array.length; i++){
        if (test(array[i]) == true){
            condition = true;
        } else {
            condition = false;
        }
    }
    return condition;
}

//Version 2, using .some
//To use some and work for all, keep removing elements until only one
function every1(array, test){
    let condition = true;
    let results = array.map(test);
    if (results.some(a => a == false)){
        condition = false;
    }
    return condition;
}

console.log("Testing every.")
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log("Now for every1.")
console.log(every1([1, 3, 5], n => n < 10));
console.log(every1([2, 4, 16], n => n < 10));
console.log(every1([], n => n < 10));