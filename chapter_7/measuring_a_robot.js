/* The purpose of this program is to compare the different robot methods outlined
in the project: random, goal oriented, and route.

Make sure to compare the robots with 100 tasks so the sample size is large.
Each task will be the same 5 parcels as before.

Prepare a function like this:
function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
}

Output should work such that the following command works:

compareRobots(routeRobot, [], goalOrientedRobot, []);
*/

/*I exported all functions, classes, and variables from robot.js with
    module.exports = {};
Declaring a variable as require(./path/to/file) lets me use properties
from the 'module'.
*/
let robot = require("./project/robot.js");

function compareRobots(robot1, memory1, robot2, memory2){
    //Modified from runRobot:
    function runRobot(state, robot, memory) {
        //Where 'state' is a villageState object
        for (let turn = 0;; turn++) {
            if (state.parcels.length == 0) {
                return turn;
            }
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
    }
    function robotTurns(taskArray, robot, memory){
        let turnsTaken = [];
        //Add generation of index per tasks
        for (let i = 0; i < taskArray.length; i++){
            turnsTaken[i] = runRobot(taskArray[i], robot, memory);
        }
        return turnsTaken;
    }
    //Generating tasks
    let tasks = [];
    for (let i = 0; i < 100; i++){
        //Needs to be <, because if <= will be 101 (since counting starts on 0)
        tasks[i] = robot.randomParcels();
    };
    //Making arrays of turns per task
    let robot1Turns = robotTurns(tasks, robot1, memory1);
    let robot2Turns = robotTurns(tasks, robot2, memory2);
    //Average the turns
    let robot1Avg = robot1Turns.reduce((a, b) => (a+b)/2, 0);
    let robot2Avg = robot2Turns.reduce((a, b) => (a+b)/2, 0);
    //Output average amount of turns
    //Note Function.name returns the function name
    console.log(`On average, ${robot1.name} took ${robot1Avg} steps to complete each task.`);
    console.log(`On average, ${robot2.name} took ${robot2Avg} steps to complete each task.`);
}

//main
//compareRobots(robot.routeRobot, [], robot.goalOrientedRobot, []);

module.exports = {compareRobots};
