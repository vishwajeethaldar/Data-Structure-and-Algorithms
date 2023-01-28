// javascript program to generate power set in
// lexicographic order.

function permutateRecursion(str, n, ind, cur){
    if (ind == n) {
        return;
    }
    console.log(cur)
    for (var i = ind + 1; i < n; i++) {
        cur += str[i];
        permutateRecursion(str, n, i, cur);
        cur = cur.substring(0, cur.length - 1);
    }

    return;
}

function powerSet(str) {
    var arr = str.split("");
    arr.sort();
    permutateRecursion(arr, str.length, -1, "");
}

var str = "cab";
powerSet(str);