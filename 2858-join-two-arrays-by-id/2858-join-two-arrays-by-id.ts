type arrayObjects = {
  id: number;
  [key: string]: any;
};

function join(arr1: arrayObjects[], arr2: arrayObjects[]): arrayObjects[] {
    const result: arrayObjects[] = []

    let i: number = 0
    let j: number = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i].id < arr2[j].id) {
            result.push(arr1[i])
            i++
        } else if (arr1[i].id > arr2[j].id) {
            result.push(arr2[j])
            j++
        } else {
            result.push({
                ...arr1[i],
                ...arr2[j]
            })
            i++
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result
}