// Left Right Insertion
/*
Description

There is a sequence that contains one 0, A={0}.Additionally, you are given a string of length N, S=s1​ s2​ …sN​ , consisting of L and R.

For each i=1,2,…,N in this order, the following will be done.

If si​ is L, insert i to the immediate left of i−1 in A.If si​ is R, insert i to the immediate right of i−1 in A.

Find the final contents of A.


*/

function leftRightInsertion(N, str){
    
    let A = [0]
    let prev = 0
    for(let i=1; i<=N; i++){
       
        if(str[i-1]==="L"){
            A.splice(prev, 0, i)
        }
        
        if(str[i-1]==="R"){
             A.splice(prev+1, 0, i)
             prev++; 
        }
    }
    console.log(A.join(" "))
    
    
}