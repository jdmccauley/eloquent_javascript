/*
The purpose of this program is to make a recursive function to test whether a number is even.
Base this off of the modulus of 2, and note that:
* Zero is even
* One is odd
* Any number, N, has its evenness being the same as N - 2
With that in mind, make a recursive function that:
1. Tests whether the number's modulus is 0 or 1
2. If not, subtract 2 and perform the test again

Make it work such that:
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

If possible, fix the -1 issue once the first two tests pass.
*/

/*
Notes:
In my first attempt, had the else statement contain:
    N -= 2;
    isEven(N);
This would return undefined in the end.
This is because if I did not return, the function would not pass N to itself in the recursed iteration.

Lesson learned:
If recursing, must return(func_name(args)) to let the function recurse.
Otherwise, func_name(args) doesn't pass a value back to the function in the recursion.
*/

function isEven(N){
    if (N < 0){
        N = N * -1;
    }
    if (N == 0){
        return true;
    } else if (N == 1){
        return false;
    } else {
        N -= 2;
        return(isEven(N));
    }
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));