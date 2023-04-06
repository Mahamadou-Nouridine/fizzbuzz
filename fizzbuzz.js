module.exports = function () {
  // write your code here
  let fizzBuzz = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzz.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzz.push("Buzz");
    } else {
      fizzBuzz.push(i);
    }
  }

  return fizzBuzz;
};
