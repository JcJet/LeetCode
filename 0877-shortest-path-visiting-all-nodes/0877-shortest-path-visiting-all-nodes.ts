type QueueNode = [number, [number, number]]  //[node, [distanceToNode, maskSoFar]]
function shortestPathLength(graph: number[][]): number {

    const visited = new Set()
    const destination = (1<<graph.length)-1
    const queue : QueueNode[] = []
    for(let node=0; node<graph.length; node++){
        const mask = 1<<node 
        queue.push([node, [0, mask]])
        visited.add(`${node}-${mask}`)
    }

    while(queue.length>0){
        const [currentNode, [currentDistance, currentMask]] = queue.shift()

        if(currentMask===destination) return currentDistance

        for(const nextNode of graph[currentNode]){
            const newMask = currentMask | 1<<nextNode
            if(visited.has(`${nextNode}-${newMask}`)) continue;
            visited.add(`${nextNode}-${newMask}`)
            queue.push([nextNode, [currentDistance+1, newMask]])
        }
    }

    return Number.MAX_SAFE_INTEGER
};