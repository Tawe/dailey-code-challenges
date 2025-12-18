var maxProfit = function(prices, strategy, k) {
    const n = prices.length;
    const h = k / 2;

    const prefSP = new Array(n + 1).fill(0);
    const prefTP = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const sp = strategy[i] * prices[i];
        const tp = (1 - strategy[i]) * prices[i];
        prefSP[i + 1] = prefSP[i] + sp;
        prefTP[i + 1] = prefTP[i] + tp;
    }

    const base = prefSP[n];

    let bestDelta = 0;
    for (let l = 0; l + k <= n; l++) {
        const a = prefSP[l + h] - prefSP[l];
        const c = prefTP[l + k] - prefTP[l + h];
        const delta = -a + c;
        if (delta > bestDelta) bestDelta = delta;
    }

    return base + bestDelta;
};