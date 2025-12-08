function countPermutations(str) {
    const obj = {};
    const strLength = str.length
    for (const ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }

    let result = factorial(strLength)

    let denominator =1
    for (const count of Object.values(obj)) {
        denominator *= factorial(count);
    }

    return result/denominator
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


const x = countPermutations("racecar")