function firstPalindrome(words: string[]): string {
   for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isPalindromic = true;

        for (let j = 0; j < word.length/2; j++) {
            if (word[j] !== word[word.length - j - 1]) {
                isPalindromic = false;
                break;
            }
        }

        if (isPalindromic) return word;
    }

    return '';
}