function reverseWord2(str){
    let ans = ""
    for(let i=0; i<str.length; i++){
        ans = str[i]+ans
    }
    console.log(ans)
}

function reverseWord(str){
    str = str.trim().split("")
    for(let i=0; i<Math.floor(str.length/2); i++){
        swap(str, i, str.length-1-i)
    }
    console.log(str.join(""))
}

function swap(str, i, j){
    let temp = str[i]
     str[i] = str[j]
    str[j] = temp;
}

reverseWord("MOHAN")
