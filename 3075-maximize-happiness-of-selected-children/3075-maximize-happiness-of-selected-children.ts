function maximumHappinessSum(happiness: number[], k: number): number {
    // Sort in descending order
    happiness.sort((a: number, b: number) => b - a);

    let res: number = 0;
    for (let index: number = 0; index < k; ++index) {
        const childHappiness: number = happiness[index];
        const addedChildren: number = index;
        if (childHappiness <= addedChildren) {
            break;
        }
        res += (childHappiness - addedChildren);
    }

    return res;
}