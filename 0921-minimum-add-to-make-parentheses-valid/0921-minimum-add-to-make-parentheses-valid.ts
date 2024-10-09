function minAddToMakeValid(s: string): number {
    // Initialize the counter for minimum additions needed
    let ans: number = 0;
    
    // Initialize the balance of parentheses (open - close)
    let bal: number = 0;
    
    // Iterate through each character in the string
    for (let ch of s) {
        if (ch === '(') {
            // If it's an opening parenthesis, increment the balance
            bal++;
        } else {
            // If it's a closing parenthesis, decrement the balance
            bal--;
        }
        
        // If balance becomes negative (more closing than opening parentheses)
        if (bal < 0) {
            // Add the absolute value of balance to answer
            // This represents the number of opening parentheses we need to add
            ans += -bal;
            // Reset balance to 0 since we've accounted for the imbalance
            bal = 0;
        }
    }
    
    // After processing all characters, add any remaining open parentheses
    // This represents the number of closing parentheses we need to add
    ans += bal;
    
    // Return the minimum number of additions needed to make the string valid
    return ans;
}