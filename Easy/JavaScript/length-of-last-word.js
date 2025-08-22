// Leetcode: https://leetcode.com/problems/length-of-last-word
// Level: Easy
// Task: Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let startIndex = null;
    
    for (let i = s.length; i >= 0; i--) {
        if (s[i] === ' ') {
            startIndex = i + 1;
            break;
        }
    }

    s = s.substr(startIndex, s.length);
    return s.length;
};