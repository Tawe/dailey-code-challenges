var maxTwoEvents = function(events) {
    events.sort((a, b) => a[1] - b[1]);

    const n = events.length;
    const ends = new Array(n);
    const bestUpTo = new Array(n);

    let best = 0;
    for (let i = 0; i < n; i++) {
        const v = events[i][2];
        ends[i] = events[i][1];
        best = Math.max(best, v);
        bestUpTo[i] = best;
    }

    let ans = 0;

    function lastEndBefore(start) {
    let lo = 0, hi = n - 1, res = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
            if (ends[mid] < start) {
                res = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return res;
    }

    for (let i = 0; i < n; i++) {
        const [s, e, v] = events[i];
        const j = lastEndBefore(s);
        const total = v + (j >= 0 ? bestUpTo[j] : 0);
        ans = Math.max(ans, total);
    }

    return ans;
};

const x = maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]]);
x;