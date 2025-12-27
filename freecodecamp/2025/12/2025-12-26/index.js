function sumDivisors(n) {
    let sum = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
        sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }

    return sum;
}

const x = sumDivisors(6);
x;