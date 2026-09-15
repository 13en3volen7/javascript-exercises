function removePunctuationAndWordBreaks(string) {
    let result = "";
    for (let letter of string) {
        if ((letter >= 'A' && letter <= 'Z') || 
        (letter >= 'a' && letter <= 'z') ||
        (letter >= '0' && letter <= '9')) {
            result += letter.toLowerCase();
        }
    }
    return result;
}

const palindromes = function (string) {
    const cleanString = removePunctuationAndWordBreaks(string);
    let l = 0, r = cleanString.length - 1;
    while (l <= r) {
        if (cleanString.at(l) !== cleanString.at(r)) {
            return false;
        }
        l++; r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
