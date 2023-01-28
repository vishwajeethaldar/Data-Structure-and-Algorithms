
const commonInArrays = (factors)=>{
    let CommonFactors = [];

    while(factors[0].length>0){
        
        let isCommon = true;

        for(let j=1; j<factors.length; j++){
            let indexOfCommonFactor = factors[j].indexOf(factors[0][0])
            
            if(indexOfCommonFactor===-1){
                isCommon = false;
                break;
            }else{
                factors[j].splice(indexOfCommonFactor, 1)
            }
        }

        if(isCommon){
            CommonFactors.push(factors[0][0])
        }
     
        factors[0].shift()  
    }

    return CommonFactors

}

export default commonInArrays