// ===================================
// Example
// ===================================
// A linked list
// 1 --> 2 --> 3 --> 4 --> 5 --> null

// LikedList object example
// const singleLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

// ===================================
// Creating
// ===================================
class LinkedListNode {
    constructor( value, next = null ) {
        this.value = value;
        this.next = next;
    }
}

class SingleLinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor( value ) {
        this.head = new LinkedListNode(value)
        this.tail = this.head;
        this.length = 1;
    }

    append( value ) {
        const newNode = new LinkedListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    unshift( value ) {
        this.head = new LinkedListNode(value, this.head);
        this.length++;
    }

    insert( index, value ) {
        // Not enought elements, just append
        if( index >= this.length )
            return this.append(value)

        // ¿😑? is first, just unshift
        if( index < 0 )
            return this.unshift(value)

        const previousToIndexNode = this.getIndexNode( index -1 )

        const newNode = new LinkedListNode(value, previousToIndexNode.next);
        previousToIndexNode.next = newNode
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

const myLinkedList = new SingleLinkedList('que');

myLinkedList.append('tal')
myLinkedList.append('tu')

myLinkedList.unshift('Hola')

myLinkedList.insert(3, 'estas')

// ===================================
// Testing results
// ===================================
// List values #> hola -> que -> tal -> estas -> tu

const test = ( stringJoinedValue, stringsLinkedList ) => {
    let currentNode = stringsLinkedList.head;
    let finalString = '';
    for (let i = 0; i < stringsLinkedList.length; i++) {
        finalString = finalString + currentNode.value;
        currentNode = currentNode.next
    }

    return finalString === stringJoinedValue;
}

const passedTest = test('Holaquetalestastu', myLinkedList)
console.log(`Test passed: ${passedTest} ${passedTest ? '🤗' : '😱'}`)