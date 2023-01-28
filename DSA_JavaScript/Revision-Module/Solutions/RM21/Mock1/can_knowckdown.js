/*
    Description

Recently Akhil decided to improve his pistol shooting skills. Today his coach offered him the following exercise. He placed n cans in a row on a table. Cans are numbered from left to right from 1 to n. Akhil has to knock down each can exactly once to finish the exercise. He is allowed to choose the order in which he will knock the cans down.

Akhil knows that the durability of the i-th can is ai.It means that if Akhil has already knocked x cans down and is now about to start shooting the i-th one, he will need (ai⋅x+1) shots to knock it down.
You can assume that if Akhil starts shooting the i-th can, he will be shooting it until he knocks it down.

Your task is to choose such an order of shooting so that the number of shots required to knock each of the n given cans down exactly once is minimum possible.
*/

function canKnockDown(N, arr){
    
    let index = []
    
    for(let i=1; i<=N; i++){
        index.push(i)
    }
    
    for(let i=0; i<N-1; i++){
        for(let j=0; j<N; j++){
            if(arr[j]<arr[j+1]){
                swap(arr, j, j+1)
                swap(index, j, j+1)
            }
        }
    }
    
    let prev = 0;
    let x = 0
    let ans = 0;
    
   for(let i=0; i<N; i++){
       
       if(i===0){
           x++;
       }
       if(i>0){
          prev =  prev+(arr[i]*x)+1 
          x++
       }
   }
   console.log(prev+1)
   console.log(index.join(" "))
}

function swap(arr, i, j){
    let temp  = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}