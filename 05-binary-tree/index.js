// ===================================
// Tree
// ===================================
//         10
//     4        20
//   2   8    17  170

// ===================================
// Creating
// ===================================
class TreeNode {
    constructor( value ) {
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class BinaryTree {

    root  = null;

    constructor() {}

    insert( value ) {

        if( !this.root )
            return this._initTree( value );

        const newNode = new TreeNode( value );

        let currentNode = this.root;

        while( true ) {

            // Left side
            if( value < currentNode.value ) {

                // Check if already exists a node here & add new node here if not
                if( !currentNode.left ) {
                    currentNode.left = newNode;
                    return this;
                }

                currentNode = currentNode.left
            }

            // Right side
            else {

                // Check if already exists a node here & add new node here if not
                if( !currentNode.right ) {
                    currentNode.right = newNode;
                    return this;
                }

                currentNode = currentNode.right
            }

        }

    }

    search( value ) {

        if( !this.root )
            return 'Tree is empty'

        let currentNode = this.root;

        while( true ) {

            if( currentNode.value === value ) return currentNode;

            // Left side
            if( value < currentNode.value ) {

                // End of this branch way
                if( !currentNode.left ) return 'Node not exists in this trees';

                // Move to lower lower level
                currentNode = currentNode.left;

            }

            // Right side
            else {

                // End of this branch way
                if( !currentNode.right ) return 'Node not exists in this tree';
                
                // Move to lower lower level
                currentNode = currentNode.right
            }

        }

    }

    _initTree( value ) {
        const newNode = new TreeNode( value );
        this.root = newNode
        return this;
    }

}

// Intance
const myTree = new BinaryTree();

// Testing inserts
myTree.insert(10)
myTree.insert(4)
myTree.insert(20)
myTree.insert(2)
myTree.insert(8)
myTree.insert(17)
myTree.insert(170)

console.log(myTree.search(20))