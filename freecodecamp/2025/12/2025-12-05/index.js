function difference(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const result = [];

  for (const x of arr1) {
    if (!setB.has(x) && !result.includes(x)) {
      result.push(x);
    }
  }

  for (const x of arr2) {
    if (!setA.has(x) && !result.includes(x)) {
      result.push(x);
    }
  }

  return result;
}


const x = difference([1, 2, 3], [3, 4, 5])
x