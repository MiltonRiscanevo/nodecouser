const capitalizeLetters = (str) => {
    let phrase = str.split(" ");

    return phrase.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

module.exports = {
    capitalizeLetters
}