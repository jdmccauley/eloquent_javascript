/*The purpose of this program is to convert an array of arrays into a single array.
A function should be made such that it:
* Takes in an array of arrays
* Arrays can be of any length
* Returns an array that is all of the arrays, concatenated
Note: the methods `reduce` and `concat` can and should be used
Uses:
array.concat(array)
    console.log(array_name.concat(array_name2));
        This concatenates array_name and array_name2
array.reduce()

Output should work such that:
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(some_func(arrays))
// → [1, 2, 3, 4, 5, 6]
*/

let arrays = [[1, 2, 3], [4,5], [6]];
//Separate
//const reduced = (a, b) => a.concat(b);
//console.log(arrays.reduce(reduced));

//Total, spread
/*
console.log(
    arrays.reduce(
        (a, b) => a.concat(b)
    )
);
*/

//Total, one line
console.log(arrays.reduce((a, b) => a.concat(b)));

/*
Lessons learned:
.reduce lets you perform some fuction on an array throughout the array
.concat lets you concatenate arrays
.reduce does not need a starting position, it will start from the beginning
.reduce handles indexing
*/