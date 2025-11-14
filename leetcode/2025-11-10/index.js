function findMaxForm(strs, m, n) {
  // dp[i][j] = max number of strings using at most i zeros and j ones
  const dp = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (const s of strs) {
    let zeros = 0;
    let ones = 0;

    // count zeros and ones in this string
    for (const ch of s) {
      if (ch === '0') zeros++;
      else if (ch === '1') ones++;
    }

    // classic 0/1 knapsack update: loop backwards
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i - zeros][j - ones] + 1
        );
      }
    }
  }

  return dp[m][n];
}
