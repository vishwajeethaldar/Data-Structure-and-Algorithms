const Pattern = (num)=>{
    let arr = []
    for(let i=1; i<=num*num; i++){
        arr.push(i)      
        if(i%num==0){
            console.log(arr.join());
            arr = []
        }
        
    }
}
Pattern(3)
