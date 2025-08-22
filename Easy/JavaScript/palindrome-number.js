// Leetcode: https://leetcode.com/problems/palindrome-number
// Level: Easy
// Task: Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = String(x);
    let numReverse = num.split('').reverse().join('');

    return  num === numReverse ? true : false;
};