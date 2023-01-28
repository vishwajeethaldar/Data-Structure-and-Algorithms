const loop = (num)=>{    
    for(let i =1; i<=num; i++){
        let val = "";
        for(let j=1; j<=num; j++){
           val = val + " " + j       
        }
        console.log(val);
        
    }
}
loop(10)