/**
 * Created by Julius Alvarado on 4/16/2018.
 */

let otherThree = "foo bar baz";
let words21 = "one two three four five six seven eight nine ten eleven twelve thirteen fourteen " +
    "fifteen sixteen seventeen eighteen nineteen twenty twenty-one";

orderCheck(otherThree, words21);

function orderCheck(known3words, words21ordered) {
    let w1arr = known3words.split(" ");
    let w21arr = words21ordered.split(" ");
    for (let i = 0; i < w21arr.length; i++) {
        let o1 = w21arr.splice(i, 0, w1arr[0]);
        let o2 = w21arr.splice(i, 0, w1arr[0]);
        let o3 = w21arr.splice(i, 0, w1arr[0]);

        let o4 = w21arr.splice(i, 0, w1arr[1]);
        let o5 = w21arr.splice(i, 0, w1arr[1]);
        let o6 = w21arr.splice(i, 0, w1arr[1]);

        let o7 = w21arr.splice(i, 0, w1arr[2]);
        let o8 = w21arr.splice(i, 0, w1arr[2]);
        let o9 = w21arr.splice(i, 0, w1arr[2]);

        let arrCheck = [o1, o2, o3, o4, o5, o6, o7, o8, o9];
        for (let e = 0; i < arrCheck.length; e++) {
            if(arrCheck[e] === seedCorrect()) {
                return arrCheck[e];
            }
        }
    }
}

function seedCorrect() {
    let words24correctOrder = "one two three four foo five six seven eight nine bar ten eleven twelve thirteen fourteen " +
        "fifteen sixteen seventeen eighteen nineteen twenty baz twenty-one";
    return words24correctOrder.split(" ");
}


// hacker rank "Time Conversion" problem
function timeConversion(s) {
    var sArr = s.split(":");

    var am = sArr[sArr.length - 1].includes("AM");


    sArr[sArr.length - 1] = sArr[sArr.length - 1].slice(0, -2)

    sArr.forEach(function (e, i, arr) {
        arr[i] = parseInt(e);
    });

    var h = sArr[0];
    if (h > 11 && am) {
        switch (h) {
            case 12:
                sArr[0] = 0;
                break;
            default:
                console.error("something broke in the switch statement.");
        }
    }
    else if (!am && h != 12) {
        sArr[0] = sArr[0] + 12;
    }

    sArr.forEach((e, i) => (e < 10 ? sArr[i] = "0" + e : e));

    var time = sArr.join(":");

    return time;
}
