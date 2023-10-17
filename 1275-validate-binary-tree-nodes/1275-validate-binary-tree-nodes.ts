function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
    //parents[]. where parents[i] = -1 => there is no parent => i = root
    const parents = new Array(n).fill(-1);

    for(let i = 0; i < n; i++){
        const l = leftChild[i];
        const r = rightChild[i];

        if(l !== -1 && !checkChild(l, i, parents)){
            return false;
        }

        if(r !== -1 && !checkChild(r, i, parents)){
            return false;
        }
    }

    const visited = new Array(n).fill(false)
    let isOneRoot = false;

    for(let i = 0; i < n; i++){
        let p = parents[i];

        if(visited[p]) continue;
        else if(p === -1) isOneRoot = !isOneRoot;

        visited[i] = true;
        //loop until we reach the root or visited parent node
        while(true){
            if(visited[p] || p === -1){
                break;
            }
            else{
                visited[p] = true;
                p = parents[p];
            }
        }

        //(0 ---> 1----> 2 ----> 0)
        if(p === i) return false;
    }
    
    return isOneRoot;
};

//check child has more one parent && the parent of parent is the child or not (0 <--> 1)
function checkChild(child: number, parent: number, parents: number[]): boolean{
    //the child had a parent
    if(parents[child] !== -1){
        return false;
    }

    //(0 <---> 1)
    else if(child === parents[parent]){
        return false;
    }
    
    parents[child] = parent;
    return true;
}