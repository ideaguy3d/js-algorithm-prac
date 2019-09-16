/**
 * Created by Julius Alvarado on 4/16/2018.
 */


console.log('\n\nhello world ^_^/\n\n');

let set1 = [99, 42, 3, 5, 1, 9, 7, 35, 51, 11, 19, 27];
let set2 = [];
let c = 0;

let lambda2 = function (set) {
    if (c === set1.length) {
        return;
    }
    set[c] = 10 + set1[c++];
    return lambda2(set);
}

let set3 = lambda2(set2);

console.log(set3.join());

let lamba1 = function (set, elem, limit) {
    let sumOne = 0;
    let count = 0;

    let total = op1(set1, null, null);
    let b = 1;

    function op1(set, elem, limit) {
        if (elem) sumOne += elem;
        if (count === limit) {
            return sumOne;
        }
        console.log('\n\n');
        console.log(`${count}: ${set1}`);
        console.log('\n\n');
        count++;
        return op1(set1, set[count], set.length);
    }
}

class QuickSortOne {
    //private this.total;

    recurOne() {
        let set1 = [99, 42, 3, 5, 1, 9, 7, 35, 51, 11, 19, 27];
        let sumOne = 0;
        let count = 0;

        let total = op1(set1, null, null);
        this.total = total;
        let b = 1;

        function op1(set, elem, limit) {
            if (elem) sumOne += elem;
            if (count === limit) {
                return sumOne;
            }
            console.log('\n\n');
            console.log(`${count}: ${set1}`);
            console.log('\n\n');
            count++;
            return op1(set1, set[count], set.length);
        }
    }

    getTotal() {
        return this.total;
    }
}

/**
 let qs1 = new QuickSortOne();
 qs1.recurOne();
 console.log(`The total is ${qs1.getTotal()}`);
 **/






let $break = 'point';


//