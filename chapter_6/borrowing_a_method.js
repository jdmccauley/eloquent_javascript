/* The purpose of this program is to use the following object:
* let map = {one: true, two: true, hasOwnProperty: true};

And be able to call map.hasOwnProperty and return the value of that property, not call the prototype method.

Note: will need to use polymorphisms

Output should work such that:
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true

Note that the issue is that if you check if hasOwnProperty("one") works, code fails since hasOwnProperty got replaced with the property "hasOwnProperty"
*/

let map = {one: true, two: true, hasOwnProperty: true};
//this is the fix
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
/*Explanation
map.hasOwnProperty got overwritten, so map.hasOwnProperty is now a property, not a method
map's prototype is Object.prototype, which still has hasOwnProperty as method
Adding `.call` to a method allows for the `this` to be defined, then the argument
So, we use Object.prototype.hasOwnProperty.call to call the method, but pass in 'map' as the 'this' for the method to be called on.

*/