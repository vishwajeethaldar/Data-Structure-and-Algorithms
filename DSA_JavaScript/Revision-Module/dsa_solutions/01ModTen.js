const mod = (num)=>{
    num = num % 10;
    if (num == 0) {
        return "Zero"
    }
    else if(num == 1){
        return "One"
    }
    else if(num == 2){
        return "Two"
    }
    else if(num == 3){
        return "Three"
    }
    else if (num == 4){
        return "Three"
    }
    else if(num == 5){
        return "Five"
    }
    else if(num == 6){
        return "Six"
    }
    else if(num == 7){
        return "Seven"
    }
    else if (num == 8){
        return "Eight"
    }
    else if (num == 9){
        return "Nine"
    }
}

const val = mod(2);

console.log(val);