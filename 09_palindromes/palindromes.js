const palindromes = function (str) {
    // convert to lowercase
    str = str.toLowerCase();

    // remove all punctuation
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // remove all whitespace
    str = str.replace(/\s/g, "");

    const splitStr = str.split('');
    const reverseArr = splitStr.reverse();
    const reversedStr = reverseArr.join('');

    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
