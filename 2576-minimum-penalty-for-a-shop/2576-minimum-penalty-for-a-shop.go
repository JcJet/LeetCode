func bestClosingTime(customers string) int {
    close_hour := 0
    min_penalty := 0
    curr_penalty := 0
    for i,item := range(customers){
        if string(item) == "Y"{
            curr_penalty-=1
            if curr_penalty < min_penalty{
                min_penalty = curr_penalty
                close_hour = i+1
            }
        }else{
            curr_penalty+=1
        }
    }
    return close_hour
}