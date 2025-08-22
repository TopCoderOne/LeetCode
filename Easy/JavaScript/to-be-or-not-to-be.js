// Leetcode: https://leetcode.com/problems/to-be-or-not-to-be
// Level: Easy
// Task: To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const object = {
        toBe: (otherVal) => {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },

        notToBe: (otherVal) => {
            if (val === otherVal) {
                throw new Error("Equal");
            } else {
                return true;
            }
        },
    }

    return object;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */