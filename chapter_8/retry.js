/*The purpose of this program is to wrap a function primitiveMultiply and call
it until it succeeds.

Write a function reliableMultiply to do this, in the format of:
function reliableMultiply(a, b) {
  // Your code here.
}

The primitiveMultiply function and its dependencies are copies into the this program.

Output should work such that:
console.log(reliableMultiply(8, 8));
// → 64
*/

//primitiveMultiply and its dependency:
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

//reliableMultiply:
function reliableMultiply(a, b) {
  for (;;){
    //This loop keeps running until it returns
    try {
      //Attempt using primitiveMultiply, if exception go to catch
      returnedMultiply = primitiveMultiply(a, b);
      //This only works if an exception is not raised
      return returnedMultiply;
    } catch (returnedMultiply){
      //This block executes if exception is raised
      //Tells loop to occur again (and call primitiveMultiply again)
      continue;
    }
  }
}

//main
console.log(reliableMultiply(8, 8));