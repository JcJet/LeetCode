function findItinerary(tickets: string[][]): string[] {
    const startDepart = "JFK";
    const adjacencyList: {[key: string]: string[]} = {};

    // 1. Fill adjacency map
    for (const [from, to] of tickets) {
        adjacencyList[from] = adjacencyList[from] || [];
        adjacencyList[from].push(to);
    }

    // 2. Sort destinations alphabetically
    for (const [from] of tickets) {
        adjacencyList[from].sort();
    }

    // 3. DFS + backtracking
    const result: string[] = [];
    const dfs = (ticket: string): void => {
        const destinations: string[] = adjacencyList[ticket] || [];
        while (destinations.length > 0)  dfs(destinations.shift())
        result.push(ticket);
    }

    dfs(startDepart);
    return result.reverse();
};