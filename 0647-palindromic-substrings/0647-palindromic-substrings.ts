function countSubstrings(s: string): number {
  let answer = 0;
  const len = s.length;
  // 1. Create a table
  const table = Array.from({length: len}, () => new Array(len).fill(0));

  // 1. Initialize a table
  for(let i = 0; i < table.length; i++) {
    for(let j = 0; j < table.length; j++) {
      if(s[i] === s[j]) table[i][j] = 1; 
    }
  }

  // 2. Set a table + 3. add up all valid combinations
  for(let i = len; i >= 0; i--) {
    for(let j = i; j < len; j++) {
      if(s[i] === s[j] && i !== j) {
        table[i][j] = table[i+1][j-1];
      }
      answer += table[i][j];
    }
  }
  return answer;
};