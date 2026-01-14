function separateSquares(squares: number[][]): number {
    type Event = { y: number; x1: number; x2: number; delta: 1 | -1 };

    const events: Event[] = [];
    const xs: number[] = [];

    for (const [x, y, l] of squares) {
        const x1 = x;
        const x2 = x + l;
        const y1 = y;
        const y2 = y + l;

        events.push({ y: y1, x1, x2, delta: 1 });
        events.push({ y: y2, x1, x2, delta: -1 });

        xs.push(x1, x2);
    }

    xs.sort((a, b) => a - b);
    const xVals: number[] = [];
    for (let i = 0; i < xs.length; i++) {
        if (i === 0 || xs[i] !== xs[i - 1]) xVals.push(xs[i]);
    }

    const xIndex = new Map<number, number>();
    for (let i = 0; i < xVals.length; i++) xIndex.set(xVals[i], i);

    const segN = xVals.length - 1;
    if (segN <= 0) return 0;

    const coverCount = new Array(segN * 4).fill(0);
    const coveredLen = new Array(segN * 4).fill(0);

    function pull(node: number, l: number, r: number) {
        if (coverCount[node] > 0) {
            coveredLen[node] = xVals[r + 1] - xVals[l];
        } else if (l === r) {
            coveredLen[node] = 0;
        } else {
            coveredLen[node] = coveredLen[node * 2] + coveredLen[node * 2 + 1];
        }
    }

    function update(node: number, l: number, r: number, ql: number, qr: number, delta: number) {
        if (qr < l || r < ql) return;
        if (ql <= l && r <= qr) {
            coverCount[node] += delta;
            pull(node, l, r);
            return;
        }
        const mid = (l + r) >> 1;
        update(node * 2, l, mid, ql, qr, delta);
        update(node * 2 + 1, mid + 1, r, ql, qr, delta);
        pull(node, l, r);
    }

    events.sort((a, b) => a.y - b.y);
    type Slab = { y0: number; y1: number; width: number; areaStart: number; areaEnd: number };
    const slabs: Slab[] = [];

    let prevY = events[0].y;
    let area = 0;

    let i = 0;
    while (i < events.length) {
        const currY = events[i].y;
        const dy = currY - prevY;

        if (dy > 0) {
            const width = coveredLen[1];
            if (width > 0) {
                const areaStart = area;
                area += width * dy;
                const areaEnd = area;
                slabs.push({ y0: prevY, y1: currY, width, areaStart, areaEnd });
            } 
        }
        while (i < events.length && events[i].y === currY) {
            const e = events[i];
            const L = xIndex.get(e.x1)!;
            const R = xIndex.get(e.x2)! - 1; 
            if (L <= R) update(1, 0, segN - 1, L, R, e.delta);
            i++;
        }

        prevY = currY;
    }

    const totalArea = area;
    if (totalArea === 0) return events[0].y; 

    const target = totalArea / 2;
    let lo = 0;
    let hi = slabs.length - 1;
    let idx = slabs.length - 1;

    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (slabs[mid].areaEnd >= target) {
            idx = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    const slab = slabs[idx];
    const remaining = target - slab.areaStart;
    const y = slab.y0 + remaining / slab.width;

    return y;
}

const d = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,5,5]];
const e = separateSquares(d);
e;