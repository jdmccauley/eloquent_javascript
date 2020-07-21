/*
The purpose of this program is to make functions named 'reverseArray' and 'reverseArrayInPlace', such that:
* reverseArray makes and returns a new array that is the reverse of the input array
* reverseArrayInPlace takes in an array and outputs the same array, but in reverse (no new binding)

Output should work such that:
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/
function reverseArray(input_array){
    let array_reversed = [];
    for (let i = (input_array.length - 1); i >= 0; i--){
        array_reversed.push(input_array[i]);
    }
    return array_reversed;
}

function reverseArrayInPlace(input_array){
    let array_reversed = reverseArray(input_array);
    for (let i = 0; i <= (input_array.length - 1); i++){
        input_array[i] = array_reversed[i];
    }
    return input_array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);