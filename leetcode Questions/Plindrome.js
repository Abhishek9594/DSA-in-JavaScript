// Q 1
// An integer is a palindrome when it reads the same forward and backword.
// x = 121 true
// x = 123 false
const isPalindrome = (x) => {
    return x<0 ? false : x === +x.toString().split('').reverse().join('');
}
console.log(isPalindrome(121));