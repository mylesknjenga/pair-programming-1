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