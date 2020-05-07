//1. Given an array. Write a recursive function that removes the first element and returns
//the given array. (without using arr.unshift(),assign second element to first, third element to second...)
function removeFirstItem(array, i = 0) {
    if(i  === array.length - 1 || array.length === 0) {
        array.pop();
        return array;
    }

    [array[i], array[i + 1]]  = [array[i + 1], array[i]];
    i++;
    return removeFirstItem(array, i);
}


// 2. Given an object. Invert it (keys become values and values become keys).
// If there is more than key for that given value create an array.
function invert(object) {
    for (let key in object) {
        let newKey = object[key];

        object.hasOwnProperty(newKey) ? object[newKey] = Array(object[newKey]).concat(key) : object[newKey] = key;
        delete object[key];
    }
    return object;
}


//3. Given the list of the following readers(bookList array): Output the books sorted by the percent in descending order which readStatus is true.
function sortedList(listOfBooks) {
    let finalList = [];
    for (let item in listOfBooks) {
        let currentItem = listOfBooks[item];
        if (currentItem.readStatus) {
            finalList.push(currentItem)
        }
    }

    let hasChanges = false;
    while (!hasChanges) {
        hasChanges = true;
        for (let i = 0; i < finalList.length - 1; i++) {
            if (finalList[i + 1].percent > finalList[i].percent) {
                hasChanges = false;
                [finalList[i], finalList[i + 1]] = [finalList[i + 1], finalList[i]];
            }
        }
    }
    return finalList;
}

let bookList = [{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 },
{ book: "After Dark", readStatus: true, percent: 70 }];


//4.  Given an array and a number N.  Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())
function rotateArray(array, number, result = []) {
    if (number > array.length) {       //if number is much bigger than array.length
        number = number % array.length;
    }

    while (number < 0) {         //if number is negative and abs(number) is much bigger than array.length
        number = number + array.length;
    }

    if (array.length <= number) {
        return result;
    }

    result.unshift(array.pop());
    rotateArray(array, number, result);

    return result.concat(array)
}


//5. Create a function that builds a tree like object given an array with object which contains parent and id properties.
var treeNodes = [
    {parent: null, id:0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
];

function constructObjectTree(nodes, parent = null) {
    let result = {}, rootNodes;

    rootNodes = nodes.filter(function (node) {
        return node.parent === parent;
    });

    rootNodes.forEach(function(rootNode) {
        return result[rootNode.id] = constructObjectTree(nodes, rootNode.id);
    });

    return result;
}


//6. Write a JavaScript function to get all possible subsets of given length of the given array.
// Assume that all elements in the array are unique.
// Works correctly if Length is 2 or 3
function allPossible(array, length, finalArr = []) {
    if (length < 2) {
        return console.log("Length should be two or greater");
    }

    if (array.length === length) {
        finalArr.push(array);
        return finalArr;
    }

    let temp = [...array];
    while (temp.length !== length - 1) {
        let stop;
        length === 2 ? stop = 1 : stop = temp.length - 2;
        for (let i = 0; i < stop ; i++) {
            let arr = [temp[0], temp[1]];
            while (arr.length !== length) {
                arr.push(temp[2 + i]); // bug is here
            }
            finalArr.push(arr);
        }
        temp.splice(1, 1);
    }
    array.splice(0, 1);
    return allPossible(array, length, finalArr);
}


//7. Create constructor function which instances would be objects with already
// implemented method map (like Array.map) .
function ObjectMap() {
    this.map = function (fn) {
        let result = {};
        for (let x in this) {
            fn(x, this[x]) && (result[x] = fn(x, this[x]))
        }
        return result;
    }
}
