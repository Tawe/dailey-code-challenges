
function countCollisions(directions) {
  let n = directions.length;
  let left = 0;
  let right = n - 1;

  while (left < n && directions[left] === 'L') {
    left++;
  }

  while (right >= 0 && directions[right] === 'R') {
    right--;
  }

  let collisions = 0;
  for (let i = left; i <= right; i++) {
    if (directions[i] === 'L' || directions[i] === 'R') {
      collisions++;
    }
  }

  return collisions;
}

const x = countCollisions("RLRSLL")