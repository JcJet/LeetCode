function removeDuplicateLetters(s: string): string {
        const n = s.length;
        const cnt = new Array(26).fill(0);
        const vis = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0)

        for(let i=0;i<n;i++) cnt[s.charCodeAt(i)-a]++;

        let res:string = "";

        for(let i =0;i<n;i++){
            cnt[s.charCodeAt(i)-a]--;

            if(!vis[s.charCodeAt(i)-a]){
                while(res.length>0 && res[res.length-1] > s[i] && cnt[res[res.length-1].charCodeAt(0)-a]>0){
                    vis[res[res.length-1].charCodeAt(0)-a]=0;
                    res = res.substring(0,res.length-1);
                }

                vis[s.charCodeAt(i)-a]=1;
                res+=s[i];
            }
        }
        return res
};