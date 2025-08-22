// Leetcode: https://leetcode.com/problems/sqrtx
// Level: Easy
// Task: Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = Math.abs(Math.floor(Math.sqrt(x)));
    return result;
};