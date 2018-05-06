/**
 * Created by Julius Alvarado on 4/16/2018.
 */


// hacker rank "Time Conversion" problem
function timeConversion(s) {
    var sArr = s.split(":");

    var am = sArr[sArr.length-1].includes("AM");


    sArr[sArr.length-1] = sArr[sArr.length-1].slice(0, -2)

    sArr.forEach(function(e, i, arr){
        arr[i] = parseInt(e);
    });

    var h = sArr[0];
    if(h > 11 && am) {
        switch (h) {
            case 12:
                sArr[0] = 00;
                break;
            default:
                console.error("something broke in the switch statement.");
        }
    }
    else if(!am && h !=12) {
        sArr[0] = sArr[0] + 12;
    }

    sArr.forEach( (e, i) => (e < 10 ? sArr[i] = "0"+e : e) );

    var time = sArr.join(":");

    return time;
}