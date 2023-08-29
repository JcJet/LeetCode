function bestClosingTime(customers: string): number {

    let ans :number = 0;
    let profit: number = 0;
    let maxProfit: number = 0;

    for (let i = 0; i < customers.length; i++) {
      profit += customers[i] === 'Y' ? 1 : -1;
      if (profit > maxProfit) {
        maxProfit = profit;
        ans = i + 1;
      }
    }

 return ans;
};