/**
 * Created by Julius Alvarado on 9/15/2019.
 */


console.log('\n\nello world ^_^ \n\n');

function QuickSortOne() {
    let array = [];
    let array2 = [99, 42, 3, 5, 1, 9, 7, 35, 51, 11, 19, 27];

    this.toString= function(){
        return array.join();
    };

    this.insert = function(item){
        array.push(item);
    };

    function partition(array, left, right) {
        return -1;
    }

    let quick = function(array, left, right) {
       let index;

       if(array.length > 1) {
           index = partition(array, left, right);
       }

       if(left < index - 1) {
           quick(array, left, index-1);
       }

       if(index < right) {
           quick(array, index, right);
       }
    };

    this.quickSort = function () {
        quick(array,0,array.length-1);
    }
} // END OF: QuickSortOne

function createRandomNonSortedArray(){
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

function printArray(array){
    console.log(array.toString());
}

function createNonSortedArrayAndPrint(size){
    let array = createNonSortedArray(size);
    printArray(array);

    return array;
}

console.log('********** Quick Sort **********');
array = createRandomNonSortedArray();

printArray(array);

array.quickSort();

printArray(array);

//