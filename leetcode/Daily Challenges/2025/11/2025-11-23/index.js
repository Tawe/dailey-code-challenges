var maxSumDivThree = function(nums) {
  let sum = 0;

  const smallest1 = [Infinity, Infinity, Infinity];
  const smallest2 = [Infinity, Infinity, Infinity];

  for (const x of nums) {
    sum += x;
    const r = x % 3;

    if (x < smallest1[r]) {
      smallest2[r] = smallest1[r];
      smallest1[r] = x;
    } else if (x < smallest2[r]) {
      smallest2[r] = x;
    }
  }

  if (sum % 3 === 0) return sum;

  let toRemove = Infinity;

  if (sum % 3 === 1) {
    const option1 = smallest1[1];

    const option2 = smallest1[2] + smallest2[2];

    toRemove = Math.min(option1, option2);
  } else { 
    const option1 = smallest1[2];

    const option2 = smallest1[1] + smallest2[1];

    toRemove = Math.min(option1, option2);
  }

  if (!isFinite(toRemove)) return 0; 
  return sum - toRemove;
};
