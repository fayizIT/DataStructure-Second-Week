function middle(stack){
    let mid=Math.floor(stack.length/2)
    let stack2=[]
    for(i=0;i<stack.length;i++){
        if(i<mid){
            stack2.push(stack.pop())
        }
    }

    let removed =stack.pop();

    while(stack2.length){
        stack.push(stack2.pop())
    }
    console.log(removed);
    return stack

}
const stack=[3,2,1,5,6,7,3,2,4]
console.log(stack);

console.log(middle(stack));