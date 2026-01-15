function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
    function maxConsecutive(bars: number[]): number {
        if (bars.length === 0) return 0;
        
        bars.sort((a, b) => a - b);
        let maxLen = 1;
        let currentLen = 1;
        
        for (let i = 1; i < bars.length; i++) {
            if (bars[i] === bars[i - 1] + 1) {
                currentLen++;
            } else {
                maxLen = Math.max(maxLen, currentLen);
                currentLen = 1;
            }
        }
        maxLen = Math.max(maxLen, currentLen);
        
        return maxLen;
    }
    const maxH = maxConsecutive(hBars);
    const maxV = maxConsecutive(vBars);
    const side = Math.min(maxH + 1, maxV + 1);
    
    return side * side;
}

const x = maximizeSquareHoleArea(3, 3, [1, 2, 3], [1, 2, 3]);
x;