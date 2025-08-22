// Leetcode: https://leetcode.com/problems/allow-one-function-call
// Level: Easy
// Task: Allow One Function Call


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let executionCount = false;
    return function(...args){
        if (executionCount === true) return undefined;
        executionCount = true;
        return fn(...args);
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */