function pivotInteger(n: number): number {
    let total=(n*(n+1))/2
    
    for(let i=1;i<=n;i++)   if(total==i**2)  return i

    return -1
};