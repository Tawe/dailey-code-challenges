var findAllPeople = function(n, meetings, firstPerson) {
    meetings.sort((a, b) => a[2] - b[2]);

    const knows = new Array(n).fill(false);
    knows[0] = true;
    knows[firstPerson] = true;

    class DSU {
        constructor() {
            this.parent = new Map();
            this.rank = new Map();
        }
        make(x) {
            if (!this.parent.has(x)) {
                this.parent.set(x, x);
                this.rank.set(x, 0);
            }
        }
        find(x) {
                this.make(x);
                let p = this.parent.get(x);
                if (p !== x) {
                p = this.find(p);
                this.parent.set(x, p);
            }
            return p;
        }
        union(a, b) {
            const ra = this.find(a);
            const rb = this.find(b);
            if (ra === rb) return;
            const rka = this.rank.get(ra);
            const rkb = this.rank.get(rb);
            if (rka < rkb) this.parent.set(ra, rb);
            else if (rka > rkb) this.parent.set(rb, ra);
            else {
                this.parent.set(rb, ra);
                this.rank.set(ra, rka + 1);
            }
        }
    }

    let i = 0;
    while (i < meetings.length) {
        const t = meetings[i][2];
        const dsu = new DSU();
        const people = [];

        let j = i;
        while (j < meetings.length && meetings[j][2] === t) {
            const [x, y] = meetings[j];
            dsu.union(x, y);
            people.push(x, y);
            j++;
        }

        const unique = Array.from(new Set(people));
        const goodRoots = new Set();
        for (const p of unique) {
            if (knows[p]) goodRoots.add(dsu.find(p));
        }
        for (const p of unique) {
            if (goodRoots.has(dsu.find(p))) knows[p] = true;
        }

        i = j;
    }

    const ans = [];
    for (let p = 0; p < n; p++) if (knows[p]) ans.push(p);
    return ans;
}


const x = findAllPeople(5, [3,4,2],[1,2,1],[2,3,1], 1);
x;
