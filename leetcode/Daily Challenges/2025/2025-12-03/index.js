function countTrapezoids(points) {
  const n = points.length;

  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a;
  }

  const lineMap = new Map();
  const midCount = new Map();

  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];

      const mx = x1 + x2;
      const my = y1 + y2;
      const midKey = `${mx}#${my}`;
      midCount.set(midKey, (midCount.get(midKey) || 0) + 1);

      let A = y2 - y1;
      let B = x1 - x2;
      if (A === 0 && B === 0) continue; 

      let g = gcd(A, B);
      A /= g;
      B /= g;

      if (A < 0 || (A === 0 && B < 0)) {
        A = -A;
        B = -B;
      }

      const C = -(A * x1 + B * y1);
      const slopeKey = `${A}#${B}`;
      const lineKey = `${A}#${B}#${C}`;

      let entry = lineMap.get(lineKey);
      if (!entry) {
        entry = { slopeKey, pointSet: new Set() };
        lineMap.set(lineKey, entry);
      }
      entry.pointSet.add(i);
      entry.pointSet.add(j);
    }
  }

  const slopeToKs = new Map();
  for (const { slopeKey, pointSet } of lineMap.values()) {
    const k = pointSet.size;
    if (k >= 2) {
      if (!slopeToKs.has(slopeKey)) slopeToKs.set(slopeKey, []);
      slopeToKs.get(slopeKey).push(k);
    }
  }

  let totalParallelPairs = 0;

  for (const ks of slopeToKs.values()) {
    const segs = ks.map(k => (k * (k - 1)) / 2); // segments on each line
    let sumSeg = 0;
    let sumSegSq = 0;
    for (const s of segs) {
      sumSeg += s;
      sumSegSq += s * s;
    }
    totalParallelPairs += (sumSeg * sumSeg - sumSegSq) / 2;
  }

  let P_total = 0;
  for (const c of midCount.values()) {
    if (c >= 2) {
      P_total += (c * (c - 1)) / 2;
    }
  }

  let degAll = 0;

  for (const { pointSet } of lineMap.values()) {
    const pts = Array.from(pointSet);
    const k = pts.length;
    if (k < 4) continue; 

    const localMid = new Map(); 

    for (let a = 0; a < k; a++) {
      const [x1, y1] = points[pts[a]];
      for (let b = a + 1; b < k; b++) {
        const [x2, y2] = points[pts[b]];
        const sx = x1 + x2;
        const sy = y1 + y2;
        const key = `${sx}#${sy}`;
        localMid.set(key, (localMid.get(key) || 0) + 1);
      }
    }

    for (const c of localMid.values()) {
      if (c >= 2) {
        degAll += (c * (c - 1)) / 2;
      }
    }
  }

  const result = totalParallelPairs - (P_total - degAll);
  return result;
}

const x = countTrapezoids([[-3,2],[3,0],[2,3],[3,2],[2,-3]])
x