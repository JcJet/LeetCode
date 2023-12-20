function buyChoco(prices: number[], money: number): number {
    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            secondMin = min;
            min = prices[i];

            continue;
        }

        if (secondMin > prices[i]) {
            secondMin = prices[i];
        }
    }

    if (min + secondMin > money) {
        return money;
    }

    return money - (secondMin + min);
};