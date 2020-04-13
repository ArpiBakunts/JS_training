// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
function primeNumber(number) {
    if (number <= 1) {
        console.log("Prime numbers should be > 1");
        return;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log("No");
            return;
        }
    }
    return console.log("Yes");
}


// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.
// (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function fibonacciNthNumber(number) {
    if (number < 0) {
        console.log("Number cannot be negative");
        return;
    }

    let fibonacciArray = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
    return fibonacciArray[number];
}


//3. Given a number n( n> 0 ). Print Fibonacci series up to n
// Arpi - I take "up to n" as including n.
function fibonacciSeries(n) {
    if (n <= 0) {
        console.log("Number cannot be negative or zero");
        return;
    }

    let fibonacciArray = [0, 1];
    for (let i = 2; n >= fibonacciArray[i - 1] + fibonacciArray[i - 2]; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
    return fibonacciArray.join(", ");
}


// 4. Insert a number. Calculate product and sum of the digits of the number.
// If product is divisible by the sum, print the quotient, otherwise print the remainder.
function productAndSum(number) {
    let numArray = Math.abs(number).toString().split("");
    let sum = 0, product = 1, i = 0;

    for (i; i < numArray.length; i++) {
        sum += parseInt(numArray[i]);
        product *= numArray[i];
    }

    if (product % sum === 0) {
        console.log(`Quotient is ${product / sum}`);
    } else if (product % sum > 0) {
        console.log(`Remainder is ${product % sum}`);
    } else {
        console.log("Cannot calculate.");
    }
}


// 9. Given three numbers a, b (a ≤ b) and num.
// Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).
function evenlySpaced(a, b, num) {
    if (a > b) {
        console.log("a should be smaller or equal to b");
        return;
    }

    if (num === 1) {
        console.log(a);
        return;
    }

    let array = new Array(num);
    array[0] = a;
    array[array.length - 1] = b;

    let step = (b - a) / (num - 1);
    for (let i = 1; i < num - 1; i++) {
        array[i] = array[i - 1] + step;
    }
    return array;
}


// 10. Given an array of numbers. Find the index of the second maximum element.
function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a === b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
}

function secondMaxInArray(array) {
    if (array.length > 1) {
        let newArray = [...array].sort(compare);
        let secondMaxIndex = array.indexOf(newArray[newArray.length - 2]);
        return console.log(secondMaxIndex);
    } else {
        return console.log("Array must have more than 2 items");
    }
}


// 11. Given an array of numbers, padding amount and repeat count.
// Pad the array in the following way:
//    the padding amount specifies how many elements should be taken from the array edges,
//    the repeat amount specifies how many times the pad should be repeated.
// Also, you should check that  padding amount <= length of array.
function padding(array, padAmount, repeat) {
    if (padAmount > array.length) {
        console.log("Invalid padding amount");
        return;
    }

    let resultArray = [...array];
    for (let i = 0; i < repeat; i++) {
        resultArray.unshift(array.slice(0, padAmount));
        resultArray.push(array.slice(array.length - padAmount));
    }
    return resultArray.flat(1);
}

