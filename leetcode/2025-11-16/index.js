var numSub = function(s) {
    const MOD = 1_000_000_007;
    let count = 0;
    let streak = 0;

    for (const c of s) {
        if (c === "1") {
            streak++;
            count = (count + streak) % MOD;
        } else {
            streak = 0;
        }
    }

    return count;
};
