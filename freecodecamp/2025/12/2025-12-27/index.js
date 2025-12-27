function rockPaperScissors(player1, player2) {
    if (player1 === player2) return "Tie";
    const beats = { Rock: "Scissors", Paper: "Rock", Scissors: "Paper" };
    return beats[player1] === player2 ? "Player 1 wins" : "Player 2 wins";
}

const x = rockPaperScissors("Rock", "Scissors");
x;