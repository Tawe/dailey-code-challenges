var countMentions = function(numberOfUsers, events) {
    const mentions = new Array(numberOfUsers).fill(0);
    const online = new Array(numberOfUsers).fill(true);
    const backAt = new Array(numberOfUsers).fill(Infinity);

    const byTime = new Map();
    for (const e of events) {
        const t = Number(e[1]);
        if (!byTime.has(t)) byTime.set(t, []);
        byTime.get(t).push(e);
    }

    const times = Array.from(byTime.keys()).sort((a, b) => a - b);

    for (const t of times) {
        for (let id = 0; id < numberOfUsers; id++) {
            if (backAt[id] <= t) {
                online[id] = true;
                backAt[id] = Infinity;
            }
        }

        const list = byTime.get(t);

        for (const e of list) {
            if (e[0] === "OFFLINE") {
                const id = Number(e[2]);
                online[id] = false;
                backAt[id] = t + 60;
            }
        }

        for (const e of list) {
            if (e[0] !== "MESSAGE") continue;
            const s = e[2];

            if (s === "ALL") {
                for (let id = 0; id < numberOfUsers; id++) mentions[id] += 1;
            } else if (s === "HERE") {
                for (let id = 0; id < numberOfUsers; id++) {
                    if (online[id]) mentions[id] += 1;
                }
             } else {
                const tokens = s.split(" ");
                for (const tok of tokens) {
                    const id = Number(tok.slice(2)); 
                    mentions[id] += 1; 
                }
            }
        }
    }

    return mentions;
};

const x = countMentions(5, [["OFFLINE","10","0"],["MESSAGE","12","HERE"]])
x;