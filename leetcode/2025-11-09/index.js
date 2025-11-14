var countOperations = function(num1, num2) {
    let count = 0;

    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            const times = Math.floor(num1 / num2); // how many subtractions at once
            count += times;
            num1 = num1 % num2; // leftover after all those subtractions
        } else {
            const times = Math.floor(num2 / num1);
            count += times;
            num2 = num2 % num1;
        }
    }

    return count;
};

const x = countOperations(2,3)