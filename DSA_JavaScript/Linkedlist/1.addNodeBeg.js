class LinkedListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
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
