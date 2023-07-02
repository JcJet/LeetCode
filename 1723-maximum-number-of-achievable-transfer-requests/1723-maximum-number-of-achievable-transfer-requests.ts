function maximumRequests(n: number, requests: number[][]): number {
      const indegree = new Array(n).fill(0);
    return helper(0, requests, indegree, n, 0);
};

function helper(start, req, indegree, n, count) {
    if (start === req.length) {
       for (let i = 0; i < n; i++) {
         if (indegree[i] !== 0) {
           return 0;
         }
       }
    return count;
    }

    indegree[req[start][0]]--;
    indegree[req[start][1]]++;
    const take = helper(start + 1, req, indegree, n, count + 1);
  
    indegree[req[start][0]]++;
    indegree[req[start][1]]--;
    const notTake = helper(start + 1, req, indegree, n, count);
  
    return Math.max(take, notTake);
}