/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let close_hour = 0
    let min_penalty = 0
    let curr_penalty = 0
    for (let i=0;i<customers.length;i++){
        let item = customers[i]
        if (item == "Y"){
            curr_penalty-=1
            if (curr_penalty < min_penalty){
                min_penalty = curr_penalty
                close_hour = i+1
            }
        }
        else{
            curr_penalty+=1
        }
    }
    return close_hour
};