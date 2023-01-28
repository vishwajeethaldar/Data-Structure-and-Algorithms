// R01 denote Random 01
/* if given no is 7
the output is
*******     *****          ***
**   **     ** **          * *
* * * *     * * *          *** 
*  *  *     ** **           
* * * *     *****
**   **     
*******     

*/

const Pattern = (num)=>{
    let arr =  [];
    let mod = num%2;
    let remain = num-mod;
    for (let i=1; i<=num; i++){
        for(j=1; j<=num; j++){
            if(j<=mod){

            }
            arr.push("*")
            
        }
        console.log(arr);
    }    
}
Pattern(7)
