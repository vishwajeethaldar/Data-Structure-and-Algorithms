const evenOdd = (one, two)=>{
    if(one%2==0 && two%2==0 ){

        console.log(" EVEN Number");
    }
    else if(one%2!=0 && two%2!=0){
        console.log("Odd Number");
    }
    else{
        console.log("Even-ODD");
    }

}

evenOdd(3, 4)