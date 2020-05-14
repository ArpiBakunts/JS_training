//1. Given a sorted array and an element from that array. Find the index of that element using binary search.
function binarySearch(array, findThisNum, length = Math.floor(array.length / 2)) {
    if (array[length - 1] === findThisNum) {
        return length - 1;
    }
    if (findThisNum < array[length]) {
        return binarySearch(array, findThisNum, Math.floor(length/ 2));
    }
    if (findThisNum > array[length]) {
        return binarySearch(array, findThisNum, Math.floor((array.length  + length) / 2));
    }
    return length;
}


var treeNodes = [
    {id: "root", children:[1, 2]},
    {id: 1, children: [3, 4]},
    {id: 2, children: [5]},
    {id: 3, children: []},
    {id: 4, children: [6]},
    {id: 5, children: []},
    {id: 6, children: []}
];

function constructObjectTree(nodes, id = "root") {
    let result = {}, rootNodes;

    rootNodes = nodes.filter(function (node) {
        return node.id === id;
    });

    rootNodes.forEach(function(rootNode) {
        for (let i = 0; i < rootNode.children.length; i++) {
            result[rootNode.children[i]] = constructObjectTree(nodes, rootNode.children[i]);
        }
    });

    return result;
}

console.log(constructObjectTree(treeNodes));


