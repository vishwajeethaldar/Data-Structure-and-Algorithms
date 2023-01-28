// DElete node at end
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


// Deleting End Node
function deleteNode(list){
    let temp = list;
    let node = new LinkedListNode(0)
    
    if(!list){
        return list
    }

    if(list.next===null){
        list = null
        return null
    }

    while(temp.next && temp.next.next!==null){
        temp = temp.next
    }
    temp.next=null;
   return list
}

// Deleting front  Node
function deleteNodefront(list){
    let temp = list;
    
    if(!list){
        return null
    }
    list=temp.next;
    // console.log();
    // console.log(temp);
   return list
}

 linkedList =   deleteNodefront(linkedList)
 linkedList =   deleteNodefront(linkedList)
 linkedList =   deleteNodefront(linkedList)
//  linkedList =   deleteNodefront(linkedList)

console.log(linkedList);



