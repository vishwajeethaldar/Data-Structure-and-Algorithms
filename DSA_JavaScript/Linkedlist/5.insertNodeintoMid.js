class LinkedListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const addNodeatEnd = (list, value)=>{
    if(list===null){
        list = new LinkedListNode(value)
    }else{
        let temp = list
        while(temp.next!==null){
            temp = temp.next;
        }
        temp.next = new LinkedListNode(value)
    }

    return list;
}

let list  = [1,2,3]

let linkedList = null
for(let value  of list){
    linkedList = addNodeatEnd(linkedList, value)
}

// function to insert node at mid Position


function insertPost(list, value){
    let temp = list;
    let len = 0;
    while(temp){
        temp = temp.next
        len++
    }

    let mid = Math.floor(len/2)
    temp = list;
    while(mid>1){
        temp = temp.next;
        mid--
    }
    
    let node = new LinkedListNode(value)
    let prev = temp.next;
    node.next = prev;
    temp.next = node
    return list;
}

linkedList = insertPost(linkedList,3)
console.log(linkedList);