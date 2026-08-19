let userInput = prompt(`What is the \"official\" name of JavaScript?`);

if(userInput == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

let userInput2 = prompt("Enter a number", 0);

if(userInput2 > 0) {
    alert("1");
}
else if(userInput2 < 0) {
    alert("-1");
} else {
    alert("0");
}

let result = (a + b < 4) ? "Below" : "Over";

let message = (login == "Employee") ? "Hello" : 
    (login == "Director") ? "Greetings" : 
    (login == "") ? "No login" : 
    "";