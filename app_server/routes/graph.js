/**
 * Created by Julius Alvarado on 5/19/2018.
 */

// The Dictionary Class
function Dictionary() {
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

// The Graph Class
function Graph() {
    let verticies = [];
    let adjList = new Dictionary();

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
    }
}

graphTest1();

function graphTest1() {
    let graph = new Graph();
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
}