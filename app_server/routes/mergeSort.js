/**
 * Created by Julius Alvarado on 11/22/2018.
 */

ms1();

function MergeSortClass() {
    /**
     * The MAIN recursive function, 'Rec' is for recursive
     * @param array
     * @param side
     * @returns {{"13"}|*}
     */
    let mergeSortRec = function (array, side) {
        console.log("... parameter side = " + side);

        let length = array.length;

        // _BASE CASE
        if (length === 1) {     // {1}
            return array;       // {2}
        }

        let mid = Math.floor(length / 2);       // {3}
        let leftArray = array.slice(0, mid);            // {4}
        let rightArray = array.slice(mid, length);      // {5}

        return merge(mergeSortRec(leftArray, 'L'), mergeSortRec(rightArray, 'R')); // {6}
    };

    /**
     * The left and right array get merged into the result array
     *
     * @param left array
     * @param right array
     * @returns {[]}
     */
    let merge = function (left, right) {
        let result = []; // {7}
        let il = 0;
        let ir = 0;

        while (il < left.length && ir < right.length) { // {8}
            if (left[il] < right[ir]) {
                result.push(left[il++]); // {9}
            } else {
                result.push(right[ir++]); // {10}
            }
        }

        while (il < left.length) { // {11}
            result.push(left[il++]);
        }

        while (ir < right.length) { // {12}
            result.push(right[ir++]);
        }

        return result; // {13}
    };

    /**
     * The class method that indirectly invokes the recursive function
     * @param array
     * @returns {{"13"}|*}
     */
    this.mergeSort = function (array) {
        return mergeSortRec(array, 'init');
    };

} // END OF: MergeSortClass(){}

function ms1() {
    let arr1 = [8, 7, 6, 5, 4, 3, 2, 1];
    let mergeSort = new MergeSortClass();

    arr1 = mergeSort.mergeSort(arr1);

    console.log("JHA - arr1 merge sorted = ");
    console.log(arr1);
}

function MergeSortPracticeTwo() {

    this.mergeSort = function (array) {
        mergeSortRec(array);
    };

    let mergeSortRec = function (array) {

    };

}

//