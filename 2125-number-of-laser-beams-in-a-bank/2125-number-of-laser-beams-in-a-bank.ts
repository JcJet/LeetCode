function countBank(bank: string): number {
  let count = 0;
  for (let i = 0; i < bank.length; i += 1) {
    if (bank[i] === "1") {
      count++;
    }
  }
  return count;
}

function toNumbers(bank: string[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < bank.length; i += 1) {
    const count = countBank(bank[i]);
    if (count) result.push(count);
  }
  return result;
}

function numberOfBeams(bank: string[]): number {
  if (bank.length <= 1) return 0;

  const numbers = toNumbers(bank);
  let count = 0;
  for (let i = 0; i < numbers.length - 1; i += 1) {
    count += numbers[i] * numbers[i + 1];
  }

  return count;
}