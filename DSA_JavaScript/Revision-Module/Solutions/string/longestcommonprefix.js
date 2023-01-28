let strings = ["geeksforgeeks", "geeks", "geek", "geezer"]

function getPrefix(strings){
    let min = Infinity;

    for(let i=0; i<strings.length; i++){
        if(strings[i].length<min){
            min =   strings[i].length
        }
    }

    let start = 0
    let ans = ""
    let isEnd = false;
    while(start<min){
        let x = strings[0][start]

        for(let i=1; i<strings.length; i++){
            if(strings[i][start]!==x){
                isEnd = true;
                break;
            }
        }
        if(isEnd){
            break;
        }
        ans = ans+x;
        start++;
    }

    console.log(ans)
}
getPrefix(strings)