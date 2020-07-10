function multiplication(n){
    let factor;
    return (factor) => n * factor;
}
function multiplication2(n){
    let factor;
    return function number(factor){
        return (n * factor);
    };
}
let twice = multiplication(2);
let twice2 = multiplication2(2);
console.log(twice(4));
console.log(twice2(4));