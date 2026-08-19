let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

console.log(styles.shift());

console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

function sumInput() {
    return prompt("Enter a number to sum");
}

let arr = [];
let arrLength = 0;

let userInput = sumInput();

while(userInput != null && !isNaN(Number(userInput)) && userInput != "") {
    arr[arrLength] = userInput;
    arrLength++;
    console.log(arr);
    userInput = sumInput();
}

let sum = 0;

for(let numbers of arr) {
    sum += Number(numbers);
}

console.log(`The sum of all the numbers input are ${sum}`);


