var isOneBitCharacter = function(bits) {
    let i = bits.length - 2;
    let count = 0;
    while (i >= 0 && bits[i] === 1) {
        count++;
        i--;
    }
    return count % 2 === 0;
};
