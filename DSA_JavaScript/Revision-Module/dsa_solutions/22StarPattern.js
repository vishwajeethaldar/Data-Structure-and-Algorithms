const star = (num)=>{
    for(let i=0; i<num; i++ ){
        let arr = [];
        for(let j=0; j<num; j++){
            arr.push("*")
        }
        console.log(arr.join(" "));
    }
}

star(3)