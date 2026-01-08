function maxDotProduct(nums1: number[], nums2: number[]): number {
    const n = nums1.length, m = nums2.length;
    let prev = new Array<number>(m + 1).fill(-Infinity);
    let curr = new Array<number>(m + 1).fill(-Infinity);

    for (let i = 1; i <= n; i++) {
        curr[0] = -Infinity;
        for (let j = 1; j <= m; j++) {
            const prod = nums1[i - 1] * nums2[j - 1];
            const take = prod + Math.max(0, prev[j - 1]);
            curr[j] = Math.max(take, prev[j], curr[j - 1]);
        }
        [prev, curr] = [curr, prev];
    }
    return prev[m];
}

const x = maxDotProduct([2,1,-2,5], [3,0,-6]);
x;