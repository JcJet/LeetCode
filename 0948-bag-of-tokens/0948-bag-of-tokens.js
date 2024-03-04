/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    if (!tokens || tokens.length === 0) {
        return 0;
    }

    quicksort(tokens, 0, tokens.length - 1);
    let left = 0, score = 0, maxScore = 0, right = tokens.length - 1;

    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left++];
            score++;
        } else if (score > 0) {
            power += tokens[right--];
            score--;
        } else {
            break;
        }

        maxScore = Math.max(score, maxScore);
    }

    return maxScore;
};

function quicksort(arr, left, right) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    const pivotValue = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivotValue) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}