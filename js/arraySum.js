/**
 * Get sum of array values
 * 
 * @param {array} arrayOfNumbers array of numbers
 * @returns {int} sum of array values
 */
function getArraySum(arrayOfNumbers) {
    var sum = arrayOfNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    return sum;
}