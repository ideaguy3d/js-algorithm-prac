/**
 * Created by Julius Alvarado on 11/22/2018.
 */


function MergeSortClass() {
    this.mergeSort = function (array) {
        array = mergeSortRec(array);
    };

    let mergeSortRec = function (array) {
        let length = array.length;
        if (length === 1) {     // {1}
            return array;       // {2}
        }
        let mid = Math.floor(length / 2);       // {3}
        let left = array.slice(0, mid);            // {4}
        let right = array.slice(mid, length);      // {5}
        return merge(mergeSortRec(left), mergeSortRec(right)); // {6}
    };

    let merge = function (left, right) {
        let result = []; // {7}
        let il = 0;
        let ir = 0;

        while(il < left.length && ir < right.length) { // {8}
            if(left[il] < right[ir]) {
                result.push(left[il++]); // {9}
            } else {
                result.push(right[ir++]); // {10}
            }
        }

        while (il < left.length) { // {11}
            result.push(left[il++]);
        }

        while(ir < right.length) { // {12}
            result.push(right[ir++]);
        }

        return result; // {13}
    };
}


//