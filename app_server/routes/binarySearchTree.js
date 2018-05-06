/**
 * Created by Julius Alvarado on 7/14/2017.
 */

let pl = " ->    ";

function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();
}

function BinarySearchTreeClass() {
    const NodeStruct = function (key) {
        this.left = null;
        this.right = null;
        this.key = key;
    };

    let root = null;

    this.insert = function (key) {
        const newNode = new NodeStruct(key); // {1}

        if (root === null) { // {2}
            root = newNode;
        } else {
            insertNode(root, newNode); // {3}
        }
    };

    this.search = function () {

    };

    this.inOrderTransverse = function () {

    };

    this.preOrderTransverse = function () {

    };

    this.postOrderTransverse = function () {

    };

    this.min = function(){
        return minNode(root);
    };

    this.max = function () {

    };

    this.remove = function () {

    };

    const minNode = function(node){
        if(node) {
            while(node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    /**  -- The Original insertNode() -- **/
    const insertNode = function (node, newNode) {
        if (newNode.key < node.key) { // {4}
            if (node.left === null) { // {5}
                node.left = newNode; // {6}
            } else {
                insertNode(node.left, newNode); // {7} ??
            }
        } else {
            if (node.right === null) { // {8}
                node.right = newNode; // {9}
            } else {
                insertNode(node.right, newNode); // {10} ??
            }
        }
    };
}

function SecondBinaryTreeClass () {
    let NodeStruct = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };
    
    let root = null;

    this.insert = function(key){
        let newNode = new NodeStruct(key);
        if(root === null) {
            root = newNode;
        } else {
            insertionCheck(root, newNode);
        }
    };

    let insertionCheck = function(node, newNode){
        if(newNode.key < node.key) {

        }
    }
}

dash();

console.log('jha - in the "binarySearchTree.js" file');
console.log();

bstTest1();

function bstTest1() {
    let tree = new BinarySearchTreeClass();
    const dataSet1 = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
    for (let i = 0; i < dataSet1.length; i++) {
        let cv = dataSet1[i];
        console.log("cv = " + cv);
        tree.insert(cv);
    }
}

dash();