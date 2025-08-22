// Leetcode: https://leetcode.com/problems/counter-ii
// Level: Easy
// Task: Counter II


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentСount = init;
    const counterOperations = {
        increment: () => ++currentСount,
        decrement: () => --currentСount,
        reset: () => currentСount = init,
    }

    return counterOperations;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */