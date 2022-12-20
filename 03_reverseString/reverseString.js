const reverseString = function(str) {
    const splitStr = str.split('');
    const reverseArr = splitStr.reverse();
    const joinArr = reverseArr.join('');
    return joinArr;
};

// Do not edit below this line
module.exports = reverseString;
