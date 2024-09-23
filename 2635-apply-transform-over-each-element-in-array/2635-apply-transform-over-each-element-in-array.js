/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = fn(arr[i], i);
        resultArray.push(element);
    }

    return resultArray;
};