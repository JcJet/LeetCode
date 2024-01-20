function sumSubarrayMins(arr: number[]): number {
    let mod = 1e9+7;
    let lm = leftMin(arr);
    let rm = rightMin(arr);

    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        let p1 = lm[i];
        let p2 = rm[i];
        ans = (ans + ((i-p1) * (p2-i) * arr[i])) % mod;
    }
    return ans % mod;

    function leftMin(A: number[]){
        let st = [];
        let ans = Array(A.length).fill(-1);
        for(let i = 0; i < A.length; i++){
            while(!isEmpty(st) && A[peek(st)] >= A[i]) st.pop();
            if(!isEmpty(st)) ans[i] = peek(st);
            st.push(i);
        }
        return ans;
    }
    function rightMin(A: number[]){
        let st = [];
        let ans = Array(A.length).fill(A.length);
        for(let i = A.length-1; i >= 0; i--){
            while(!isEmpty(st) && A[peek(st)] > A[i]) st.pop();
            if(!isEmpty(st)) ans[i] = peek(st);
            st.push(i);
        }
        return ans;
    }
    function peek(st: number[]){
        return st[st.length-1];
    }
    function isEmpty(st: number[]){
        return st.length === 0;
    }
};