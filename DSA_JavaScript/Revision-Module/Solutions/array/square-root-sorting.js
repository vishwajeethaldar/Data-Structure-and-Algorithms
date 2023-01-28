/*
Given an array of N space-separated integers, you have to sort the given array in increasing order of their absolute value integer square root. If two numbers have the same integer square root value then the smaller number comes first in the sorted array.
*/
function squareSort(N, arr){
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N-1; j++){
          
           let root1 = Math.floor(Math.abs(arr[j])**0.5)
           let root2 = Math.floor(Math.abs(arr[j+1])**.5)
            if(root1>root2){
                 swap(arr, j, j+1)
            }
        
            if(root1===root2 && arr[j]>arr[j+1]){
                swap(arr, j, j+1)
            }
          
        }
    }
    console.log(arr.join(" "))
}
