function parseItalics(markdown) {
    return markdown.replace(/(\*|_)(\S)(.*?\S)\1/g, "<i>$2$3</i>");
}

const x = parseItalics("*This is italic*");
x;