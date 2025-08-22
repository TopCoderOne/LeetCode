// Leetcode: https://leetcode.com/problems/search-insert-position
// Level: Easy
// Task: Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return start;
};