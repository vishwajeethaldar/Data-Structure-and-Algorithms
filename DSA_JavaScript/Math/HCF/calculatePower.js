 const calculatePower = (num, power)=>{
    
    if(power===0 && num>0){
        return 1;
    }

    if(power===0 && num===0){
        return undefined;
    }

    if(power===1){
        return num;
    }


    if(power>1){
        let powerVal = 1
        while(power>0){
            powerVal = powerVal * num;
            power--;
        }
        return powerVal;
    }

}


const calculateRoot = (val)=>{
    
}
console.log(calculatePower(10, 3))