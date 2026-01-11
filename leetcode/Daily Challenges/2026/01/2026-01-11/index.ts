function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let maxArea = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        const stack: number[] = [];
        for (let j = 0; j <= cols; j++) {
            const h = j < cols ? heights[j] : 0;
            
            while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
                const height = heights[stack.pop()!];
                const width = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(j);
        }
    }
    
    return maxArea;
}

const e = maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
e;