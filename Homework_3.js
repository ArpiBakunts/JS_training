//Write a recursive function to determine whether all digits of the number are odd or not.
// zero is even
function allNumOdd(number) {
    number = Math.abs(number);
    if (number < 10) {
        return number % 2 !== 0;
    }

    if (number % 2 === 0) {
        return false;
    }

    return allNumOdd(Math.floor(number / 10));
}


//2. Given an array of numbers. Write a recursive function to find its minimal positive element.
// (if such element does not exist, return -1)․
function findMinPositive(array) {
    let hasPositive = false,
        smallest,
        minPositive = function (array) {
            if (array.length === 0) {
                return smallest;
            }

            let first = array.shift();
            if (first >= 0) {
                if (first < smallest || smallest === undefined) {
                    smallest = first;
                    hasPositive = true;
                }
            }

            let result =  minPositive(array);

            if (hasPositive === false) {
                return -1
            }

            return result;
        };
    return minPositive(array);
}


// 3.Write a recursive function which receives a number as arguments and returns the fibonacci sequence as array.
function fiboArray(n) {
    let result;

    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return [1]
    }

    if (n === 2) {
        return [1, 1]
    }

    result = fiboArray(n - 1);
    result.push(result[n - 2] + result[n - 3]);
    return result;
}


// 4. Given an array of nested arrays. Write a recursive function that flattens it.
// (Hint create function that concats arrays).
function flattenArrays(array) {
    let flatArr = [];
    for ( let i = 0; i < array.length; i++) {
        Array.isArray(array[i]) ? flatArr = flatArr.concat(flattenArrays(array[i])) : flatArr.push(array[i]);
    }
    return flatArr;
}


//5. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.
function digitSum(number) {
    number = Math.abs(number);
    if (number < 10) {
        return number;
    }

    let lastDigit = number % 10;
    let remainingNumber = Math.floor(number / 10);

    return digitSum(lastDigit + digitSum(remainingNumber));
}


