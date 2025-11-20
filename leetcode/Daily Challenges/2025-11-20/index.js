var intersectionSizeTwo = function(intervals) {
  intervals.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return a[1] - b[1];
  });

  let p1 = -1;
  let p2 = -1;
  let result = 0;

  for (let [start, end] of intervals) {
    if (start <= p1 && start <= p2) {
      continue;
    }
  
    if (start > p2) {
      p1 = end - 1;
      p2 = end;
      result += 2;
    } else {
      p1 = p2;
      p2 = end;
      result += 1;
    }
  }

  return result;
};