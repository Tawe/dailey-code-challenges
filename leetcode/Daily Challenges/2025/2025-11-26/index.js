var numberOfPaths = function(grid, k) {
  const MOD = 1_000_000_007;
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Array(k).fill(0))
  );

  const firstRem = grid[0][0] % k;
  dp[0][0][firstRem] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      if (i === 0 && j === 0) continue;

      const val = grid[i][j] % k;

      for (let rPrev = 0; rPrev < k; rPrev++) {
        const waysFromTop = i > 0 ? dp[i - 1][j][rPrev] : 0;
        const waysFromLeft = j > 0 ? dp[i][j - 1][rPrev] : 0;

        const totalWays = (waysFromTop + waysFromLeft) % MOD;
        if (totalWays === 0) continue; 

        const rNew = (rPrev + val) % k;
        dp[i][j][rNew] = (dp[i][j][rNew] + totalWays) % MOD;
      }
    }
  }

  return dp[m - 1][n - 1][0];
};

const x = numberOfPaths([[7,3,4,9],[2,3,6,2],[2,3,7,0]], 1)
x;