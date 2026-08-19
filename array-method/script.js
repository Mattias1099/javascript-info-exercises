/*
function camelize(str) {
    // Remove dashes
    let arr = str.split("-");
    // Make letter after dash upper-case
    let sentence = arr.at(0);
    console.log(sentence);
    for(let i = 1; i < arr.length; i++) {
      let firstPart = arr.at(i).slice(0, 1).toUpperCase();
      console.log(firstPart);
      let secondPart = arr.at(i).slice(1);
      console.log(secondPart);
      let completeWord = firstPart + secondPart;
      console.log(completeWord);
      sentence += completeWord;
    }
    return sentence;
  }

console.log(camelize("list-style-image"));
*/

/*
// function that takes array arr, number a and number b
function filterRange(arr, a, b) {
    return arr.filter((element) => element >= a && element <= b);
}

console.log(filterRange([4, 6, 8, 1, 9, 5], 5, 8));

// go through arr and return a new array containing elements higher or equal to a and lower or equal to b
*/

/*

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        if(arr.at(i) < a || arr.at(i) > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

let arr = [5, 3, 1];
console.log(filterRangeInPlace(arr, 2, 5));

console.log(arr);

*/

/*
// use sort with a condition to sort in decreasing order
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);
*/

/*
// use slice to copy arr
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
    return array.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
*/

/*
// func that takes an array and randomly shuffles elements
// maybe do a sort buy use math.random to randomize sorting?
let arr = [1, 2, 3];

function shuffle(arr) {
    return arr.sort(() => Math.floor((Math.random() * 3) - 1));
}

console.log(shuffle(arr));
*/

/*
// make func unique(arr) returns an array with unique items of arr

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let filteredArr = [];
    for(let elem of arr) {
        if(!filteredArr.includes(elem)) {
            filteredArr.push(elem);
        }
    }
    return filteredArr;
}

console.log(unique(strings));
*/

/* Standard praxis to use item and not user I think 
(apparently not since they use user in the solution code for the task below...)
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

let names = users.map(user => user.name)

console.log(names);
*/ 

/*
let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "pete", surname: "Hunt", id: 2};
let mary = {name: "mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = users.map( item => {
    return {
        fullName: `${item.name} ${item.surname}`,
        id: item.id,
    };
});

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
*/

/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
};
*/

/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
    console.log(sum);
    return sum / arr.length;
}

let averageAge = getAverageAge(arr);
console.log(averageAge);
*/

/* Unnecessarily difficult solution
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
    let initialValue = {};
    let reduce = users.reduce((accumulator, currentValue) => {
        let userId = currentValue.id;
        console.log(userId);
        return accumulator = {...accumulator, [userId]: {id: `${currentValue.id}`, name: `${currentValue.name}`, age: `${currentValue.age}`}}
   }, initialValue);
   return reduce;
}

let usersById = groupById(users);
console.log(usersById);
*/ 