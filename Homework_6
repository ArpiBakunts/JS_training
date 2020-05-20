// 1. Given an array. Determine whether it consists only from unique elements or not.
function uniqueArray(array) {
    let newArr = [];
    for (let i in array) {
        if (newArr.includes(array[i])) {
            return "Not unique array";
        } else {
            newArr.push(array[i]);
        }
    }
    return "Unique Array!!!";
}

//2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.
function evenRoot(array) {
    let sum = 0;
    for (let item in array) {
        if (Math.sqrt(array[item] % 2 === 0)) {
            sum += array[item];
        }
    }
    return sum;
}

//3. Check whether string is palindrome, or not.
//if there is space won't be trimmed
function palindrome(yourString) {
    let start = 0,
        end = yourString.length - 1;
    for (let i of yourString) {
        if (yourString[start] === yourString[end]) {
            start++;
            end--;
        } else {
            return "Not palindrome";
        }
    }
    return "Palindrome";
}

//4. Given a word and a list of possible anagrams, select the correct sublist.
function anagrams(array, word) {
    let finalArr = [];
    let counter = 0;
    
    let filtered = array.filter(function(value, index) {
        return array[index].length === word.length;
    });
    
    for (let item in filtered) {
        counter = 0;
        for (let char of filtered[item]) {
            if (word.includes(char)) {
                counter++;
                if (counter === word.length) {
                    finalArr.push(filtered[item]);
                }
            }
        }
    }
    return finalArr;
}


