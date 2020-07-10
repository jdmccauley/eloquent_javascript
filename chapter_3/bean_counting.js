/*
The purpose of this progam is to make two functions, countBs and countChar, such that:
* countBs takes one string argument and returns the number of "B" characters in the string
* countChar takes two string arguments: a string word and a single character
    * it then returns the number of that given character that are in the given word
    * is dependent on the function countBs
This exercise is supposed to reinforce and teach how to reuse functions

Context: note that `string_name[N]` returns the character at N positin in the string_name.
    The numbering of characters in a string starts with 0 as the first character, and the last character is `string_name.length - 1`
*/

function countBs(word, letter = "B"){
    let number_Bs = 0;
    for (i = 0; i <= (word.length - 1); i++){
        if (word[i] == letter){
            number_Bs += 1;
        }
    }
    return number_Bs;
}

function countChar(word, letter){
    return(countBs(word, letter));
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"))