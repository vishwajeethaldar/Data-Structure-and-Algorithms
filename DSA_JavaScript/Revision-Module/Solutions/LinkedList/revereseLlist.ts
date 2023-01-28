// reverse the linked list
class newNode{
    data:number;
    next:any;
    constructor(val:number){
        this.data = val,
        this.next = null
    }
   
}

let node1 = new newNode(3)
let node2 = new newNode(2)
let node3 = new newNode(1)

node1.next = node2
node2.next  =node3


// Method 1
function reverseLlist(head:any){
    let prev:any = null;
    let curr = head;
    while(curr!==null){
        let x = new newNode(curr.data)
        x.next = prev;
        prev = x
        curr = curr.next;
    }
    console.log(prev)
}



// 2nd Method
function reverseLlist2(head:any){
   
    let curr = head;
    let que:Array<number> = []
    while(curr!==null){
       que.unshift(curr.data)
       curr =curr.next;
    }
  
    for(let i=0; i<que.length; i++){
        console.log(que[i])
    }
}


reverseLlist2(node1)