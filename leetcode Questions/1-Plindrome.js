// Q 1
// An integer is a palindrome when it reads the same forward and backword.
// x = 121 true
// x = 123 false


//using js inbuilt function
const isPalindrome = (x) => {
    return x<0 ? false : x === +x.toString().split('').reverse().join('');
}
console.log(isPalindrome(121));

//using normal way
const isPalindrome = (x) => {
    let copyx = x;
    let rev = 0;
     while (x>0) {
    let lastdigit = x % 10;
    rev = rev*10 + lastdigit;
         x = parseInt(x / 10);     
        
    }
    console.log(copyx);
    console.log(rev);
    return rev === copyx ? true : false;
}
console.log(isPalindrome(123));
