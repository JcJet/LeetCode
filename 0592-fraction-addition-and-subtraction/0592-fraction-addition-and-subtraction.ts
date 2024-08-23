function fractionAddition(expression: string): string {
    if (!expression.startsWith('-')) expression = '+' + expression

    const getGcd = (a: number, b: number): number => {
        if (a === 0) return b;
        return getGcd(b % a, a);
    }

    const fractions = expression.split(/(?=[+-])/g)

    let result = fractions[0]
    let i = 1

    while (i < fractions.length) {
        const [a, b] = result.split('/').map(Number)
        const [c, d] = fractions[i].split('/').map(Number)

        const numerator = a * d + c * b
        const denominator = b * d
        const gcd = Math.abs(getGcd(numerator, denominator))

        result = `${numerator/gcd}/${denominator/gcd}`
        i++
    }

    return result.startsWith('+') ? result.slice(1) : result
};
