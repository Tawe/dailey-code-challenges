def parse_link(markdown):
    return markdown.replace("[", "<a href=").replace("]", "</a>")  

print(parse_link("[freeCodeCamp](https://freecodecamp.org/)"))