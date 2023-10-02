function winnerOfGame(colors: string): boolean {
    let countA = 0
    let sumA = 0
    let countB = 0
    let sumB = 0

    colors.split('').forEach(i => {
        if (i === 'A') {
            countA++
            countB = 0
            if (countA >= 3) {
                sumA++
            }
        } else {
            countB++
            countA = 0
            if (countB >= 3) {
                sumB++
            }
        }
    })

    return sumA > sumB
}