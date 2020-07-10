/* 
Exercise Outline:
The purpose of this program is to use a loop to print the following to the console:
#
##
###
####
#####
######
#######

Note that strings have a property '.length' that can be called to find the length of a string.
*/
/*
My notes:
Max length of the hashes is 8. 
*/
let hashes = "#";
while (hashes.length <= 8){
    console.log(hashes);
    hashes += "#";
}