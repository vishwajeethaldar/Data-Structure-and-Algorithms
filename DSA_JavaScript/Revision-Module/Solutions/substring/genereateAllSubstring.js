// Generate all substrings
/*
// Input 
1
4 
aman

Sample Output
a 
am 
ama 
aman 
m 
ma 
man 
a 
an 
n
*/


// Solution 
function generateALlSubstr(N,A){
    //write code here
       for(let i=0; i<N; i++){
           str = ''
           for(let j=i; j<N; j++){
               str = str+A[j]
               console.log(str)
           }
       }
  }
  