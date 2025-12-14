var numberOfWays = function(corridor) {
    const MOD = 1000000007n;

    let totalSeats = 0;
    for (const ch of corridor) if (ch === 'S') totalSeats++;

    if (totalSeats === 0 || (totalSeats % 2) === 1) return 0;
    if (totalSeats === 2) return 1;

    let ways = 1n;
    let seatsSeen = 0;
    let plantsBetween = 0;
    let countingPlants = false; 
    
    for (const ch of corridor) {
        if (ch === 'S') {
            seatsSeen++;
            if (seatsSeen % 2 === 0) {
                countingPlants = true;
                plantsBetween = 0;
            } else {
                if (countingPlants) {
                    ways = (ways * BigInt(plantsBetween + 1)) % MOD;
                    countingPlants = false;
                }
            }
        } else {
            if (countingPlants) plantsBetween++;
        }
    }

    return Number(ways);
};

const x = numberOfWays("SSPPSPS")
x;