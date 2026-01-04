function sumFourDivisors(nums: number[]): number {
    let total = 0;
    for (const n of nums) {
        const s = sumIfFourDivisors(n);
        if (s !== 0) total += s;
    }
    return total;
}

function sumIfFourDivisors(n: number): number {
    let divCount = 0;
    let sum = 0;
    const root = Math.floor(Math.sqrt(n));

    for (let d = 1; d <= root; d++) {
        if (n % d !== 0) continue;
        const q = n / d;
        divCount++;
        sum += d;
        if (q !== d) {
            divCount++;
            sum += q;
        }
        if (divCount > 4) return 0;
    }
    return divCount === 4 ? sum : 0;
}

console.log(sumFourDivisors([21,4,7]))