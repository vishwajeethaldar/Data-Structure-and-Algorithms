const loop = (num)=>{    
    for(let i=1; i<=num; i++){
        let arr = []
        for(let j=1; j<=num; j++){
            arr.push(j)     
        }
        console.log(arr.join("#"));
        
    }
}
loop(3)