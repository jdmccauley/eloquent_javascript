/*
The purpose of this program is to convert an array to a list, where a list can be defined as:
* A nested set of objects where each object contains a reference to the next object in the list
For example, here is a list:
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

This program should have four functions:
* arrayToList = builds a list structure from an array
* listToArray = produces an array from a list
* prepend = takes an element and a list and creates a new list that adds the element to the front of the input list
    This function is supposed to help with making the first function.
* nth = takes a list and a number and returns the element at the given position in the list 
    (with zero referring to the first element) or undefined when there is no such element.
    This should be recursive.

Output should work such that:
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

/*
My notes:
* If you return list.value, the first value of the list returns
* If you return list.rest, the list returns without the first 'index'
* If you return list.rest.rest, the list returns without the first two 'indicies'
*/



//One idea is to take advantage of the fact that lists end with null:
    //make something recursive such that if rest = null, end, else run function again

function arrayToList(input_array){
    let list = null;
    for (let i = input_array.length - 1; i >= 0; i--){
        list = prepend(input_array[i], list);
    }
    return list;
}


function listToArray(input_list){
    let output_array = [], index = 0, input_list_status = input_list;
    while (input_list_status != null){
        output_array.push(input_list_status.value);
        input_list_status = input_list_status.rest;
        index += 1
    }
    return output_array;
}

function prepend(element, input_list){
    let temp_list = {
        value: null,
        rest: null
    };
    temp_list.value = element; 
    temp_list.rest = input_list;
    input_list = temp_list;
    return input_list;
}


function nth(input_list, index){
    let list_value;
    if (index == 0){
        return input_list.value;
    } else {
        return nth(input_list.rest, index - 1);
    }
}

//main
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));