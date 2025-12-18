function createBoard(dimensions) {
    const [rows, cols] = dimensions;
    const board = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push((i + j) % 2 === 0 ? "X" : "O");
        }
        board.push(row);
    }

    return board;
}


const x = createBoard([3, 3])
x;