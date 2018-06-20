/**
 * Created by Julius Alvarado on 5/19/2018.
 */

// The Dictionary Class
function DictionaryClass() {
    let items = {};

    this.set = function (key, value) {
        items[key] = value;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.keys = function (key) {
        return key in items;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.clear = function () {
        items = {};
    };

    this.has = function (key) {
        return key in items;
    };

    this.values = function () {
        let values = [];
        for (let k in items) {
            if (items.hasOwnProperty(k)) {
                if (this.has(k)) {
                    values.push(items[k]);
                }
            }
        }
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.getItems = function (key) {
        return items;
    };
}

// The Queue Class
function QueueClass() {
    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length === 0;
    };

    this.clear = function () {
        items = [];
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}

// The Graph Class
function GraphClass() {
    let verticies = [];
    let adjList = new DictionaryClass();

    this.addVertex = function (v) {
        verticies.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    this.toString = function () {
        let s = '';
        for (let i = 0; i < verticies.length; i++) {
            const vert = verticies[i];
            s += vert + ' -> ';
            let neighbors = adjList.get(vert);
            for (let j = 0; j < neighbors.length; j++) {
                let neighbor = neighbors[j];
                s += " " + neighbor + " ";
            }
            s += '\n';
        }
        return s;
    };

    this.bfs1 = function (v, callback) {
        let color = initializeColor(); // {2}
        let queue = new QueueClass(); // {3}
        queue.enqueue(v); // {4}
        while (!queue.isEmpty()) { // {5}
            let u = queue.dequeue(); // {6}
            let neighbors = adjList.get(u); // {7}
            color[u] = 'grey'; // {8}
            for (let i = 0; i < neighbors.length; i++) { // {9}
                let w = neighbors[i]; // {10}
                if (color[w] === 'white') { // {11}
                    color[w] = 'grey'; // {12}
                    queue.enqueue(w); // {13}
                }
            }
            color[u] = 'black'; // {14}
            if (callback) { // {15}
                callback(u);
            }
        }
    };

    this.bfs = function (v, callback) {
        let color = initializeColor();
        let queue = new QueueClass();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.dequeue();
                }
            }
            color[u] = 'black';
            if(callback) {
                callback(u);
            }
        }
    };

    let initializeColor = function () {
        let color = [];
        for (let i = 0; i < verticies.length; i++) {
            color[verticies[i]] = 'white'; //{1}
        }
        return color;
    };
}

graphTest1();

function graphTest1() {
    let graph = new GraphClass();
    let myVerticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (let i = 0; i < myVerticies.length; i++) {
        let myVerticy = myVerticies[i];
        graph.addVertex(myVerticy);
    }

    graph.addEdge('A', 'B'); // 1
    graph.addEdge('A', 'C'); // 2
    graph.addEdge('A', 'D'); // 3
    graph.addEdge('C', 'D'); // 4
    graph.addEdge('C', 'G'); // 5
    graph.addEdge('D', 'G'); // 6
    graph.addEdge('D', 'H'); // 7
    graph.addEdge('B', 'E'); // 8
    graph.addEdge('B', 'F'); // 9
    graph.addEdge('E', 'I'); // 10

    console.log(graph.toString());

    graph.bfs1('G', function (u) {
        console.log("Heyyy! G was found! Cool. ^_^, the return val =", u);
    });
}


//