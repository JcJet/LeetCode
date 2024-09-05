function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const m = rolls.length
    
    const totalSum = mean * (n + m)
    
    const observedSum = rolls.reduce((acc, val) => acc + val, 0)
    
    const missingSum = totalSum - observedSum
    
    if (missingSum < n || missingSum > 6 * n) {
        return []
    }

    const result = Array(n).fill(1)
    let remainingSum = missingSum - n

    for (let i = 0; i < n && remainingSum > 0; i++) {
        const add = Math.min(remainingSum, 5)
        result[i] += add
        remainingSum -= add
    }

    return result
}