
function swap(arr, j, i){
	
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = arr[i]
	
}

function partition(arr, low, high){
	
	let pivot = arr[high];
	
	let i = (low - 1);
	
	for(let j=low; j<=high; j++){
		if(arr[j]<pivot){
			i++;
			swap(arr, j, i)
		}
	}
	
	swap(arr, i + 1, high);
	return i+1
}


function quickSort(arr, low, high) {
    if (low < high){
        let pi = partition(arr, low, high);     
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

let arr = [5,2,3,4,6]

quickSort(arr, 0, arr.length-1)

console.log(arr)