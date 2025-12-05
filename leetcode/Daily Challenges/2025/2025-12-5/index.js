var countPartitions = function(nums) {
    const n = nums.length;
    const total = nums.reduce((sum, x) => sum + x, 0);

    if (total % 2 !== 0) {
        return 0;
    }

    return n - 1;
};

const x = countPartitions([10,10,3,7,6])