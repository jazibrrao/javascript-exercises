const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};


//take array and use .reduce to combine all elemnts into one
const sum = function(arr) {
  return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => total * currentValue)
};

const power = function(a,b) {
	  return a**b;
};

//factorial = product of all positive numbers less than or equal to number (0! = 1)
const factorial = function(n) {
  let result = 1;
  while(n > 0) {
    result *= n;
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
