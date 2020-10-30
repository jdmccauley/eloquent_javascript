/* The purpose of this program is to make a class PGroup like Group from chapter 6, but:
* add() returns a new PGroup with all old members (properties), and the new one
* delete() returns a PGroup without the deleted member
* class should work for all value types, not just strings
* have constructor internally, but outside make empty instances called PGroup.empty

Output should work such that:
class PGroup {
  // Your code here
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
*/

/* Hints from book:
The most convenient way to represent the set of member values is still as an array since arrays are easy to copy.

When a value is added to the group, you can create a new group with a copy of the original array 
that has the value added (for example, using concat). When a value is deleted, you filter it from the array.

The class’s constructor can take such an array as argument and store it as the instance’s (only) property. 
This array is never updated.

To add a property (empty) to a constructor that is not a method, you have to add it to the constructor 
after the class definition, as a regular property.

You need only one empty instance because all empty groups are the same and instances of the class don’t change. 
You can create many different groups from that single empty group without affecting it.
*/

//Do the empty part laste=.

/*Group from chapter 6:*/
class PGroup {
    constructor(array){
        this.values = array;
    }
    has(value){
        if (this.values == undefined){
            return false;
        }
        for (let i = 0; i < this.values.length; i++){
            if (this.values[i] === value){
                return true;
            }
        }
        //if value not seen in iteration through values, return false for has(value)
        return false;
    }
    add(value){
        let inputPGroup = new PGroup(this.values.slice());
        //Note this does not work, since it still modifies the old object:
        //let inputPGroup = new PGroup(this.values);
        //console.log("inputPGroup for reference:", inputPGroup);
        if (inputPGroup.has(value) == false && inputPGroup.values == undefined){
            inputPGroup.values = [];
            inputPGroup.values.push(value);
       } else if (inputPGroup.has(value) == false){
            inputPGroup.values.push(value);
        } else if (inputPGroup.has(value) == true){
            //remember that `` is necessary to use the ${} syntax in console.log()
            return console.log(`Unable to add ${value} to PGroup, ${value} is already in PGroup.`);
        }
        return inputPGroup;
    }
    delete(value){
        let inputPGroup = new PGroup(this.values.slice());
        //console.log("inputPGroup for reference:", inputPGroup);
        if (inputPGroup.has(value) == true){
            //delete inputPGroup.values[inputPGroup.values.indexOf(value)];
            //This needs to be done differently, so filter. That way null values are not kept as does in `delete`.
            inputPGroup.values = inputPGroup.values.filter(element => element !== value);
            //!== checks value and type
        } else if (inputPGroup.has(value) == false){
            return console.log(`Unable to delete ${value} from PGroup, ${value} is not in PGroup.`);
        }
        return inputPGroup;
    }
    static from(iterable){
        let iterator = iterable[Symbol.iterator]();
        //You have to make a new instance of the object before you can call methods in static functions
        let group = new PGroup;
        //make variable for iterator.next to capture first value
        let status = iterator.next()
        while (status.done != true){
            group.add(status.value);
            status = iterator.next();
        }
        return group;
    }
    empty(){
        return new PGroup([]);
    }
}
//Let not needed, any new properties can be assigned in the main program outside of the class definition.
PGroup.empty = new PGroup([]);
//main

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false



//Testing
// let a = new PGroup;
// let one = a.add("one");
// console.log(a);
// console.log(one);

// let empty = new PGroup([]);
// let a = empty.add("a");
// console.log("a added, a:", a);
// let ab = a.add("b");
// console.log("a, nothing changed:", a);
// console.log("ab, b added:", ab);
// let b = ab.delete("a");
// console.log("b, ab with a deleted:", b);

// console.log("a, nothing changed:", a);
// console.log("empty, just to check:", empty);

// console.log("b:", b, "has b?");
// console.log(b.has("b"));
// // → true
// console.log("a:", a, "has b?");
// console.log(a.has("b"));
// // → false
// console.log("b:", b, "has a?");
// console.log(b.has("a"));
// // → false

//Lessons being learned: make copies of arrays in declarations, do not reference parent arrays for modification
//Use `let newArray = array.slice();` to make a new array that doesn't reference the same one

//Now get empty to work. What does it need?