function groupThePeople(groupSizes: number[]): number[][] {
    const result: number[][] = [];
    const groupSizesTable: Record<number, number[]> = {};

    for (let i = 0; i < groupSizes.length; i++) {
        const group: number = groupSizes[i]; 
        if(groupSizesTable[group] === undefined) groupSizesTable[group] = [];

        groupSizesTable[group].push(i);

        if(groupSizesTable[group].length === group) {
            result.push(groupSizesTable[group]);
            delete groupSizesTable[group];
        }
    }

    return result;
};