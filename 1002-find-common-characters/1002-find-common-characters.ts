function commonChars(words: string[]): string[] {
    if (words.length === 1) {
        return words[0].split('');
    }

    let result: string[] = [];
    let chars = new Set(words[0]);

    // Check each character in the set
    chars.forEach(char => {
        let frequency = Infinity;
        // Find the minimum frequency of this character in all words
        words.forEach(word => {
            let count = word.split('').filter(c => c === char).length;
            frequency = Math.min(frequency, count);
        });
        // Add the character to the result the number of times it appears in all words
        for (let i = 0; i < frequency; i++) {
            result.push(char);
        }
    });

    return result;
}