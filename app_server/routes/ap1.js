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

    this.search = function (key) {
        return searchNode(root, key); // {1}
    };

    this.remove = function (key) {
        root = removeNode(root, key); // {1}
        return root.key;
    };

    var removeNode = function (node, key) {
        console.log("node =", node);
        if (node === null) { // {2}
            return null;
        }

        if (key < node.key) { // {3}
            node.left = removeNode(node.left, key); // {4}
            return node; // {5}
        } else if (key > node.key) { // {6}
            node.right = removeNode(node.right, key); // {7}
            return node; // {8}
        } else { // key is equal to node.key, the default case
            // case 1 - a leaf node
            if (node.left === null && node.right === null) { // {9}
                node = null; // {10}
                return node; // {11}
            }

            // case 2 - a node w/ 1 child
            if (node.left === null) { // {12}
                node = node.right; // {13}
                return node; // {14}
            } else if (node.right === null) { // {15}
                node = node.left; // {16}
                return node; // {17}
            }

            // case 3 - a node w/ 2 children
            let aux = findMinNode(node.right); // {18}
            node.key = aux.key; // {19}
            node.right = removeNode(node.right, aux.key); // {20}
            return node; // {21}
        }
    };

    var searchNode = function (node, key) {
        if (node === null) { // {2}
            return false;
        }

        if (key < node.key) { // {3}
            return searchNode(node.left, key); // {4}
        } else if (key > node.key) { // {5}
            return searchNode(node.right, key); // {6}
        } else {
            // return true;
            return {
                key: node.key,
                left: node.left,
                right: node.right
            }
        }
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left) { // {2}
                node = node.left; // {3}
            }
            return node.key;
        }
        return null;
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right) {
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

// let tree1 = bstTest1(ds1);
// console.log("\ntree1 = ", tree1);

function bstTest1(dataSet) {
    let tree = new BinarySearchTree();
    dataSet.forEach(e => {
        tree.insert(e);
    });

    tree.inOrderTraverse(printNode);
    console.log("");
    // tree.preOrderTraverse(printNode);
    // console.log("");
    // tree.postOrderTraverse(printNode);
    // console.log("");
    // console.log("tree min =", tree.min());
    // console.log("");
    // console.log("tree max =", tree.max());
    // console.log("");
    // console.log("key 8 was found:", !!tree.search(8).key);
    // console.log("");

    let keyToRemove = 11;
    console.log(`removing node.key[${keyToRemove}], root.key =`, tree.remove(keyToRemove));
    console.log("");
    tree.inOrderTraverse(printNode);
    console.log("");

    function printNode(value) {
        console.log("printNode value = " + value);
    }

    console.log("binarySearchTreeTest1() complete ^_^");
    return tree;
}

let result = recursivePrac1();
function recursivePrac1() {
    let wall = 0;
    let total = 0;

    let buildWall = function (height) {
        if (height > 0) {
            buildWall(height - 1);
        }
        addBrickLayer(height);
    };

    let addBrickLayer = function(height){
        ++wall;
        total += height;
    };

    buildWall(10);

    return wall;
}