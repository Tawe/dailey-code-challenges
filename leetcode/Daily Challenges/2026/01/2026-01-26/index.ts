function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
    }
    const result: number[][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === minDiff) {
            result.push([arr[i], arr[i + 1]]);
        }
    }
    return result;
};

const x = minimumAbsDifference([4,2,1,3]);
x;