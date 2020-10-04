// Link: https://www.youtube.com/watch?v=933UoS5iZPQ&t=96s&ab_channel=GuruMack

const stack = function() {
    this.stack = [];
}

stack.prototype.push = function(x) {
    this.stack.push(x);
    return this.stack;
}

stack.prototype.pop = function() {
    return this.stack.pop();
}

stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1];
}

stack.prototype.isEmpty = function () {
    return !this.stack.length;
}

stack.prototype.sortStack = function() {
    const originalStack = myStack;
    const tempStack = new stack();
    // Push 1st element into TempStack
    tempStack.push(originalStack.pop());
    while (!originalStack.isEmpty()) {
        let counter = 0;
        let temp = originalStack.pop();
        /*
        If temp < top of TempStack ->
        1.) Pop from TempStack and Push into OriginalStack until this condition
        becomes false
        */
        while (temp < tempStack.peek()) {
            originalStack.push(tempStack.pop());
        }
        //2.) Push temp into TempStack
        tempStack.push(temp);
        //3.) Push elements popped from TempStack back into TempStack
        for (let i=0; i<counter; i++) {
            tempStack.push(originalStack.pop())
        }
    }
    /*
    Keep Popping from TempStack and pushing into OriginalStack until its empty
    so smallest element is on top in OriginalStack
    */
    while (!tempStack.isEmpty()) {
        originalStack.push(tempStack.pop());
    }
    return originalStack;
}

const myStack = new stack();
myStack.push(4);
myStack.push(8);
myStack.push(2);
myStack.push(7);
myStack.push(1);
console.log(myStack.push(99));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.sortStack());