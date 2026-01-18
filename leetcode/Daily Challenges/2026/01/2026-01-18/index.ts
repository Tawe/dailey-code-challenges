function largestMagicSquare(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const rowPref = Array.from({ length: m }, () => Array(n + 1).fill(0));
    const colPref = Array.from({ length: m + 1 }, () => Array(n).fill(0));
    const diagPref = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    const antiPref = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            rowPref[r][c + 1] = rowPref[r][c] + grid[r][c];
            colPref[r + 1][c] = colPref[r][c] + grid[r][c];
            diagPref[r + 1][c + 1] = diagPref[r][c] + grid[r][c];
            antiPref[r + 1][c] = antiPref[r][c + 1] + grid[r][c];
        }
    }

    const rowSum = (r: number, c: number, k: number) =>
    rowPref[r][c + k] - rowPref[r][c];

    const colSum = (r: number, c: number, k: number) =>
    colPref[r + k][c] - colPref[r][c];

    const diagSum = (r: number, c: number, k: number) =>
    diagPref[r + k][c + k] - diagPref[r][c];

    const antiSum = (r: number, c: number, k: number) =>
    antiPref[r + k][c] - antiPref[r][c + k];

    function isMagic(r: number, c: number, k: number): boolean {
        const target = rowSum(r, c, k);

        for (let i = 0; i < k; i++) {
            if (rowSum(r + i, c, k) !== target) return false;
        }

        for (let j = 0; j < k; j++) {
            if (colSum(r, c + j, k) !== target) return false;
        }

        if (diagSum(r, c, k) !== target) return false;
        if (antiSum(r, c, k) !== target) return false;

        return true;
    }

    const maxK = Math.min(m, n);
    for (let k = maxK; k >= 2; k--) {
        for (let r = 0; r <= m - k; r++) {
            for (let c = 0; c <= n - k; c++) {
                if (isMagic(r, c, k)) return k;
            }
        }
    }

    return 1;
}

const x = largestMagicSquare([[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]]);
x;