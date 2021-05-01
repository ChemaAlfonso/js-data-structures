// ===================================
// Example
// ===================================
// FIFO
// In
// 1 --> 2 --> 3 --> 4 --> 5
// Out
// 1 --> 2 --> 3 --> 4 --> 5

// ===================================
// Creating
// ===================================
class QueueNode {
    constructor( value, next = null ) {
        this.value = value;
        this.next = next;
    }
}

class Queue {

    first  = null;
    last   = null;
    length = 0;

    constructor() {}

    peek() {
        return this.first;
    }

    enqueue( value ) {

        if( !this.length ) return this._initQueue( value );
        
        const newNode = new QueueNode(value);

        // Set next node
        this.last.next = newNode;

        // Set old next node as prev of new next node
        this.last = newNode;

        this.length++;

        return this;
    }

    dequeue() {
        if( this.length === 0 ) return;

        // Holds memory pointer to prevent garbage collection
        const firstNode = this.first;

        this.first = this.first.next ? this.first.next : null;

        this.length--;

        // Check if first is last node & remove last node too
        if( this.first === null )
            this.last = null;
            
        return firstNode;
    }

    _initQueue( value ) {
        const newNode = new QueueNode(value);
        this.first = newNode;
        this.last  = newNode;
        this.length++;
    }

}

const myQueue = new Queue();
myQueue.enqueue('🙊')
myQueue.enqueue('Hola')
myQueue.enqueue('que')
myQueue.enqueue('tal')
myQueue.enqueue('como')
myQueue.dequeue()
myQueue.enqueue('🙊')

// Expected values #> hola -> que -> tal -> como

const test = ( stringJoinedValue, stringsQueue ) => {
    let currentNode = stringsQueue.first;
    let finalString = '';

    for (let i = 0; i < stringsQueue.length; i++) {
        finalString = finalString + currentNode.value;
        currentNode = currentNode.next
    }

    return finalString === stringJoinedValue;
}

const passedTest = test('Holaquetalcomo🙊', myQueue)
console.log(`Test passed: ${passedTest} ${passedTest ? '🤗' : '😱'} for: \r\n\r\n`, myQueue)