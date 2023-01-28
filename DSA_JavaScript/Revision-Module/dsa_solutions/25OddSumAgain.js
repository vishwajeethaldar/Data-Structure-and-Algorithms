const OddSum = (num)=>{
    //let arr = []
    let sum = 0
    for(let i=1; i<=num; i++){
        if(i%2!=0){
            sum = sum + i;
        }
    }
    console.log(sum);
}

OddSum(6)