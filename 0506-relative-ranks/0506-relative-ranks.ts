type Athlete = {
  index: number,
  score: number,
};

function getPlacement(i: number): string {
  switch (i) {
    case 0: return 'Gold Medal';
    case 1: return 'Silver Medal';
    case 2: return 'Bronze Medal';
    default: return (i + 1).toString();
  }
}

function findRelativeRanks(score: number[]): string[] {
  const athletes: Athlete[] = score
    .map((s, i) => ({ index: i, score: s }))
    .sort((a, b) => b.score - a.score);

  return athletes.reduce((acc, athlete, i) => {
    acc[athlete.index] = getPlacement(i);
    return acc;
  }, new Array(score.length));
}