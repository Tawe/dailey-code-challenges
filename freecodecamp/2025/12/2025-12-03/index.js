function convertListItem(markdown) {
    const regex = /^\s*([1-9]\d*)\.\s+(.+)$/;

    const match = markdown.match(regex);

    if (!match) {
        return "Invalid format";
    }

    const text = match[2];
    return `<li>${text}</li>`;   
}

const x = convertListItem("1. invalid again")
