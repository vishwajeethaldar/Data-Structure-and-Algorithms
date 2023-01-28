
function romanToDecimal(str){ 
     
    let ans = 0;

       let i = 0;

       while(i<str.length){

           let inc = 1;
           let sum = 0;
           if(str[i]==="I" && str[i+1]==="V"||str[i+1]==="X"){
               if(str[i+1]==="V"){
                   sum = 4
                   inc = 2
               }
               if(str[i+1]==="X"){
                   sum = 9
                   inc = 2
               }
           }else if(str[i]==="I"){
               sum = 1
               inc = 1
           }
           
           if(str[i]==="V"){
               sum = 5
               inc = 1
           }

           if(str[i]==="X" && str[i+1]==="L"||str[i+1]==="C"){
               if(str[i+1]==="L"){
                   sum = 40
                   inc = 2
               }
               if(str[i+1]==="C"){
                   sum = 90
                   inc = 2
               }
           }else if(str[i]==="X"){
               sum = 10
               inc = 1
           }
           if(str[i]==="L"){
               sum = 50
               inc = 1
           }

           
           if(str[i]==="C" && str[i+1]==="D"||str[i+1]==="M"){
               if(str[i+1]==="D"){
                   sum = 400
                   inc = 2
               }
               if(str[i+1]==="M"){
                   sum = 900
                   inc = 2
               }
           }else if(str[i]==="C"){
               sum = 100
               inc = 1
           }

           if(str[i]==="D"){
               sum = 500
               inc = 1
           }

           if(str[i]==="M"){
               sum = 1000
               inc = 1
           }

           ans = ans+sum
           i = i+inc
          
       }
      return ans

   }