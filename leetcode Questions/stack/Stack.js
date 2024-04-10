class stack {
    constructor(){
        this.stack = [];
    }
    push(element){
        return this.stack.push(element)
    }
    pop(){
        if(this.size() === 0 ) return "stack is empty"
        return this.stack.pop()
    }
    size(){
        return this.stack.length
    }
    peek(){
        if(this.size()==0) return " stack is empty";
        return this.stack.length-1
    }
}
const stacks = new stack()
stacks.push(4)
stacks.push(3)
stacks.push(2)
console.log(stacks.pop())
console.log(stacks.size())