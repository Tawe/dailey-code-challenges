var countPermutations = function(complexity) {
    const MOD = 1_000_000_007;
    const n = complexity.length;

    for (let i = 1; i < n; i++) {
        if (complexity[i] <= complexity[0]) {
            return 0;
        }
    }

    let ans = 1;
    for (let i = 1; i <= n - 1; i++) {
        ans = (ans * i) % MOD;
    }

    return ans;
};

const x = countPermutations([3,3,3,4,4,4])