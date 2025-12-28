function toScreamingSnakeCase(variableName) {
    return variableName .replace(/-/g, "_")
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/__+/g, "_")
    .toUpperCase();
}

const x = toScreamingSnakeCase("snake_case");
x;