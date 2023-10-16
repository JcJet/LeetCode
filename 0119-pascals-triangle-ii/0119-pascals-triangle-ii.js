/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    let triangle = [[1]];

    for (let i = 0; i < rowIndex; i++) {
        let lastRow = triangle[triangle.length - 1];
        let newRow = [1];

        for (let j = 1; j < lastRow.length; j++) {
            newRow.push(lastRow[j - 1] + lastRow[j]);
        }

        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle[triangle.length - 1];
};