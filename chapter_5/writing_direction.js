/*The purpose of this program is to identify a language in a given string and return the writing direction of said language.

Output should work such that:
* Return options are "ltr" for left to right, "rtl" for right to left, and "ttb" for top to bottom.

Note: the characterScript and countBy from the book will be useful
*/

//Dependencies from the book, this line and directories/files given by book
require("./05_higher_order/code/load")("code/scripts.js", "code/chapter/05_higher_order.js", "code/intro.js");

//Use characterScript function dependency from book
//Requires charCodeAt input
//Inputs will be multiple languages, so find the DOMINANT script type

//Reduce strings of scriptless characters like commas and spaces, then count by grouping characters
//period = 46
//space = 32
//comma = 44

/*
The ? operator is a ternary operator in that it gives one of two defined outputs as per a condition
result = condition ? value1 : value2
This makes result be value1 if condition is true, value2 if condition is false
*/

/*
I give up on this problem for now, since it requires dependencies written by the book, and that wasn't even explained in the first place.
*/