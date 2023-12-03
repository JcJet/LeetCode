const minTimeToVisitAllPoints = (points: number[][]): number => {
    let minTime = 0;
    
    for (let i = 1; i < points.length; i++) {
        const xDistance = Math.abs(points[i][0] - points[i-1][0]);
        const yDistance = Math.abs(points[i][1] - points[i-1][1]);
        
        minTime += Math.max(xDistance, yDistance);
    }
    
    return minTime;
};