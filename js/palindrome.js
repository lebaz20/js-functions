/**
 * Is passed string a palindrome or not
 * 
 * @param {string} string a string that may be a palindrome
 * @returns {Boolean} whether it is a palindrome or not
 */
function isPalindrome(string) {
    // convert string to array
    // , then reverse it 
    // , then glue it again
    // , then compare that output to the original string
    // if original string matches reversed one
    // , then it's a palindrome
    return string == string.split('').reverse().join('');
}