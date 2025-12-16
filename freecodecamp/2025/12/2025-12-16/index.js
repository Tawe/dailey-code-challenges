function hasConsonantCount(text, target) {
    const m = text.match(/[b-df-hj-np-tv-z]/gi);
    return (m ? m.length : 0) === target;
}

const x  = hasConsonantCount("Th3 Qu!ck eeeddddBr0wn F0ex Jump5 0ver Th3 L@zy D0g.", 23)
x;