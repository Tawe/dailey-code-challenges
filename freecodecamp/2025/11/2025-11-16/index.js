function countRectangles(width, height) {
    const wCount = width * (width + 1) / 2;
    const hCount = height * (height + 1) / 2;

    return wCount * hCount;
}

const x = countRectangles(1, 3);