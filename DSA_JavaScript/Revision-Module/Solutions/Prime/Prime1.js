let N=13

function getPrime(N){
    let div = 0
    for(let i=1; i<N; i++){
        if(N%i===0){
            div++;
        }
    }
    if(div>2){
        return "NO"
    }else{
        return "YES"
    }
}

let isPrime = getPrime(N)

console.log(isPrime)

// O(N) Time Complexity