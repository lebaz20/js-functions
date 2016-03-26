/**
 * Count values' occurrences in an array
 * 
 * @param {array} array of possibly repeated occurrences
 * @returns {object} object of array values' counts
 */
function countOccurrences(array) {
    // countMap holds occurrences count per each value in array
    // countMap initial value is {} empty object 
    // , then if word is found inside countMap
    // , then  it's value is incremented by one 
    // or set to one if it doesn't exist
    return array.reduce(function (countMap, word) {
        countMap[word] = ++countMap[word] || 1;
        return countMap;
    }, {});
}