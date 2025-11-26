function isFizzBuzz(arr) {
  for (let i = 1; i <= arr.length; i++) {
    let expected;

    if (i % 3 === 0 && i % 5 === 0) expected = "FizzBuzz";
    else if (i % 3 === 0) expected = "Fizz";
    else if (i % 5 === 0) expected = "Buzz";
    else expected = i;

    if (arr[i - 1] !== expected) return false;
  }

  return true;
}

const x = isFizzBuzz([1, 2, "Fizz", 4])