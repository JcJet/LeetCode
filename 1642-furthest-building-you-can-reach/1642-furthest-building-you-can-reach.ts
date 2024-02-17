function furthestBuilding(heights: number[], bricks: number, ladders: number): number {    
    /**
     * @see https://github.com/datastructures-js/priority-queue/tree/v4.1.0
     */
    const queue = new MaxPriorityQueue();
    
    let i = 1;
    
    for (; i < heights.length; i++) {
        const neededBricks = heights[i] - heights[i - 1];
                
        if (neededBricks <= 0) continue;
                
        // Always use bricks, when we can..
        if (neededBricks <= bricks) {
            bricks -= neededBricks;
            queue.enqueue(neededBricks);
        } else if (ladders) {
            // If we don't have enough bricks to move further, we use ladder for the
            // biggest jump we've made earlier (get those bricks back & try again)
            if (queue.size() && queue.front().element >= neededBricks) {                
                bricks += queue.dequeue().element;
                i--;
            }
            
            ladders--;
        } else {
            break;   
        }
    }
    
    return i - 1;
};