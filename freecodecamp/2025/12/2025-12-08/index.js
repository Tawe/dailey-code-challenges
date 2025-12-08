function convertToKgs(lbs) {
    const KG_RATIO = 0.453592;
    const kgs = (lbs * KG_RATIO).toFixed(2);
    const poundsWord = lbs === 1 ? "pound" : "pounds";
    const kilosWord = kgs === "1.00" ? "kilogram" : "kilograms";

    return `${lbs} ${poundsWord} equals ${kgs} ${kilosWord}.`;
}


const x = convertToKgs(100);
x;