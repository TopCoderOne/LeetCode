// Leetcode: https://leetcode.com/problems/palindrome-number/description/
// Level: Easy
// Task: Palindrome Number

function isPalindrome(x: number): boolean {
    let str: string = String(x);
    let strRev: string = str.split("").reverse().join("");

    return str === strRev ? true : false;
};