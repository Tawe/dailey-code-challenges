function maxMatrixSum(matrix: number[][]): number {
    let sumAbs: number = 0;
    let negCount: number = 0;
    let minAbs: number = Number.MAX_SAFE_INTEGER;
    
    for (const row of matrix) {
      for (const value of row) {
        const absVal = Math.abs(value);
        sumAbs += absVal;
        if (value < 0) negCount++;
        if (absVal < minAbs) minAbs = absVal;
      }
    }

    if (negCount % 2 === 0) {
      return sumAbs;
    }

    return sumAbs - 2 * minAbs; 
}

console.log(maxMatrixSum([[1,-1],[-1,1]]))