// Find a peak element which is not smaller than its neighbours
// Input: array[]= {5, 10, 20, 15}
// Output: 20

let  A2  = [5, 10, 20, 15];


function findPeakElement(A:Array<number>){
    let ans:Array<number> = []
    for(let i=0;i<A.length; i++){
        if(i===0){
            if(A[i]>A[i+1]){
                ans.push(A[i]) 
            }
        }

        if(i>0 && i<A.length-1){
            if(A[i]>A[i+1] &&  A[i]>A[i-1]){
                ans.push(A[i]) 
            }
        }

        if(i===A.length-1){
            if(A[i]>A[i-1]){
                ans.push(A[i]) 
            }
        }

      
    }
    console.log(ans)
}

findPeakElement(A2)