var reversePrefix = function (word, ch) {
    let slicedWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            slicedWord = word.slice(0, i + 1);
            slicedWord = slicedWord.split('').reverse().join('');
            let remainingWord = word.slice(i + 1);
            return slicedWord + remainingWord;
        }
    }
    return word;

};