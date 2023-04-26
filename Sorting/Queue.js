class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    Empty(){
       return(this.front==null && this.rear==null)
    }

    push(data){
        const newNode=new Node(data);
        if(this.Empty()){
            this.front=newNode;
            this.rear=this.front;
        }else
            this.rear.next=newNode;
            this.rear=newNode;
           
            return true;
    }
    pop() {
        if (this.Empty()) return null;
        let data = this.front.data;
        this.front = this.front.next;  
        if (!this.front) this.rear = null;
        return data;
    }

    peekFront(){
        if(this.Empty()) return-404;
        return this.front.data;
    }



    display() {
        if (this.Empty()) return;
        let current = this.front;
        console.log("(FRONT)");
        while (current.next != null) {
            console.log(`${current.data} -->`);
            current = current.next;
        }
        console.log(`${current.data} (REAR)`);
    }





}

const queue=new Queue();
queue.push("Start");
queue.push("get");
queue.push("Set");
queue.push("ready");
queue.push("goo");
queue.pop();
