// Leetcode: https://leetcode.com/problems/pascals-triangle
// Level: Easy
// Task: Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

    if (numRows < 1) return triangle;

    for (let i = 0; i < numRows; i++) {
        const element = [];
        element.push(1);

        for (let j = 1; j < i; j++) {
            element.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        if (i > 0) element.push(1);

        triangle.push(element);
    }

    return triangle;
};