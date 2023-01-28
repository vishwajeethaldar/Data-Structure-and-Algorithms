const divideMothod = (nums)=>{
    let hcf =  hcfOfTwoNums(nums[0], nums[1])
    for(let i=2; i<nums.length; i++){
        hcf = hcfOfTwoNums(nums[i], hcf);
    }
    return hcf
}

const hcfOfTwoNums  = (num1, num2)=>{

    while(num1>0 && num2>0)
    {
   
        if(num1>num2){
            num1 = num1%num2
        }else{
            num2 = num2%num1
        }
    }
    return num1||num2
}

console.log(divideMothod([1365, 1584,1872]))
console.log(divideMothod([84,90]))
console.log(divideMothod([1266, 1461,1863]))