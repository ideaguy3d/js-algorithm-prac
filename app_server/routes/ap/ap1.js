/**
 * Created by Julius Alvarado on 4/16/2018.
 */


console.log('\n\nhello world ^_^/\n\n');


let lamba1 = function (set, elem, limit) {
    let set1 = [99, 42, 3, 5, 1, 9, 7, 35, 51, 11, 19, 27];
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
    //public function

    public r1() {
        let set1 = [99, 42, 3, 5, 1, 9, 7, 35, 51, 11, 19, 27];
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
}

let qs1 = new QuickSortOne();
qs1.r1();


let $break = 'point';


//