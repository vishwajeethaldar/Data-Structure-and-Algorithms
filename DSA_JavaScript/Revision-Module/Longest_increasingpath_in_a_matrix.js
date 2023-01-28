// Problem Statement
// TODO Longest increasing path in a matrix.js
/*
    Description
    Given anm x nintegersmatrix, return the length of the longest increasing path inmatrix.
    From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
*/

let matrix = [[9, 9, 4, 4],
              [6, 6, 8, 8],
              [4, 3, 2, 1]]
// let matrix = [[3,4,5],[3,2,6],[2,2,1]]
let n = 3;
let m = 4;
// Final Solution I Got.
function longestPath(M, n, m){
    let max = -Infinity
    let dp = new Array(n+1)

    for(let i=0; i<dp.length; i++){
        dp[i] = new Array(m+1).fill(0)   
    }
   
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            max = Math.max(max, calculatePathLength(M, i, j, n, m,dp))
            console.log(max)
          
        }
    }
   
   
}

function calculatePathLength(M,row,col, n, m, dp){
   
    if(row<0||row>=n||col<0||col>=m||M[row][col]===0){
        return 0
    }
  
    let x = M[row][col]
   
    M[row][col]=0

    console.log("Before ",row, col, x)
   let xyz =  Math.max(
        row>0&&M[row-1][col]>x?1+calculatePathLength(M, row-1, col, n, m,dp):0,
        row<n-1&&M[row+1][col]>x?1+calculatePathLength(M, row+1, col, n, m,dp):0,
        col<m-1&&M[row][col+1]>x?1+calculatePathLength(M, row, col+1, n, m,dp):0,
        col>0&&M[row][col-1]>x?1+calculatePathLength(M, row, col-1, n, m,dp):0
    )
    console.log("After",row, col, x,xyz)
    M[row][col]=x
    return xyz
}

// function calculatePathLength(M,row,col, n, m, dp){
//     if(row<0||row>=n||col<0||col>=m||M[row][col]===0){
//         return 0
//     }
    
//     let val = M[row][col]

//     M[row][col] = 0
   
//     if(dp[row][col]!==0){
//         return dp[row][col]
//     }

//     if(col<m-1 && M[row][col+1]>val){
//         dp[row][col] = (calculatePathLength(M,row,col+1, n, m, dp)+1)
//     }
    
//     if(col>0 && M[row][col-1]>val){
//         dp[row][col] = (calculatePathLength(M,row,col-1, n, m, dp)+1)
//     }

//     if(row<n-1 && M[row+1][col]>val){
//         dp[row][col] = (calculatePathLength(M,row+1,col, n, m, dp)+1)
//     }
    
//     if(row>0 && M[row-1][col]>val){
//         dp[row][col] = (calculatePathLength(M,row-1,col, n, m, dp)+1)
//     }
//     M[row][col] = val
//     return dp[row][col]
// }

longestPath(matrix, n, m)