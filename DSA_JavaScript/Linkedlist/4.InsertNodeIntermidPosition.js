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

let list  = [1,2,3,4]

let linkedList = null
for(let value  of list){
    linkedList = addNodeatEnd(linkedList, value)
}



// function to insert node at intermediate Position

function insertPost(list, pos, value){
    let temp = list;

    while(pos>2){
        temp = temp.next;
        pos--
    }
  
    let node = new LinkedListNode(value)
    let prev = temp.next;
    node.next = prev;
    temp.next = node
    // console.log(list);
    return list;
}
linkedList = insertPost(linkedList,3,5)
console.log(linkedList);

