// Compare first with first and second
// Compare the biggest one with first, second and third
// Compare the biggest one with first, second, third and fourth
// Compare the biggest one with first, second, third, fourt and fifth

// Compare the biggest one of the above with second
// Compare the biggest one with second and third
// Compare the biggest one with second, third and fourth
// Compare the biggest one with second, third, fourth and fifth

// Compare the biggest one with third
// Compare the biggest one with third and fourth
// And so on

// Let's start with the array having a size of 4, later we'll change to dynamic



function getMaxSubSum(arr) {

    console.log(arr);

    let largestSum = 0;
    let currentSum = 0;

    let currentIndex = 0;

    let startIndex = 0;
    let endIndex = 0;

    while(startIndex < arr.length) {
        currentIndex = startIndex;
        console.log("startIndex is: " + startIndex);
        while(endIndex < arr.length) {
            console.log("endIndex is " + endIndex);
            for(currentIndex; currentIndex <= endIndex; currentIndex++) {
            currentSum += arr[currentIndex];
            }
            console.log("currentSum is " + currentSum);

            if(currentSum > largestSum) {
            largestSum = currentSum;
            }
            currentSum = 0;
            endIndex++;
            currentIndex = startIndex;
            console.log("current sum should be 0 " + currentSum);
            console.log("largest sum is: " + largestSum);

        }   
        startIndex++;
        endIndex = startIndex;
    }
    return largestSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));



/*
let arrOne = [3, 9, -8, 7, -13, 25];

let largestSum = 0;
let currentSum = 0;

let currentIndex = 0;

let startIndex = 0
let endIndex = 1;

largestSum = arrOne[0];

while(startIndex < arrOne.length) {
    while(endIndex < arrOne.length) {
        for(currentIndex; currentIndex <= endIndex; currentIndex++) {
        currentSum += arrOne[currentIndex];
        }

        if(currentSum > largestSum) {
        largestSum = currentSum;
        currentSum = 0;
        }
        endIndex++;
    }   
    startIndex++;
}
console.log(largestSum);
*/

/*

if (largestSum < (arrOne[0] + arrOne[1])) {
    largestSum = (arrOne[0] + arrOne[1])
    console.log(largestSum);
}

*/
