/* The purpose of this program is to make a class called Group, and model it after a Set, where Sets are objects that hold
a series of values, no keys (like a Map does).

The class should work such that it has:
* A constructor that builds an empty Group
* Method called add(value) that adds values to the group (but only if that value isn't already in the Group)
* Method called delete(value) that removes a value (if it was in the Group)
* Method called has(value) that returns a Boolean of whether the value is in the Group
* A static method from() that takes an iterable as an argument and creates a group of all those values iterated over it

Note: use the === operator, or indexOf, to determine if two values are the same
    What does === do that == does not again?
    === is a strict equality, so variables must be of same type
        4 === "4" //false
    == is just equality, but loose
        4 == "4" //true

Output should work such that:
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
*/


class Group {
    constructor(){}
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
        if (this.has(value) == false && this.values == undefined){
            this.values = [];
            this.values.push(value);
        } else if (this.has(value) == false){
            this.values.push(value);
        } else if (this.has(value)){
            //remember that `` is necessary to use the ${} syntax in console.log()
            return console.log(`Unable to add ${value} to Group, ${value} is already in Group.`);
        }
    }
    delete(value){
        if (this.has(value)){
            delete this.values[this.values.indexOf(value)];
        } else{
            return console.log(`Unable to delete ${value} from Group, ${value} is not in Group.`);
        }
    }
    static from(iterable){
        let iterator = iterable[Symbol.iterator]();
        //You have to make a new instance of the object before you can call methods in static functions
        let group = new Group;
        //make variable for iterator.next to capture first value
        let status = iterator.next()
        while (status.done != true){
            group.add(status.value);
            status = iterator.next();
        }
        return group;
    }
}

//testing
//let group = new Group;
//console.log(group.toString());
//console.log(group.properties())
// let group = new Group;
// group.add(10);
// console.log(group.has(10));
// group.delete(10);
// console.log(group.has(10));
// group.delete(10);
// let group = Group.from([10, 20]);
// console.log(group.values);
// console.log(group.has(10));
// console.log(group.has(20));

//main
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));