const set = new Set<string>()
const overlap = (set:Set<string>, s:string):boolean=>{
    const checkForDuplicate = new Set()

    for(let ch of s){
        if(set.has(ch) || checkForDuplicate.has(ch)){
            return true
        }
        checkForDuplicate.add(ch)
    }

    return false
    
}

const backtrack = (arr:string[], idx:number):number=>{
    if(idx==arr.length){
        return set.size
    }

    let take = 0
    if(!overlap(set, arr[idx])){
        for(let ch of arr[idx]){
            set.add(ch)
        }
        take = backtrack(arr,idx+1)
        for(let ch of arr[idx]){
            set.delete(ch)
        }
    }

    let notTake = backtrack(arr, idx+1)
    
    return Math.max(take, notTake)
}

function maxLength(arr: string[]): number {
    return backtrack(arr, 0)
};