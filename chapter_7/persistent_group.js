/* The purpose of this program is to make a class PGroup like Group from chapter 6, but:
* add() returns a new PGroup with all old members, and the new one
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

/*Group from chapter 6:*/
class PGroup {
    constructor(){
        this.values = [];
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
        let group = new PGroup;
        //make variable for iterator.next to capture first value
        let status = iterator.next()
        while (status.done != true){
            group.add(status.value);
            status = iterator.next();
        }
        return group;
    }
    empty = [];
}


//main
/*
//let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
*/
let a = PGroup.empty;
console.log(a);
