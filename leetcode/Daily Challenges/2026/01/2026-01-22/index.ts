function minimumPairRemoval(nums: number[]): number {
    const isNonDecreasing = (arr: number[]): boolean => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    let operations = 0;
    let arr = [...nums];

    while (!isNonDecreasing(arr)) {
        let minSum = Infinity;
        let minIndex = -1;

        for (let i = 0; i < arr.length - 1; i++) {
            const sum = arr[i] + arr[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minIndex = i;
            }
        }

        arr[minIndex] = minSum;
        arr.splice(minIndex + 1, 1);
        operations++;
    }

    return operations;
}

const x = minimumPairRemoval([5,2,3,1]);
x;