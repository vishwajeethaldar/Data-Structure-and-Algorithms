const Compare=(one, two,three,four)=>{
    if(one>two || three>four){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

Compare(10,25,2,3) // false

Compare(10,25,20,3) // true