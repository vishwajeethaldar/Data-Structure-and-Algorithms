// Rotate the array returns back
// Description

// You are given an array of n elements and an integer k, you need to rotate the array by k units


/*
3
2 1
1 2
2 2
1 2
3 1
1 2 3

// output

2 1
1 2
3 1 2
*/


function rotateArray(N,K, arr){
    
    let r = K;
    if(K>N){
       r = Math.floor(K%N) 
    }

    for(let i=N-1, j=r; i>=0&&j>0; i--, j--){
            let x = arr.pop()
            arr.unshift(x)
    }
    console.log(arr.join(" "))
  
}

// Second Method
function rotateArray2(N,K, arr){
    
    let r = K;
    if(K>N){
       r = Math.floor(K%N) 
    }
    let x = arr.splice(N-r,r)
    arr =  [...x,...arr]
    console.log(arr.join(" "))
  
}
