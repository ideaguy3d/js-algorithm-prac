/**
 * Created by Julius Alvarado on 9/15/2019.
 */


console.log('\n\nello world ^_^ \n\n');

function QuickSortOne() {
    let array = [];
    let array2 = [99, 42, 3, 5, 1, 9, 7, 35, 51, 11, 19, 27];

    this.toString = function () {
        return array.join();
    };

    this.insert = function (item) {
        array.push(item);
    };

    let swapQuickSort = function (array, idx1, idx2) {
        let aux = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = aux;
    };

    /**
     * This will compute the index of the array
     * @param array
     * @param left int
     * @param right int
     * @returns {number}
     */
    function partition(array, left, right) {
        let pivot = array[Math.floor((left + right) / 2)];
        // initially this is the beginning of the array
        let leftPointer = left;
        // initially this is the end of the array (its' length)
        let rightPointer = right;

        while (leftPointer <= rightPointer) {
            while (array[leftPointer] < pivot) {
                leftPointer++;
            }

            while (array[rightPointer] > pivot) {
                rightPointer--;
            }

            if (leftPointer <= rightPointer) {
                swapQuickSort(array, leftPointer, rightPointer);
                leftPointer++;
                rightPointer--;
            }
        }

        return leftPointer;

    } // END OF: partition()

    /**
     * The MAIN recursive function
     * @param array
     * @param left
     * @param right
     */
    let quick = function (array, left, right) {
        let index;

        if (array.length > 1) {
            index = partition(array, left, right);

            if (left < index - 1) {
                quick(array, left, index - 1);
            }

            if (index < right) {
                quick(array, index, right);
            }
        }
    };

    /**
     * This is the main method that calls the recursive function
     */
    this.quickSort = function () {
        quick(array, 0, array.length - 1);
    }
} // END OF: QuickSortOne()

function createNonSortedArray(size) {
    let array = new QuickSortOne();

    for (let i = size; i > 0; i--) {
        array.insert(i);
    }

    return array;
}

function createRandomNonSortedArray() {
    let array = new QuickSortOne();

    array.insert(3);
    array.insert(5);
    array.insert(1);
    array.insert(6);
    array.insert(4);
    array.insert(7);
    array.insert(2);

    return array;
}

function printArray(array) {
    console.log(array.toString());
}

function createNonSortedArrayAndPrint(size) {
    let array = createNonSortedArray(size);
    printArray(array);

    return array;
}

console.log('********** Quick Sort **********');
let $array = createRandomNonSortedArray();

printArray($array);

$array.quickSort();

printArray($array);

let b = 'point';

//