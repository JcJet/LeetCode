var halvesAreAlike = function(s) {
    let a = s.slice(0,s.length/2), b = s.slice(s.length/2);
    let count = 0, vowels = "aeiouAEIOU";

    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) count++;
        if (vowels.includes(b[i])) count--;
    }

    return count === 0;
};