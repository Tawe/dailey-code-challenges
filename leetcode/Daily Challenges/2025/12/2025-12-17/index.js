var maximumProfit = function(prices, k) {
    const NEG = -Infinity;

    let cash = Array(k + 1).fill(NEG);
    let long = Array(k + 1).fill(NEG);
    let short = Array(k + 1).fill(NEG);

    cash[0] = 0;

    for (const p of prices) {
        const nextCash = cash.slice();
        const nextLong = long.slice();
        const nextShort = short.slice();

        for (let t = 0; t <= k; t++) {
            nextLong[t] = Math.max(nextLong[t], cash[t] - p);
            nextShort[t] = Math.max(nextShort[t], cash[t] + p);

            if (t < k) {
                nextCash[t + 1] = Math.max(nextCash[t + 1], long[t] + p);
                nextCash[t + 1] = Math.max(nextCash[t + 1], short[t] - p);
            }
        }

        cash = nextCash;
        long = nextLong;
        short = nextShort;
    }

    return Math.max(...cash);
};

const x = maximumProfit([12,16,19,19,8,1,19,13,9], 3)
x;