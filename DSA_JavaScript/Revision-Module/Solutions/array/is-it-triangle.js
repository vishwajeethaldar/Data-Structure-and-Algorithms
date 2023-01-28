// Is it Triangle ?

/*
Description

Given the lengths of 3 sticks, find out if it is possible to form a triangle of a positive area. (Non-Degenerate Triangle).
*/

function isItTriangle(arr){
    
    if(arr[0]+arr[1]>arr[2] && arr[0]+arr[2]>arr[1] && arr[2]+arr[1]>arr[0]){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
