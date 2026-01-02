function repeatedNTimes(nums: number[]): number {
    const count = new Map<number, number>();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    let max = 0;
    let maxKey = 0;
    for (const [key, value] of count.entries()) {
        if (value > max) {
            max = value;
            maxKey = key;
        }
    }
    return maxKey;
};

const x = repeatedNTimes([1,2,3,3,6,6,6,6]);
x;