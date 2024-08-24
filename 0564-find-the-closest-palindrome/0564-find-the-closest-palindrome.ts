function nearestPalindromic(n: string): string {
    if (n === '10' || n === '11') {
        return '9';
    }
    let number = 0;
    let ten = 1;
    const dp: number[] = [];
    dp[0] = ten;
    for (let i = 1; i < 18; i++) {
        dp[i] = dp[i - 1] * 10;
    }
    number = (Number(n[0] || 0) - 0);
    if (n.length === 1) {
        number--;
        return number.toString();
    }
    for (let i = 1; i < n.length; i++) {
        number = (number * 10) + (Number(n[i] || 0) - 0);
    }
    for (let i = 0; i < 19; i++) {
        if (dp[i] === number) {
            return (number - 1).toString();
        }
        if (dp[i] === (number + 1)) {
            return (dp[i] + 1).toString();
        }
    }
    let copyNumber = number;
    const mid = Math.floor(n.length / 2);

    copyNumber = Math.floor(number / dp[mid]);
    copyNumber -= 1;
    let takeOffMid = '';
    let firstHalf = copyNumber.toString();
    if (n.length % 2 && firstHalf.length > mid) {
        takeOffMid = firstHalf[firstHalf.length - 1];
        firstHalf = firstHalf.slice(0, firstHalf.length - 1);
    }

    let reversedHalf = firstHalf;
    reversedHalf = reversedHalf.split('').reverse().join('');
    let less = firstHalf + takeOffMid + reversedHalf; // Assuming leeseer Value is the answer.

    copyNumber = Math.floor(number / dp[mid]);
    copyNumber += 1;
    if (copyNumber === 0) {
        return '9';
    }
    takeOffMid = '';
    firstHalf = copyNumber.toString();
    if (n.length % 2) {
        takeOffMid = firstHalf[firstHalf.length - 1];
        firstHalf = firstHalf.slice(0, firstHalf.length - 1);
    }

    reversedHalf = firstHalf;
    reversedHalf = reversedHalf.split('').reverse().join('');
    let more = firstHalf + takeOffMid + reversedHalf; // Assuming greater Value is the answer.

    let possibleAns = '';
    if (Number(more) - number < number - Number(less)) {
        possibleAns = more;
    } else {
        possibleAns = less;
    }
    
    if (!isPalindrome(n)) {
        // Assuming Revered value as answer
        let j = n.length - 1;
        for (let i = 0; i < mid; i++) {
            n = n.slice(0, j) + n[i] + n.slice(j + 1);
            j--;
        }
        const thirdParty = Number(n);
        if (Math.abs(Number(possibleAns) - number) > Math.abs(number - Number(n))) {
            possibleAns = n;
        } else if (Math.abs(Number(possibleAns) - number) === Math.abs(number - Number(n))) {
            if (Number(n) <= Number(possibleAns)) {
                possibleAns = n;
            }
        }
    }
    return possibleAns;
}

function isPalindrome(n: string): boolean {
    let j = n.length - 1;
    for (let i = 0; i < Math.floor(n.length / 2); i++) {
        if (n[i] !== n[j]) {
            return false;
        }
        j--;
    }
    return true;
}