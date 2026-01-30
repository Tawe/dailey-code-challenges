function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const INF = Number.MAX_SAFE_INTEGER;

    const strToIdx = new Map<string, number>();
    for (const s of original) {
        if (!strToIdx.has(s)) strToIdx.set(s, strToIdx.size);
    }
    for (const s of changed) {
        if (!strToIdx.has(s)) strToIdx.set(s, strToIdx.size);
    }

    const N = strToIdx.size;
    const dist: number[][] = Array.from({ length: N }, () => Array(N).fill(INF));

    for (let i = 0; i < N; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const a = strToIdx.get(original[i])!;
        const b = strToIdx.get(changed[i])!;
        dist[a][b] = Math.min(dist[a][b], cost[i]);
    }

    for (let k = 0; k < N; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (dist[i][k] !== INF && dist[k][j] !== INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    const n = source.length;
    const lengths = new Set(original.map((s) => s.length));
    lengths.add(1);

    const dp: number[] = Array(n + 1).fill(INF);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (const len of lengths) {
            const j = i - len;
            if (j < 0) continue;

            const segSource = source.slice(j, i);
            const segTarget = target.slice(j, i);

            if (segSource === segTarget) {
                dp[i] = Math.min(dp[i], dp[j]);
            } else {
                const idxSource = strToIdx.get(segSource);
                const idxTarget = strToIdx.get(segTarget);
                if (idxSource !== undefined && idxTarget !== undefined && dist[idxSource][idxTarget] !== INF) {
                    dp[i] = Math.min(dp[i], dp[j] + dist[idxSource][idxTarget]);
                }
            }
        }
    }

    return dp[n] === INF ? -1 : dp[n];
}

const x = minimumCost("abcd", "acbe", ["a","b","c","c","e","d"], ["b","c","b","e","b","e"], [2,5,5,1,2,20]);
x;