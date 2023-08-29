class Solution {
    public int bestClosingTime(String customers) {
        int close_hour = 0;
        int min_penalty = 0;
        int curr_penalty = 0;
        for (int i=0;i<customers.length();i++){
            char item = customers.charAt(i);
            if (item == 'Y'){
                curr_penalty-=1;
                if (curr_penalty < min_penalty){
                    min_penalty = curr_penalty;
                    close_hour = i+1;
                }
            }
            else{
                curr_penalty+=1;
            }
        }
        return close_hour;
    }
}