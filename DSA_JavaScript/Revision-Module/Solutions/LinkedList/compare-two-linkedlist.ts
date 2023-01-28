// You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return 1. Otherwise, return 0.
class newNode2{
    data:number;
    next:any;
    constructor(val:number){
        this.data = val,
        this.next = null
    }
}

function CompareLists(llist1:any, llist2:any) {
    let temp1  = llist1;
    let temp2 = llist2;
    
     while(temp1!==null && temp2!==null){
        if(temp1.data!==temp2.data){
            return 0
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    if(temp1!==null||temp2!==null){
        return 0
    }else{
        return 1
    }
}