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
}