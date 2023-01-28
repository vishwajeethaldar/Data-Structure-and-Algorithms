
const primeFactors = (num)=>{
    let primeFactors = [];
    let start = 2;

    while(num>=start){
        if(num%start===0){
            primeFactors.push(start);
            num = num/start;
        }else{
            start++;
        }
    }
    return primeFactors
}


export default primeFactors