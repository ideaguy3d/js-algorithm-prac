/**
 * Created by Julius Alvarado on 7/12/2017.
 */
let pl = " ->    ";

function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();
}

function HashTableClass() {
    let table = [];

    let ValuePairStruct = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        }
    };

    this.put = function (key, value) {
        let pos = primeHashCode(key);
        console.log(pl + pl + key + ' transformed to ' + pos);
        if (table[pos] === undefined) {
            table[pos] = new ValuePairStruct(key, value);
        } else {
            let index = ++pos;
            while (table[index] !== undefined) {
                ++index;
            }
            table[index] = new ValuePairStruct(key, value);
        }
    };

    this.remove = function (key) {
        let pos = primeHashCode(key);
        if (table[pos] !== undefined) {
            if (table[pos].key === key) {
                table[pos] = undefined;
                return true;
            } else {
                let idx = ++pos, idx2 = pos++;
                console.log("idx = " + idx + ", idx2 = " + idx2 + ", pos = ", pos);
                while (table[idx] === undefined || table[idx].key !== key) {
                    if (idx > table.length) {
                        console.error("ERROR in .remove(): index is larger than table.length");
                        return false;
                    }
                    idx++;
                }
                if (table[idx].key === key) {
                    table[idx] = undefined;
                    return true;
                }
            }
        }
        return "key provided is not in the hash table";
    };

    this.get = function (key) {
        let pos = primeHashCode(key);
        if (table[pos] !== undefined) {
            if (table[pos].key === key) return table[pos].value;
            else {
                let index = ++pos;
                let infiniteLoopGuard = 0;
                while (table[index] === undefined || table[index].key !== key) {
                    if (index > table.length) {
                        // somehow I've entered this loop with a key that isn't in the hash table
                        // but started the linear probe.
                        console.log("ERROR: key not in table; index = " + index + ", table.length = " + table.length);
                        break;
                    }
                    index++;
                    infiniteLoopGuard++;
                    if (infiniteLoopGuard > 1000000) {
                        break;
                    }
                }
                if (index > table.length) return undefined;
                else {
                    return table[index].key === key ? table[index].value : "keys do not match";
                }
            }
        }
        return "you entered a key that is 'undefined'";
    };

    let loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    let primeHashCode = function (key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 37 + key.charCodeAt(i);
        }
        return hash % 1017;
    }
}

dash();
console.log("in the 'hasTable.js' file:");
console.log();

function hashTableTest() {
    let hash = new HashTableClass();
    hash.put('foo', 'felicia@mail.com');
    hash.put('car', 'carina@mail.com');
    hash.put('voo', 'vanessa@mail.com');
    hash.put('jar', 'jessica@mail.com');
    console.log(pl + hash.get('car'));
    console.log(pl + hash.get('moo'));
    hash.remove('jar');
    console.log(pl + hash.get('jar'));
}

function testHash2() {
    let hash = new HashTableClass();

    hash.put(' Gandalf', 'gandalf@ email.com');
    hash.put(' John', 'johnsnow@ email.com');
    hash.put(' Tyrion', 'tyrion@ email.com');
    hash.put(' Aaron', 'aaron@ email.com');
    hash.put(' Donnie', 'donnie@ email.com');
    hash.put(' Ana', 'ana@ email.com');
    hash.put(' Jonathan', 'jonathan@ email.com');
    hash.put(' Jamie', 'jamie@ email.com');
    hash.put(' Sue', 'sue@ email.com');
    hash.put(' Mindy', 'mindy@ email.com');
    hash.put(' Paul', 'paul@ email.com');
    hash.put(' Nathan', 'nathan@ email.com');
    hash.put('foo', 'felicia@mail.com');
    hash.put('bar', 'brandon@mail.com');
    hash.put('car', 'carina@mail.com');
    hash.put('voo', 'vanessa@mail.com');
    hash.put('jar', 'jessica@mail.com');

    console.log(pl + "hash.get('Paul') = " + hash.get(' Paul'));

    console.log(pl + "hash.remove('voo') = " + hash.remove('_voo'));
}

hashTableTest();
dash();
testHash2();

dash();