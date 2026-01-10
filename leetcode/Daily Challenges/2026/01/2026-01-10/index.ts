function minimumDeleteSum(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    let prev = new Array(n + 1).fill(0);

    for (let j = 1; j <= n; j++) {
        prev[j] = prev[j - 1] + s2.charCodeAt(j - 1);
    }

    for (let i = 1; i <= m; i++) {
        const curr = new Array(n + 1).fill(0);
        curr[0] = prev[0] + s1.charCodeAt(i - 1);

        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = Math.min(
                prev[j] + s1.charCodeAt(i - 1),
                curr[j - 1] + s2.charCodeAt(j - 1)
            );
        }
    }

    prev = curr;
    }

    return prev[n];
}
const x = minimumDeleteSum("delete", "leet");
x;