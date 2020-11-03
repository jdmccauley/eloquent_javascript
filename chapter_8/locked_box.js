/*The purpose of this program is to take the object 'box', with the private
property '_content', and write a function withBoxUnlocked() that:
* Takes a function value as an argument
* Unlocks the box
* Runs the function
* Ensures box is locked before returning, regardless of whether the
argument function returned normally or threw an exception

For extra points, make sure that if withBoxUnlocked() is called when
the box is already unlocked, the box stays unlocked.

Output should work such that:
withBoxUnlocked(function() {
    box.content.push("gold piece");
});
  
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
*/

//box object, as per the exercise
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
};

//function to write as part of the exercise:
function withBoxUnlocked(body) {
    if (box.locked == false){
        body();
        console.log("Avast, ye box already be unlocked.")
        return;
    }
    try {
        box.unlock()
        body();
    } catch (e) {
        //Do nothing, just lock the box with finally
    } finally {
        box.lock();
    }
}

//main
withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true  