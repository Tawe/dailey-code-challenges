var maximumHappinessSum = function(happiness, k) {
    const sortedHappiness = happiness.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < k; i++) {
        const val = happiness[i] - i;
        if (val <= 0) break;
        sum += Number(val);
    }
    return sum;
};

const x = maximumHappinessSum([1,2,3], 2);
x;