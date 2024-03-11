function customSortString(order: string, s: string): string {
    let outPut: string = '';
    for (let i=0; i<order.length;i++) {
        while (s.includes(order[i])) {
            outPut += order[i];
            s = s.replace(order[i],'');
        }
    }
    return outPut + s;
};