

let x = 2;
let y = 8;
const a = function(b) {
    console.log('1. b = ' + b);
    return function(c) {
        console.log('2. b = ' + b);
        return x + y + Math.abs(b) + c;
    };
};


// Statement will go here
y = 4;

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));












// end of node file