/* The purpose of this program is to program a robot that finishes faster than goalOrientedRobot.

First observe unnecessary actions by goalOrientedRobot.

Use compareRobots to compare goalOrientedRobot to the new one.
*/

/*Observations of goalOrientedRobot:
* Maybe get all parcels first?
* Perhaps set goals based on parcel distance, not parcel order in stack?

Try getting all parcels first.
*/

//Import robot.js
let robot = require("./project/robot.js");
let compare = require("./measuring_a_robot.js");

/*Reference goalOrientedRobot:
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
*/

function fastRobot({place, parcels}, route){
    if (route.length == 0){
        for (let i = 0; i < parcels.length; i++){
            let parcel = parcels[i];
            if (parcel.place != place) {
                route = robot.findRoute(robot.roadGraph, place, parcel.place);
                //Add locations of parcels not at current place to route
            }
            place = parcel.place;
        } 
        for (let i = 0; i < parcels.length; i++){
            let parcel = parcels[i];
            if (parcel.address != place) {
                route = robot.findRoute(robot.roadGraph, place, parcel.address);
                //For parcels on robot, add parcel addresses to route
            }
            place = parcel.address;
        }
    }
    return {direction: route[0], memory: route.slice(1)};
    //Go to direction in route, remove route destination from memory
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
        route = robot.findRoute(robot.roadGraph, place, parcel.place);
        //Add locations of parcels not at current place to route
    } else {
        route = robot.findRoute(robot.roadGraph, place, parcel.address);
        //For parcels on robot, add parcel addresses to route
    }
    }
    console.log(route);
    return {direction: route[0], memory: route.slice(1)};
    //Go to direction in route, remove route destination from memory
}

//goalOrientedRobot(robot.VillageState.random, []);

/*
I give up for now.
*/

/* Book solution:
function lazyRobot({place, parcels}, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
                pickUp: false};
      }
    });

    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({route, pickUp}) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }

  return {direction: route[0], memory: route.slice(1)};
}
*/