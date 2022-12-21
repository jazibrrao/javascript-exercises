//fibonacci: series of numbers where new number = sum of preceding two numbers
const fibonacci = function(n) {
    let num = parseInt(n);
    let oldVal = 0; //first number in series
    let newVal = 1; //second number in series
    let temp;
    while(num > 1) {
        temp = newVal;
        newVal = oldVal + newVal;
        oldVal = temp;
        num--;
    }
    return num < 0 ? "OOPS" : newVal; // if num is negative, return oops, else value of nth number in series
};

// Do not edit below this line
module.exports = fibonacci;
