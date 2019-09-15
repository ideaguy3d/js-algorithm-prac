/**
 * Created by Julius Alvarado on 12/9/2017.
 * ap4 = Algorithm Practice 4
 */

// Practice Problems
/**
 Given a string s, find and return the first instance of a non-repeating character in it.
 If there is no such character, return '_'.
 **/
let case1 = "abcdefghijklmnopqrstuvwxyziflskecznslkjfabe";
function firstNonRepeatedChar(s) {
    let zArr = [];
    for (let i = 0; i < s.length; i++) {
        zArr[i] = s[i];
    }

    let val = "_";
    let tArr = [];
    for (let i = 0; i < zArr.length; i++) {
        let cv = zArr[i];
        if (zArr.indexOf(cv, i + 1) === -1) {
            if (tArr.indexOf(cv) > -1) { // curVal is in tracker array
                break;
            }
            val = cv;
            return val;
        }
        tArr[i] = cv;
    }
    return val;
}

console.log(" ---- firstNonRepeatedChar ---- ");
console.log("\n {{ " + firstNonRepeatedChar(case1) + " }}");

/*
Given a time in -hour AM/PM format, convert it to military (-hour) time.

Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.

Input Format

A single string containing a time in -hour clock format (i.e.:  or ), where  and .

Output Format

Convert and print the given time in -hour format, where .

Sample Input

07:05:45PM
Sample Output

19:05:45
*/
function timeConversion(s) {
    console.log("jha - s = " + s);

    var sArr = s.split(":");

    sArr[sArr.length - 1] = sArr[sArr.length - 1].slice(0, -2);

    sArr.forEach(function (e, i, arr) {
        arr[i] = parseInt(e);
    });

    var h = sArr[0];
    if (h > 11) {
        switch (h) {

            case 12:
                h = 0;
                break;
            default:
                console.log("something broke in the switch statement.");
        }
    } else {
        sArr[0] = sArr[0] + 12;
    }

    console.log(sArr);
}