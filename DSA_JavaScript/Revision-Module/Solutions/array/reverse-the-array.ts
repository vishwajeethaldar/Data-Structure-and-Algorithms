// revrse the array
let  A = [5,4,3,2,1]


// Solution Time Complexity = O(N), Space Complexity = O(1)

function swap(A:Array<number>, l:number, r:number){
        let temp = A[l]
        A[l] = A[r];
        A[r] = temp 
}
function reverseArray1(A:Array<number>){
        let l = 0;
        let r= A.length-1;
        while(l<r){
            swap(A,l,r)
            l++;
            r--;
        }

        return A
}   


// Solution Time Complexity = O(N), Space Complexity = O(N)
function reverseArray2(A:Array<number>){
    let stack:Array<number> = []
    for(let i=A.length-1; i>=0; i--){
        stack.push(A[i])
    }
    return stack
}



let ans = reverseArray2(A)
console.log(ans);
