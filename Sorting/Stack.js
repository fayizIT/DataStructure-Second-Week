class stack{
    constructor(){
        this.items=[];
        this.count=0;
    }


    //add elements to the top in stack
    push(element){
        this.items[this.count]=element
        this.count++
        console.log(element,'Added');
        return this.count-1;
    }



    pop(){
        if(this.count==0) return undefined

        let deleteItem =this.items[this.count-1]
        this.count--;
        console.log(deleteItem,'removed');
        return true;
    }


    //check the top element in the stack

    peek(){
        if(this.count==0) return null;
        console.log("top element is",this.items[this.count-1]);
        return this.items[this.count-1]
    }

    ///check  the stack is empty or not

    Empty(){
        console.log(this.count==0 ? "stack is empty":"not empty");
        return this.count==0;
    }

    //print the elements
    print(){
    let str="";
    for(let i=0;i<this.count;i++){
        str +=this.items[i]+' '
    }
    return str;
    }

    clear(){
        this.items=[];
        this.count=0;
        console.log("stack cleared");
        return this.items
    }


}


const list= new stack();

console.log(list.print());



console.log(list);









