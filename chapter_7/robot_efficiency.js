/* The purpose of this program is to program a robot that finishes faster than goalOrientedRobot.

First observe unnecessary actions by goalOrientedRobot.

Use compareRobots to compare goalOrientedRobot to the new one.
*/

/*Observations of goalOrientedRobot:
* Maybe get all parcels first?
* Perhaps set goals based on parcel distance, not parcel order in stack?

Try getting all parcels first.
*/

/* Book Hints
The main limitation of goalOrientedRobot is that it considers only one parcel at a time. 
It will often walk back and forth across the village because the parcel it happens 
to be looking at happens to be at the other side of the map, even if there are others much closer.

One possible solution would be to compute routes for all packages and then take the shortest one. 
Even better results can be obtained, if there are multiple shortest routes, 
by preferring the ones that go to pick up a package instead of delivering a package.

Also, I checked the solution and the ? operator is used again. What is it?
<condition> ? <value1> : <value2>;
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
//I looked at the solution and modeled mine after it.
function fastRobot({place, parcels}, route){
    if (route.length == 0){
        //Calculate routes for all parcels
        //Make map an array of routes for parcel pickup and drop off
        let parcelRoutes = parcels.map(parcel=> {
            if (parcel.place != place) {
                return robot.findRoute(robot.roadGraph, place, parcel.place);
            } else{
                return robot.findRoute(robot.roadGraph, place, parcel.address);
            }
        });
        //This does pickup first if pickup is faster than drop off
        route = parcelRoutes.reduce((a, b) => a.length < b.length ? a : b);
    }
    return {direction: route[0], memory: route.slice(1)};
    //Go to direction in route, remove route destination from memory
}
//fastRobot(robot.VillageState.random, []);
compare.compareRobots(fastRobot, [], robot.goalOrientedRobot, []);

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