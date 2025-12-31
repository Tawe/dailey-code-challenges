var latestDayToCross = function(row, col, cells) {
    const N = row * col;
    const TOP = N;
    const BOTTOM = N + 1;
    const dsu = new DisjointSetUnion(N + 2);
    const land = new Array(N).fill(false);
    const idx = (r, c) => (r * col + c);
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    for (let day = cells.length - 1; day >= 0; day--) {
        const r0 = cells[day][0] - 1;
        const c0 = cells[day][1] - 1;
        const id = idx(r0, c0);
        land[id] = true;

        if (r0 === 0) dsu.union(id, TOP);
        if (r0 === row - 1) dsu.union(id, BOTTOM);

        for (const [dr, dc] of dirs) {
            const nr = r0 + dr, nc = c0 + dc;
            if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue;
            const nid = idx(nr, nc);
            if (land[nid]) dsu.union(id, nid);
        }

        if (dsu.connected(TOP, BOTTOM)) {
            return day; 
        }
    }

    return 0;
};

class DisjointSetUnion {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
  union(a, b) {
    let ra = this.find(a);
    let rb = this.find(b);
    if (ra === rb) return;

    if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra;
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++;
  }
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

const x = latestDayToCross(2, 2, [[1,1],[2,1],[1,2],[2,2]])
x;