import primeFactors from './primeFactors.js';
import commonFacotrs from './commonInArray.js';

const hcfSplitMethod   =  (arr)=>{
    let factors = []
    let highestCommonFactor = 1
   
    for(let value of arr){
        let commonPrimeFactors = primeFactors(value*10); // Multiplying 10 to deal with decimals
        factors.push(commonPrimeFactors);        
    }

    let CommonFactors = commonFacotrs(factors);

    for(let i=0; i<CommonFactors.length; i++){
        highestCommonFactor = highestCommonFactor * CommonFactors[i];
    }

    
    console.log(highestCommonFactor/10); // dividing 10 to deal with decimals
}





hcfSplitMethod([24.3,68.4]);

