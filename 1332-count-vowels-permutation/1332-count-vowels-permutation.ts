function countVowelPermutation(n: number): number {
const MOD = 1e9 + 7;
        let a_count = 1, e_count = 1, i_count = 1, o_count = 1, u_count = 1;
        
        for (let i = 1; i < n; ++i) {
            const new_a = (e_count + i_count + u_count) % MOD;
            const new_e = (a_count + i_count) % MOD;
            const new_i = (e_count + o_count) % MOD;
            const new_o = i_count;
            const new_u = (i_count + o_count) % MOD;
            
            a_count = new_a;
            e_count = new_e;
            i_count = new_i;
            o_count = new_o;
            u_count = new_u;
        }
        
        const total = (a_count + e_count + i_count + o_count + u_count) % MOD;
        
        return total;
};