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
