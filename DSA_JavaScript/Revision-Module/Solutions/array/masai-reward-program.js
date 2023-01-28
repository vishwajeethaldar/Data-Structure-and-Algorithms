/*
There are n employees, each with a unique id from 0 to n - 1.

You are given a 2D integer array logs where logs[i] = [id[i], leaveTime[i]] where:

id[i] is the id of the employee that worked on the ith task, and

leaveTime[i] is the time at which the employee finished the ith task. All the values leaveTime[i] are unique.

Note: that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.

The employee that worked the task with the longest time will be given coupons for 1 week vacation in Goa!!!

If there are multiple employees that have worked for the longest duration task, the winner will be the one among them whose id is the smallest.

Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

*/
function masaireward(M, N, arr){
    let maxDuration = -Infinity;
    let sameworksdurations = []
    let sameDurationsId = []
    let empId = 0;
    for(let i=0; i<N; i++){
            
        let x = 0
        if(i===0){
            x = arr[i][1]
            
        }else{
            x = arr[i][1]-arr[i-1][1]
        }
        
        if(x>maxDuration){
            maxDuration = x;
            empId = arr[i][0];
        }else if(x === maxDuration && empId>arr[i][0]){
           empId =arr[i][0];
        }
       
    }

     console.log(empId)
}
