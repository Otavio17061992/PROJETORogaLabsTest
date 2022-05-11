function get(path, obj) {
    const clearPath = path
        .replaceAll("[", ".")
        .replaceAll("]", "")
        .split(".");

    let position = obj;

    for (let index = 0; index < clearPath.length; index++) {
    
        position = position[clearPath[index]];
    }

    return position ? position : false;
}

module.exports = get;
