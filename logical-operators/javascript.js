if(age >= 14 && age <= 90);

if(!(age >= 14 && age <=90));

let login = prompt("Login");

if(login == "Admin") {
    let password = prompt("Enter password");
    if(password == "TheMaster") {
        alert("Welcome");
    } else if(password == "" || password == null) {
        alert("Cancelled!");
    } else {
        alert("Wrong password");
    }
} else if(login == "" || login == null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}
