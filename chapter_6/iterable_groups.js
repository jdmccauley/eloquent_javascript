/* The purpose of this program is to make the Group class in the groups.js exercise iterable. Copy/paste the class from the
previous exercise and modify it as needed.

Do not return a Symbol.iterator for the object, find a more clever way to solve this.

Output should work such that:
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

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
        //original
        //return group;
        //now iterable
        return group.values;
    }
}


//testing
// for (let i of [1, 2, 3]){
//     console.log(i);
// }
//returns 1 2 3
//I guess arrays, when in a for loop, iterate automatically
// let group = Group.from([1, 2, 3]);
// console.log(group.has(1));
// console.log(group.has(2));
// console.log(group.has(3));
// console.log(group.values);

//main
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}