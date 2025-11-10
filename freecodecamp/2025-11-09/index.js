function findWord(matrix, word) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [
        [0, 1],   // right
        [0, -1],  // left
        [1, 0],   // down
        [-1, 0]   // up
    ];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            // only check directions if first letter matches
            if (matrix[r][c] !== word[0]) continue;

            for (let [dr, dc] of directions) {
                let match = true;
                let endR = r, endC = c;

                for (let i = 1; i < word.length; i++) {
                    const nr = r + dr * i;
                    const nc = c + dc * i;

                    // check bounds
                    if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) {
                        match = false;
                        break;
                    }

                    // check letter match
                    if (matrix[nr][nc] !== word[i]) {
                        match = false;
                        break;
                    }

                    // update last coordinate
                    endR = nr;
                    endC = nc;
                }

                if (match) return [[r, c], [endR, endC]];
            }
        }
    }
}

const x = findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") ;