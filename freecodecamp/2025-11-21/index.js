function lcm(a, b) {
  if (a === 0 || b === 0) return 0;

  let x = a;
  let y = b;

  while (x !== y) {
    if (x < y) {
      x += a;
    } else {
      y += b;
    }
  }

  return x; 
}

const x = lcm(4,6);
x;