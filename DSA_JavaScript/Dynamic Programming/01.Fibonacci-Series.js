// 01.Fibonacci-Series.js

/*
        fib Series = 0, 1, 2, 3, 5, 8, 13, 21 -  -  -  -

*/


// Recursive Approach

const fib = (n)=>{

    if(n<=2){
        return 1
    }

  return  fib(n-1)+fib(n-2)
}
// let x = fib(6)
// console.log(x);

// Memoization  Approach

const fibmemo = (n, dp={})=>{

    if(n<=2){
        return 1
    }
    //Dynamic Programming
    if(dp[n]){
        return dp[n]
    }
    dp[n] =   fib(n-1)+fib(n-2)
    return dp[n]
}

let x = fibmemo(40)
console.log(x);