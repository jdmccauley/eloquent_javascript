/*
The purpose of this program is to create a function that compares objects by their properties/values.

Normally, when running a test if object1==object2, the test compares the identity of the objects, to see if their pointers are the same.

Prepare a function named 'deepEqual' such that it:
* returns true if the input values are equal (take two standard bindings)
* returns true if the input objects have the same properties
    * use a recursive call to compare the properties
* use typeof() to first check if the input bindings are values or objects
    * if object, run the deep comparison
* deal with the unfortunate case that type 'null' is considered an object with typeof()

Note that Object.keys is a useful property to view all properties of an object.

Output should work such that:
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/

/*
My notes:
* typeof() returns the binding type as a string
* Here is the propert syntax for the object keys function: Object.keys(input_object);
* arrays are compared by identity, not values for all indicies
* Object.values(input_object); outputs an array of values from the object
* if you return a value in a for loop, it could break by returning
    * use continue if a condition passes to not break
*/

function deepEqual(input_1, input_2){
    let condition;
    if (typeof(input_1) != "object" && typeof(input_2) != "object"){
        if (input_1 == input_2){
            return true;
        } else {
            return false;
        }
    } else if (input_1 == null || input_2 == null){
        return "Null cannot be compared.";
    } else if (typeof(input_1) == "object" && typeof(input_2) == "object"){
        let input_1_keys = Object.keys(input_1), input_1_values = Object.values(input_1);
        let input_2_keys = Object.keys(input_2), input_2_values = Object.values(input_2);
        for (let i = 0; i <= input_1_keys.length; i++){
            if (deepEqual(input_1_keys[i], input_2_keys[i]) == true && deepEqual(input_1_values[i], input_2_values[i]) == true){
                continue;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return "Those inputs are not able to be compared.";
    }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));