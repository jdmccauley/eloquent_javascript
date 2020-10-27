/* The purpose of this program is to make a robot that picks up and delivers parcels to places in a virtual town.
This code was copied from https://eloquentjavascript.net/code/chapter/07_robot.js

Note that the robot must go to a place to pick up a parcel, and go to a place to drop off the parcel.

I will comment on sections of the code with reasons and logic from the 'eloquent javascript' book.

Also, I'm reformatting the code with tabs and spaces to make more sense to me.
*/

/* Village of Meadowfield
These 'roads' are roads in the town between places in the town.
This is the starting 'map' of the town, and it is used to make a 'graph',
    or collection of points (places) and lines between them (the roads).
*/
//note that in the book this is declared with const not var
var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

/* The array of strings isn't helpful for making a graph, so the goal is to 
    find places, and make the edges (roads) between them.
The purpose of this function is to generate an object that is the 'graph'.
*/
function buildGraph(edges) {
    let graph = Object.create(null);
    //This makes an empty object based on null prototype
    //Normally you use Object.create(prototype)
    function addEdge(from, to) {
    if (graph[from] == null) {
        graph[from] = [to];
        //Makes from=to if from is none?
    } else {
        graph[from].push(to);
        //Adds value 'to' to 'graph' for key 'from'
    }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        //This Array.prototype method .map(func) makes a new array from
            //running the passes function on all elements on the array.
        //So each element of 'roads' is split into an array of [from, to]
            //separated by the '-' in the element string.
        //This for loop then runs on all [from, to] elements of the split roads
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

//note that in the book this is declared as const not var
var roadGraph = buildGraph(roads);

//What is the structure of the object? Paste roadGraph here.

//Node output
// > console.log(roadGraph)
// [Object: null prototype] {
//   "Alice's House": [ "Bob's House", 'Cabin', 'Post Office' ],
//   "Bob's House": [ "Alice's House", 'Town Hall' ],
//   Cabin: [ "Alice's House" ],
//   'Post Office': [ "Alice's House", 'Marketplace' ],
//   'Town Hall': [ "Bob's House", "Daria's House", 'Marketplace', 'Shop' ],
//   "Daria's House": [ "Ernie's House", 'Town Hall' ],
//   "Ernie's House": [ "Daria's House", "Grete's House" ],
//   "Grete's House": [ "Ernie's House", 'Farm', 'Shop' ],
//   Farm: [ "Grete's House", 'Marketplace' ],
//   Shop: [ "Grete's House", 'Marketplace', 'Town Hall' ],
//   Marketplace: [ 'Farm', 'Post Office', 'Shop', 'Town Hall' ]
// }
// undefined

/*
Note that roadGraph is an object, and the structure is property:value pairs.
This looks like key:value, but each 'key' is actually a property.

I learned that there are two ways to assign/access properties from this setup.
1. object.property
    This works when the property name doesn't have special characters.
    Can work with property name of a number.
2. object['property']
    This works when a property name has special characters. 
    Must be a string for the property name

See below that object.name works for non special characters, but when there are special characters,
    object['name'] is necessary.
*/

//Node output
// > roadGraph['Alice\'s House']
// [ "Bob's House", 'Cabin', 'Post Office' ]
// > roadGraph['Cabin']
// [ "Alice's House" ]
// > roadGraph.Alice\'s\ House
// roadGraph.Alice\'s\ House
//           ^^^^^^
// Uncaught SyntaxError: Invalid or unexpected token
// > roadGraph.Cabin
// [ "Alice's House" ]
// >

/* Lessons learned from this block:
* Objects look like dictionaries of 'key/value' pairs but are property/value pairs
* Object properties can be accessed by object.property or object['property']
* Escape characters do work: ['Alice\'s House'] is valid
*/

/* The first proposed idea is to make objects for the robot, parcel, and places.
Then have properties for each state, such as how many parcels as location, then update as changes occur.
This is not ideal.

Making everything an object makes for confusion and too many states to manage.
Instead, make an object for the entire village state, and make new objects each time there is a new state.
    This is opposed to changing the original object state.
*/

/*Note book has clas definition in a separate block.
Code originally had object declaration and class definition in same line like this:
`var VillageState = class VillageState {`
I'm separating the two for my own simplicity.
Note I had to change to villageState so the var VillageState doesn't interfere.
*/

//Note parcel.place is current location of parcels, parcel.address is where parcels are sent to

//changed from VillageState to villageState
class villageState{
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
        //Allows for object declaration with construction of place and parcels properties
        //Example: `let newState = new villageState("Alice's House", 2)`
    }
    //Function for moving the robot to a destination
    move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
        //Checks if there is not a road between the current place and destination
        //If not, returns old state place as destination
        return this;
    } else {
        let parcels = this.parcels.map(p => {
            //Map parcels array, making new array of parcels
            if (p.place != this.place) return p;
            //If parcel place is not at current place, return parcel to new array
            return {place: destination, address: p.address};
            //For returned parcels, make place = destination (current place after move), address is same address as before
            //This generates new array of parcels
        }).filter(p => p.place != p.address);
        //Remove parcels where parcel place (pickup) is same as parcel address
        //changed from VillageState to villageState
        return new villageState(destination, parcels);
        //Return villageState object where next destination is set, and parcels is current parcels
    }
    }
}
//Note, two returns are possible?

/* First example given for moving a parcel
let first = new villageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office
*/


//I wrote this line to replace `var VillageState = class VillageState {`
var VillageState = new villageState;

//Now for simulations

function runRobot(state, robot, memory) {
    //Where 'state' is a villageState object
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    //Remember Math.random() produces a value between 0 and 1
    //so it needs to be normalized to the actual array length
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

/* This creates a static villageState using a function.
Makes parcels be put in random locations.
*/

//Original
//VillageState.random = function(parcelCount = 5) {
//My declaration
function randomParcels(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
        //Prevents parcels from being dropped in same location as addressed
    }
    //changed from VillageState to villageState
    return new villageState("Post Office", parcels);
};

VillageState.random = randomParcels();


//Strategy of making the robot follow a defined route to pickup/deliver parcels

var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

//Function for going through the route
//First use of robot memory, when memory is list of places for robot to go

function routeRobot(state, memory) {
    if (memory.length == 0) {
    memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

/* Now to find shortest path between destinations.
This is a search problem, so solution is to keep computing possibilities until one is true.
    This is because the number of routes is infinite, so each one must be assessed.
Goal here is to find shortest route that works for the from/to pair.
*/

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    //Work is array of places so far
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            //For all locations on graph
            if (place == to) return route.concat(place);
            //If place is 'to', add the 'to' to route
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            //For all others, add back to work list for next iteration of route finding
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
        //Add locations of parcels not at current place to route
    } else {
        route = findRoute(roadGraph, place, parcel.address);
        //For parcels on robot, add parcel addresses to route
    }
    }
    return {direction: route[0], memory: route.slice(1)};
    //Go to direction in route, remove route destination from memory
}

/* Runs in book, not included in original code.
*/
runRobot(VillageState.random, randomRobot);
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns

module.exports = {
    roads: roads,
    buildGraph: buildGraph,
    roadGraph: roadGraph,
    villageState: villageState,
    VillageState: VillageState,
    runRobot: runRobot,
    randomParcels: randomParcels,
    randomPick: randomPick,
    randomRobot: randomRobot,
    mailRoute: mailRoute,
    routeRobot: routeRobot,
    routeRobot: routeRobot,
    findRoute: findRoute,
    goalOrientedRobot: goalOrientedRobot
};

// runRobotAnimation(VillageState.random(),
//                   goalOrientedRobot, []);