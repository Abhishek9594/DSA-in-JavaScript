// Q2
// Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21, ....
// f(0) =0, F(1) = 1
// f(n) = f(n-1) + f(n-2), for n>1

// input n=3 ---> output 2

const fib = function (n) {
  const a = [0, 1];
  for (let i = 2; i <= n; i++) {
    a.push(a[i - 1] + a[i - 2]);
  }

  return a[n];
};

console.log(fib(7));
