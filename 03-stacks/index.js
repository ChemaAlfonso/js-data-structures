// ===================================
// Example
// ===================================
// LIFO
// In
// 1 --> 2 --> 3 --> 4 --> 5
// Out
// 5 --> 4 --> 3 --> 2 --> 1

// ===================================
// Creating
// ===================================
class StackNode {
    constructor( value, next = null ) {
        this.value = value;
        this.next = next;
    }
}

class Stack {

    top    = null;
    bottom = null;
    length = 0;

    constructor() {}

    peek() {
        return this.top;
    }

    push( value ) {
        const newNode = new StackNode(value);

        if( !this.length ) {
            this.top    = newNode;
            this.bottom = newNode;
        } else {
            // Holds memory pointer to prevent garbage collection
            const holdingNodePointer = this.top;
            
            // Set new last node
            this.top      = newNode;

            // Set old last node as next of new last node
            this.top.next = holdingNodePointer;
        }

        this.length++;
    }

    pop() {
        const lastNode = this.top;
        this.top = this.top.next;
        this.length--;
        return lastNode;
    }

}

const myStack = new Stack();
myStack.push('Hola')
myStack.push('que')
myStack.push('tal')
myStack.push('como')
myStack.pop()
console.log(myStack)