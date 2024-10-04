function dividePlayers(skill: number[]): number {
    skill.sort((a, b) => a - b);
    const n = skill.length;
    const targetSum = skill[0] + skill[n - 1];
    let i = 0, j = n - 1;
    let ans = 0;
    
    while (i < j) {
        const tempSum = skill[i] + skill[j];
        if (tempSum === targetSum) {
            ans += skill[i] * skill[j];
        } else {
            return -1;
        }
        i++;
        j--;
    }
    
    return ans;
}