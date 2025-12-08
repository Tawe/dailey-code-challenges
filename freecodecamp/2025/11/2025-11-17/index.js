function isMatch(fingerprintA, fingerprintB) {
    if(fingerprintA.length !== fingerprintB.length){
        return false;
    }
    const length = fingerprintA.length
    let count = 0
    for (let i = 0; i < fingerprintA.length; i++) {
        if (fingerprintA[i] !== fingerprintB[i]) {
            count++;
        }
    }

    return ((100 * count) / length) <= 10
}

const x = isMatch("hellowerld", "helloworld")
x;