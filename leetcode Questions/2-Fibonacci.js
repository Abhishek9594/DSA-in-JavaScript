// Q2
// Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21, ....
// f(0) =0, F(1) = 1
// f(n) = f(n-1) + f(n-2), for n>1

// input n=3 ---> output 2

// using array
const fib = function (n) {
  const a = [0, 1];
  for (let i = 2; i <= n; i++) {
    a.push(a[i - 1] + a[i - 2]);
  }

  return a[n];
};
console.log(fib(7));

// using normal way
const fib = (x) => {
  x=x - 1;
  let n1 = 0;
  let n2 = 1;
  for (let i = 0; i < x; i++){
    console.log(n1)
    let nextnum = n1 + n2;
    n1 = n2;
    n2 = nextnum;
   
  }
  return n1;
}
console.log(fib(5))
 
using recursion

const fib = (x) => {
  if (x <= 1) return x;

  const num = fib(x - 1) + fib(x - 2);
  return num;
}

console.log(fib(7));
