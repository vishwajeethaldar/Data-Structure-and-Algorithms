const divideMothod = (nums:Array<number>)=>{
    let hcf =  hcfOfTwoNums(nums[0], nums[1])
    for(let i=2; i<nums.length; i++){
        hcf = hcfOfTwoNums(nums[i], hcf);
    }
    return hcf
}

const hcfOfTwoNums  = (num1:number, num2:number)=>{

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


export default divideMothod;
// 
// console.log(divideMothod([84,90]))
// console.log(divideMothod([45, 20,20, 45])).