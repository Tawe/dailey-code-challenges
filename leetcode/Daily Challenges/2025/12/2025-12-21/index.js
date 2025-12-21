var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;

    const sorted = new Array(n - 1).fill(false);

    let deletions = 0;

    for (let c = 0; c < m; c++) {
        let bad = false;
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][c] > strs[i + 1][c]) {
                bad = true;
                break;
            }
         }

        if (bad) {
            deletions++;
            continue;
        }

        
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][c] < strs[i + 1][c]) {
             sorted[i] = true;
            }
        }

    }

    return deletions;
};

const x = minDeletionSize(["ca","bb","ac"]);
x;