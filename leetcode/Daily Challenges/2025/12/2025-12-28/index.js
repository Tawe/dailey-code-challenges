var countNegatives = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let r = 0, c = n - 1;
    let count = 0;

    while (r < m && c >= 0) {
        if (grid[r][c] < 0) {
            count += (m - r);
            c--;
        } else {
            r++;
        }
    }

    return count;
};

const x = countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
x;