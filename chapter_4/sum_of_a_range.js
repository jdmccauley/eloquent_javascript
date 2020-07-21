/*
The purpose of this program is to write a function named 'range' that take in three parameters:
* start number
* end number
* step
and returns all numbers between the start and end number, by the step number. Make the default step 1.

Also, write a function named 'sum' to add all of the elements in an array.

Output should work such that:
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/
function range(start, stop, step = 1){
    let range_array = [];
    if (start < stop){
        for (start; start <= stop; start += step){
            range_array.push(start);
        }
    } else {
        for (start; start >= stop; start += step){
            range_array.push(start);
        }
    }
    return range_array;
}

function sum(numbers){
    let sum = 0;
    for (let element of numbers){
        sum += element;
    }
    return sum;
}

console.log(range(1,10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));