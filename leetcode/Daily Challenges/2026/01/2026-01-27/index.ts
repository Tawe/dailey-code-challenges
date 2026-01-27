class PQ<T> {
    private heap: T[] = [];
    constructor(private compare: (a: T, b: T) => number) {}

    push(x: T) {
        this.heap.push(x);
        this.up(this.heap.length - 1);
    }

    pop(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length) {
            this.heap[0] = last;
            this.down(0);
        }
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    private up(i: number) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(this.heap[i], this.heap[p]) < 0) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
                i = p;
            } else break;
        }
    }

    private down(i: number) {
        const n = this.heap.length;
        while (true) {
            let s = i;
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            if (l < n && this.compare(this.heap[l], this.heap[s]) < 0) s = l;
            if (r < n && this.compare(this.heap[r], this.heap[s]) < 0) s = r;
            if (s === i) break;
            [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
            i = s;
        }
    }
}

function minCost(n: number, edges: number[][]): number {
    const adj: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, 2 * w]);
    }

    const dist = new Array<number>(n).fill(Infinity);
    dist[0] = 0;

    const pq = new PQ<[number, number]>((a, b) => a[0] - b[0]);
    pq.push([0, 0]);

    while (!pq.isEmpty()) {
        const [d, u] = pq.pop()!;
        if (d !== dist[u]) continue;
        if (u === n - 1) return d;

        for (const [v, w] of adj[u]) {
            const nd = d + w;
            if (nd < dist[v]) {
                dist[v] = nd;
                pq.push([nd, v]);
            }
        }
    }

    return -1;
}

const x = minCost(4, [[0,1,3],[3,1,1],[2,3,4],[0,2,2]])
x;