function convertToTitle(columnNumber: number): string {
    let builtChars: string = ""
    do {
        const remainder = --columnNumber % 26
        columnNumber = Math.floor(columnNumber / 26) // quotient
        builtChars = String.fromCharCode(remainder + 65) + builtChars
    } while (columnNumber !== 0)

    return builtChars
};