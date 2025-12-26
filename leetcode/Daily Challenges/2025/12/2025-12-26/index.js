var bestClosingTime = function(customers) {
    const n = customers.length;

    let penalty = 0;
    for (const ch of customers) {
        if (ch === "Y") penalty++;
    }

    let bestHour = 0;
    let bestPenalty = penalty;

    for (let j = 0; j < n; j++) {
        if (customers[j] === "Y") {
            penalty -= 1;
        } else {
            penalty += 1;
        }

        const hour = j + 1;
        if (penalty < bestPenalty) {
            bestPenalty = penalty;
            bestHour = j + 1;
        }
    }

    return bestHour;
};

const x = bestClosingTime("YYNY");
x;