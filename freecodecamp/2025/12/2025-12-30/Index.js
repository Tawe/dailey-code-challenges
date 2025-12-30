function stringSum(str) {
    const numbers = str.match(/\d+/g);
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    return sum;
}

const x = stringSum("3apples2bananas")
x;