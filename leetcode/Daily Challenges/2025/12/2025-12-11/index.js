var countCoveredBuildings = function(n, buildings) {
    const INF = Number.POSITIVE_INFINITY;

    const minY = new Array(n + 1).fill(INF);
    const maxY = new Array(n + 1).fill(-INF);
    const minX = new Array(n + 1).fill(INF);
    const maxX = new Array(n + 1).fill(-INF);

    for (const [x, y] of buildings) {
        if (y < minY[x]) minY[x] = y;
        if (y > maxY[x]) maxY[x] = y;

        if (x < minX[y]) minX[y] = x;
        if (x > maxX[y]) maxX[y] = x;
    }

    let covered = 0;
    for (const [x, y] of buildings) {
    
        const hasLeftAndRight = (y > minY[x]) && (y < maxY[x]);
        const hasUpAndDown   = (x > minX[y]) && (x < maxX[y]);

        if (hasLeftAndRight && hasUpAndDown) {
            covered++;
        }
    }

    return covered;
};

const x = countCoveredBuildings(5, [[1,3],[3,2],[3,3],[3,5],[5,3]])
x;