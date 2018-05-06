/**
 * Created by Julius Alvarado on 4/16/2018.
 */

function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.insert = function (key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback); // {3}
    };

    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) { // {2}
            inOrderTraverseNode(node.left, callback);  // {3}
            callback(node.key);                        // {4}, visit
            inOrderTraverseNode(node.right, callback); // {5}
        }
    };

    var insertNode = function (node, newNode) {
        if (newNode.key === 6) {
            console.log("node.key: " + node.key);
            console.log("newNode.key: " + newNode.key);
            console.log("node = ", node);
            console.log("-------------------------------------------------------------------");
        }

        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };
}

const ds1 = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];

let tree1 = binarySearchTreeTest1(ds1);

function binarySearchTreeTest1(dataSet) {
    let tree = new BinarySearchTree();
    dataSet.forEach(e => {
        tree.insert(e);
    });

    tree.inOrderTraverse(printNode);

    function printNode(value) {
        console.log("printNode value = "+value);
    }

    console.log("binarySearchTreeTest1() complete ^_^");
    return tree;
}