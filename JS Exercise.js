// Hello World, first tests
console.log("Test that this document works!");

// Addition in a function
function check2 (num1, num2) {
    if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check2(2, 22));

// Check and get the extension used in a file - prgrm
const fileExtension = (abc) => abc.slice(abc.lastIndexOf('.'));
console.log(fileExtension ('Js Exercise.js'));

// Cipher Alphabet - prgrm
const moveAForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(moveAForward('aBu'))


// Human to Dog Years Example

let myAge = 8;
let dogEarlyYears = 0;
let cleanse = myAge;

const checkEA = function() {
if (myAge >= 2) {
    dogEarlyYears += 2;
    cleanse -= 2;
}
else if (myAge === 1) {
    dogEarlyYears += 1;
    cleanse -= 1;
}
else {
    dogEarlyYears = 0;
}
return dogEarlyYears;
};

checkEA();
let myAgeInDogYears = (cleanse * 4) + (10.5 * dogEarlyYears);


console.log(`I am : ${myAge} year(s) old which is equivalent to : ${myAgeInDogYears} in dog years because : ${dogEarlyYears} equivalent dog year(s) have been spent`)