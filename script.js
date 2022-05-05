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