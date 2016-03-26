/**
 * Get single occurrence for each of array values
 * 
 * @param {array} arrayOfNumbers array of numbers
 * @returns {array} unique array
 */
function getUniqueArray(arrayOfNumbers) {
    return arrayOfNumbers.filter(function (value, index) {
        // keep value if it is the last occurrence inside array only
        return arrayOfNumbers.lastIndexOf(value) === index;
    });
}