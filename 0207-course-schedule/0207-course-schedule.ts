function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from(Array(numCourses), () => []);
  const ranks: number[] = Array(numCourses).fill(0);

  prerequisites.forEach(([u, v]) => {
    graph[v].push(u);
    ranks[u]++;
  });

  const queue: number[] = [];

  ranks.forEach((r, i) => {
    if (!r) queue.push(i);
  });

  while (queue.length) {
    const f = queue.shift();
    numCourses--;

    graph[f as number].forEach((neigh) => {
      ranks[neigh]--;
      if (!ranks[neigh]) queue.push(neigh);
    });
  }

  return !numCourses;
}