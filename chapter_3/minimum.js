/*
The purpose of this program is to write a function that:
* Takes two numbers as parameters
* Returns the lower of the two numbers
Make the function named 'min', such that the following code in the book will be true:
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
Where the '// →' notation is supposed to show the console.log output
*/
function min(a, b){
    if (a < b){
        return a;
    } else if (a > b){
        return b;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));