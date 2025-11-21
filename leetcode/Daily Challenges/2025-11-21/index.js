var countPalindromicSubsequence = function(s) {
    let count = 0;

    for (let code = 97; code <= 122; code++) {
        const ch = String.fromCharCode(code);

        const left = s.indexOf(ch);
        const right = s.lastIndexOf(ch);

        if (left === -1 || left >= right) continue;

        const middleChars = new Set();

        for (let i = left + 1; i < right; i++) {
            middleChars.add(s[i]);
        }

        count += middleChars.size;
    }

    return count;
};

const x = countPalindromicSubsequence("bbcbaba");