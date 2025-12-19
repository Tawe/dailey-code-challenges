function pairwise(arr, target) {
  let sum = 0;
  const waiting = new Map(); 

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const need = target - x;

    if (waiting.has(need)) {
      sum += i + waiting.get(need);
      waiting.delete(need);
    } else if (!waiting.has(x)) {
      waiting.set(x, i);
    }
  }

  return sum;
}

const x = pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20);
x;