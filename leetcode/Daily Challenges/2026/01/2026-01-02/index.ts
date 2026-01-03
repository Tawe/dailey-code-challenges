function repeatedNTimes(nums: number[]): number {
    const seen = new Set<number>();
    for (const x of nums) {
        if (seen.has(x)) return x;
        seen.add(x);
    }
}

const x = repeatedNTimes([1,2,3,3,6,6,6,6]);
x;