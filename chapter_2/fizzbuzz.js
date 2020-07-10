//The purpose of this program is to print the numbers from 1 to 100 to the console, but
//Numbers divisible by 3 output "Fizz" and numbers divisible by 5 ouptut "Buzz"
//Finally, for numbers divisuble by both 3 and 5, output "FizzBuzz".
for (let number = 1; number <= 100; number++){
    if (number % 3 == 0 && number % 5 ==0){
        console.log("FizzBuzz");
    } else if (number % 3 == 0){
        console.log("Fizz");
    } else if (number % 5 == 0){
    console.log("Buzz");
    } else{
        console.log(number);
    }

}