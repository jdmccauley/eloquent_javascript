/* The purpose of this program is to create a vector class of two dimensions.

The vector class should have two properties, an x and y value.
The vector prototype should have two methods, plus and minus:
* They should take another vector as a parameter that has the sum
    or difference between the two vectors (this and the parameter) x and y values

Add a getter property 'length' to the prototype that computes the length of the vector:
* Compute the distance of the vector from 0,0

Output should work such that:
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

Note that my first attempt at this exercise was after the 'Map' section.
*/

class Vec {
    constructor(xValue, yValue) {
        this.x = xValue;
        this.y = yValue;
        //this.length = Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    plus(vector) {
        let result = new Vec(0,0);
        result.x = this.x + vector.x;
        result.y = this.y + vector.y;
        return result;
    }
    minus(vector) {
        let result = new Vec(0,0);
        result.x = this.x - vector.x;
        result.y = this.y - vector.y;
        return result;
    }
}

//main
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));

//length is supposed to be a 'getter' function, which I haven't learned yet
console.log(new Vec(3, 4).length);