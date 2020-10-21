/* The purpose of this program is to make a for loop function in place of using for loops.
Take the following as arguments:
* Value
* Test function
* Update function
* Body function
Be sure to stop the 'loop' if the test function returns false.
Body function should show current value.
Can use an actual loop in the function, just don't do so in the main program.

Output should work such that:
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
*/
function loop(value, test, update, body){
    while (test(value) != false){
        body(value);
        value = update(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);