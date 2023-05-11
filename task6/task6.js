function checkLogin (str) {
    if (str.length < 2 || str.length > 10 || /\d/.test(str[0])) {
        return false;
    }

    const numbs = str.match(/(\d+(\.\d+)?)/g);

    return numbs !== null;
}