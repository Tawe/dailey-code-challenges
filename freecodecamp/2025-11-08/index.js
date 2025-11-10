function canPost(message) {
    if(message.length > 80){
        return "invalid post"
    }

    return (message.length > 40) ? "long post" : "short post";
}

const x = canPost("Hello world");
