class MinHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare; 
    }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(x) {
        const a = this.data;
        a.push(x);
        this._siftUp(a.length - 1);
    }
    pop() {
    const a = this.data;
        if (a.length === 0) return undefined;
        const top = a[0];
        const last = a.pop();
        if (a.length > 0) {
            a[0] = last;
            this._siftDown(0);
        }
        return top;
        }
    _siftUp(i) {
        const a = this.data, cmp = this.compare;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (cmp(a[i], a[p]) >= 0) break;
            [a[i], a[p]] = [a[p], a[i]];
            i = p;
        }
    }
    _siftDown(i) {
        const a = this.data, cmp = this.compare;
        const n = a.length;
        while (true) {
            let left = i * 2 + 1;
            let right = left + 1;
            let best = i;

            if (left < n && cmp(a[left], a[best]) < 0) best = left;
            if (right < n && cmp(a[right], a[best]) < 0) best = right;
            if (best === i) break;

            [a[i], a[best]] = [a[best], a[i]];
            i = best;
        }
    }
}

var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]); 

    const available = new MinHeap((a, b) => a - b);
    for (let r = 0; r < n; r++) available.push(r);

    const busy = new MinHeap((x, y) => (x[0] - y[0]) || (x[1] - y[1]));

    const count = new Array(n).fill(0);

    for (const [start, end] of meetings) {
        const duration = end - start;

        while (busy.size() && busy.peek()[0] <= start) {
            const [, room] = busy.pop();
            available.push(room);
        }

        if (available.size()) {
            const room = available.pop();
            count[room]++;
            busy.push([end, room]);
        } else {
            const [freeTime, room] = busy.pop();
            count[room]++;
            busy.push([freeTime + duration, room]);
        }
    }

    let bestRoom = 0;
    for (let r = 1; r < n; r++) {
        if (count[r] > count[bestRoom]) {
            bestRoom = r;
        }
    }
    return bestRoom;
};

const x = mostBooked(2, [[0,10],[1,5],[2,7],[3,4]]);
x;