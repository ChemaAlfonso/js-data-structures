// ===================================
// Example
// ===================================
// A double linked list
// 1 --> 2 --> 3 --> 4 --> 5 --> null
// 1 <-- 2 <-- 3 <-- 4 <-- 5 <-- null

// ===================================
// Creating
// ===================================
class DoubleLinkedListNode {
    constructor( value, next = null, prev = null ) {
        this.value = value;
        this.next  = next;
        this.prev  = prev;
    }
}

class DoubleLinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor( value ) {
        this.head = new DoubleLinkedListNode(value)
        this.tail = this.head;
        this.length = 1;
    }

    append( value ) {
        // Create new node
        const newNode = new DoubleLinkedListNode(value);

        // Move actual tail as prev of new ending node
        newNode.prev = this.tail;

        // Set actual tail next point to new ending node
        this.tail.next = newNode;

        // Asing new ending node as tail
        this.tail = newNode;

        this.length++;
    }

    unshift( value ) {
        const newNode = new DoubleLinkedListNode(value);

        // Move head as next of new created node
        newNode.next = this.head;

        // Set new created node as last head prev
        this.head.prev = newNode;

        // Set new created node as head
        this.head = newNode;

        this.length++;
    }

    insert( index, value ) {
        // Not enought elements, just append
        if( index >= this.length )
            return this.append(value)

        // ¿😑? is first, just unshift
        if( index < 1 )
            return this.unshift(value)

        const previousToIndexNode = this.getIndexNode( index - 1 )
        const nextToIndexNode     = this.getIndexNode( index )

        const newNode = new DoubleLinkedListNode(value);

        newNode.next = nextToIndexNode;
        newNode.prev = previousToIndexNode;

        previousToIndexNode.next = newNode
        nextToIndexNode.prev     = newNode

        this.length++;
    }

    getIndexNode( index ) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }
}

const myLinkedList = new DoubleLinkedList('Hola');

myLinkedList.append('que')
myLinkedList.append('tal')
myLinkedList.append('estas')

myLinkedList.unshift('Oye! ')

myLinkedList.insert(4, 'como');

// ===================================
// Testing results
// ===================================

// Spected list values #> Oye! -> Hola -> que -> tal -> como --> estas

const test = ( stringJoinedValue, stringsLinkedList, forward = true ) => {
    let currentNode = stringsLinkedList[forward ? 'head' : 'tail'];
    let finalString = '';
    for (let i = 0; i < stringsLinkedList.length; i++) {
        finalString = finalString + currentNode.value;
        currentNode = currentNode[forward ? 'next' : 'prev']
    }

    return finalString === stringJoinedValue;
}

const passedTestForwards = test('Oye! Holaquetalcomoestas', myLinkedList)
console.log(`Test passedTestForwards: ${passedTestForwards} ${passedTestForwards ? '🤗' : '😱'}`)

const passedTestBackwards = test('estascomotalqueHolaOye! ', myLinkedList, false)
console.log(`Test passedTestBackwards: ${passedTestBackwards} ${passedTestBackwards ? '🤗' : '😱'}`)