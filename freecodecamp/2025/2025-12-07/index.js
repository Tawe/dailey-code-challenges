function compressString(sentence) {
    const words = sentence.split(" ");
    let result = [];

    let count = 1;

    for (let i = 1; i <= words.length; i++) {
        if (words[i] === words[i - 1]) {
            count++;
        } else {
            if (count > 1) {
                result.push(`${words[i - 1]}(${count})`);
            } else {
                result.push(words[i - 1]);
            }
            count = 1;
        }
    }

    return result.join(" ");
}
