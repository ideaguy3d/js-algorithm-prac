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

    this.min = function () {
        return minNode(root); // {1}
    };

    this.max = function () {
        return maxNode(root); 
    };

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback); // {3}
    };

    const minNode = function (node) {
        if (node) {
            while (node && node.left !== null) { // {2}
                node = node.left; // {3}
            }
            return node.key;
        }
        return null;
    };

    const maxNode = function (node) {
        if (node) {
            while(node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    // TODO: comeback & step through each recursive call
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    // TODO: comeback & step through each recursive call
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key); // {1}
            preOrderTraverseNode(node.left, callback); // {2}
            preOrderTraverseNode(node.right, callback); // {3}
        }
    };

    // TODO: re-code this several times to fully grasp
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) { // {2}
            inOrderTraverseNode(node.left, callback);  // {3}
            callback(node.key);                        // {4}, visit
            inOrderTraverseNode(node.right, callback); // {5}
        }
    };

    var insertNode = function (node, newNode) {
        if (newNode.key === -1) { // changed to -1 to Not invoke the logs
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
console.log("\ntree1 = ", tree1);

function binarySearchTreeTest1(dataSet) {
    let tree = new BinarySearchTree();
    dataSet.forEach(e => {
        tree.insert(e);
    });

    tree.inOrderTraverse(printNode);
    console.log("");
    tree.preOrderTraverse(printNode);
    console.log("");
    tree.postOrderTraverse(printNode);

    function printNode(value) {
        console.log("printNode value = " + value);
    }

    console.log("binarySearchTreeTest1() complete ^_^");
    return tree;
}