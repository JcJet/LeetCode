type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {

    // base case. If we are on depth 0, we don't flatten the element
    if (n === 0) {
        return arr;
    }
    
    // temp array to hold the flattened results for this level of the recursion
    const result: MultiDimensionalArray = [];

    // loop the elements of this array. If they are numbers, don't need to flatten,
    // just push into the result. If they are arrays, we need to flatten,
    // so recursively call the flat function, then spread the returned value and push into result.
    arr.forEach(el => {
        if (typeof el === 'number') {
            result.push(el);
        } else {
            result.push(...flat(el, n - 1));
        }
    })

    return result;
};