function countOrders(n: number): number {
    const MODULO = 1e9 + 7;
    let result = n;
    for ( let i = 1; i < n; i++ ) result = result * i * ( 2 * i + 1 ) % MODULO;
    return result;
};