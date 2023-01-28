let N=13

function getPrime(N){
    let div = 0
    let mid = Math.floor(N**0.5)
    for(let i=1; i<mid; i++){
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

// Log(N) Time Complexity