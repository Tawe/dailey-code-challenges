function formatDate(dateString) { 
    const dateArr = dateString.split(" ");
    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];

    const monthIndex = months.indexOf(dateArr[0].toLowerCase()) + 1;
    const day = dateArr[1].replace(",", "").padStart(2, "0");
    const year = dateArr[2];

    const month = String(monthIndex).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


const x = formatDate("December 6, 2025")
x; 