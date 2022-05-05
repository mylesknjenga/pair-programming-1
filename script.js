//Medium(1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather 
//or not the input is a vowel

const vowelChecker = x => {
    const vowel = ["a", "e", "i", "o", "u", "y"];
    if (vowel.includes(x)) {
        console.log("This is a vowel");
    } else {
        console.log("This is not a vowel");
    }; 
};

//Tests
vowelChecker("a");
vowelChecker("b");
//Easy (1)
//Write a JavaScript function that takes in a random array 
//and outputs two new arrays of odd numbers and even numbers

function randomArray(arr) {

    let even = [];
    let odd = [];
    arr.forEach(element => {
        if (element%2 === 0) {
            even.push(element);
        } else {
            odd.push(element);
        };
    });

    console.log(`Even number: ${even}. Odd number: ${odd}`);
};

//Tests
const userArr = [1, 2, 202, 111, 78];
randomArray(userArr);

//Tests
console.log(anagram("So dark the con of man", "Madonna of the Rocks"));
console.log(anagram("Things are good", "Dogs eat ants"));



//Medium (3)
// Write a function that takes in two numbers and determines the largest 
//positive integer that divides the two numbers without a remainder.

const findGCD = (num1, num2) => {

    let largest;

    // looping from 1 to number1 and number2
    for (let i = 1; i <= num1 && i <= num2; i++) {
        // check if is factor of both integers
        if( num1 % i == 0 && num2 % i == 0) {
            largest = i;
        };
    };
    return largest;
};

//Tests
console.log(findGCD(336, 360));
console.log(findGCD(78, 126));