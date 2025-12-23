function buyItems(funds, items) {
    const rates = {
        USD: 1.0,
        EUR: 1.10,
        GBP: 1.25,
        JPY: 0.0070,
        CAD: 0.75,
    };

    const toUSD = ([amtStr, code]) => {
        const amt = Number(amtStr);
        return amt * rates[code];
    };

    let budget = toUSD(funds);
    let count = 0;

    for (const item of items) {
        const cost = toUSD(item);
        if (budget + 1e-9 < cost) break;
        budget -= cost;
        count++;
    }

    return count === items.length ? "Buy them all!" : `Buy the first ${count} items.`;
}

const x = buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]])
x;