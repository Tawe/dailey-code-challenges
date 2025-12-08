var maxRunTime = function(n, batteries) {
    let total = batteries.reduce((a, b) => a + b, 0);

    let left = 0;
    let right = Math.floor(total / n); 
    function canRun(t) {
        let usable = 0;
        for (let b of batteries) {
            usable += Math.min(b, t);
            if (usable >= n * t) return true;
        }
        return usable >= n * t;
    }

    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        if (canRun(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

const x = maxRunTime(10, [3,3,3]);
x;