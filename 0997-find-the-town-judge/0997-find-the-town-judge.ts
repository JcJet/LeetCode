function findJudge(n: number, trust: number[][]): number {
  if(trust.length === 0 && n > 1) return -1;
  if(trust.length === 0) return 1;
  const trustMap = {};
  
  for(const [truster, trustee] of trust){
    if(!(truster in trustMap))
      trustMap[truster] = [0, 0];
    trustMap[truster][1] += 1;
    if(!(trustee in trustMap))
      trustMap[trustee] = [0, 0];
    trustMap[trustee][0] += 1;
  }
  
  for(const [person, tuple] of Object.entries(trustMap))
    if(tuple[0] === n - 1 && tuple[1] === 0)
      return Number(person);
  
  return -1;
};