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



//Easy (2)
//Create a function that checks an array for prime numbers then inserts any pimes into a new array

const findPrime = numArray => {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
           };
        };
        return true;
      });
    return `primeArray = ${numArray}`;
};

//Tests
console.log(findPrime([2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findPrime([10, 18, 19, 29, 33, 35, 47, 66, 83]));



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



//Medium (2)
// Create a function that accepts two strings, then determines whether or not the first 
//string is an anagram of the
// second string by returning a boolean.

const anagram = (string1, string2) => {
    
    let array1 = string1.replace(/\s/g, '').toLowerCase().split("");
    let array2 = string2.replace(/\s/g, '').toLowerCase().split("");
    let isAnagram = true;
    
    if (array1.length != array2.length){
        isAnagram = false;
    } else {
        for (var i = 0; i < array1.length; i++) {
            if(!array2.includes(array1[i])) {
                isAnagram = false;
                break;
            };
        };
    };
    return isAnagram;
};

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



//Medium(4)
const car = {
    make: "Honda", 
    model: "Civic", 
    year: 2022,
    mileage: 2000,
    color: "Black",
    driveToWork: 33,
    driveTheWorld: 24000,
    runErrands: 30,

    calcAfterWork: function () {
        console.log(`old mileage: ${this.mileage} | new mileage: ${this.mileage + this.driveToWork}`);
        this.mileage = this.mileage + this.driveToWork;
    },
    calcAroundWorld: function () {
        console.log(`old mileage: ${this.mileage} | new mileage: ${this.mileage + this.driveTheWorld}`);
        this.mileage = this.mileage + this.driveTheWorld;

    },
    calAfterErrands: function () {
        console.log(`old mileage: ${this.mileage} | new mileage: ${this.mileage + this.runErrands}`);
        this.mileage = this.mileage + this.runErrands;
    }
};

//Tests
car.calcAfterWork();
car.calcAroundWorld();
car.calAfterErrands();



//Hard(1)
const isBalanced = (str) => {
    brackets = ["{", "(", "[", "]", ")", "}"];
    userBrackets = [];
    strArr = str.replace(/\s/g, '').split("");
    //takes out all the words from the string and leaves only brackets
    for(i=0; i<strArr.length; i++){
        if(brackets.includes(strArr[i])) {
            userBrackets.push(strArr[i]);
        };
    };

    let count = [];
    for (i = 0; i < userBrackets.length; i++) {
        let char = count[count.length-1];
        if (userBrackets[i] == "(" || userBrackets[i] == "{" || userBrackets[i] == "[") {
            count.push(str[i]);
        } else if ((char == "(" && userBrackets[i] == ")") || (char == "{" && userBrackets[i] == "}") || (char == "[" && userBrackets[i] == "]")) {
            count.pop();
        } else {
            return false;
        };
    };

    return count.length ? false : true;
};

//Tests
console.log(isBalanced("{hello world}"));
console.log(isBalanced("{hello world]"));