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

const addNodeatBeg = (list, value)=>{
    if(list===null){
        list = new LinkedListNode(value)
        return list
    }else{
       let node = new LinkedListNode(value)
       node.next = list
       return node;
    }
}


const createLinkedList = (list)=>{
    let linkedList = null;
    for(let value of list){
        linkedList = addNodeatBeg(linkedList,value);
    }
    return linkedList;
}


let arr = [1,2,3,4,5]

let LinkedList = createLinkedList(arr)
console.log(LinkedList)

