/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    

    let start= 0;
    let end = 1;
 
    // while(start<nums.length && end<nums.length){
    //         console.log(start, end)
    //         if(nums[start]+nums[end]===target){
    //             break;
    //         }else if(nums[start]+nums[end]<target){
    //             end++
    //         }else if(nums[start]+nums[end]>target){
    //             start++
    //         }

    // }

for(let i=0; i<nums.length-1; i++){
        let sum = 0
        let end 
        for(let j=i+1; j<nums.length; j++){
            sum = nums[i]+nums[j]
            if(sum===target){
                end= j
                break;
            }
        } 
        if(sum===target){
           return [i, end]
          
        }  
    }

    
};


function twoSumTry(nums, target){
        let indexes = []

        for(let i=0; i<nums.length; i++){
            indexes.push(i)
        }

        // bubble Sort
        for(let i=0; i<nums.length; i++){
            for(let j=0; j<nums.length-i; j++){
                if(nums[j]>nums[j+1]){
                    swap(nums,j, j+1)
                    swap(indexes, j, j+1)
                }
            }
        }

        // finding target value using two pointer

        let start = 0;
        let end = nums.length-1

        while(start<end){
            if(nums[start]+nums[end]===target){
                    break;
            }else if(nums[start]+nums[end]<target){
                start++
            }else{
                end++
            }
        }
        console.log(indexes[start],indexes[end])      
    
}

function swap(arr,i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

twoSumTry([7,3,2,4,6,8], 13)