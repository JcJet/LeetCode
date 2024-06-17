var judgeSquareSum = function(c) {
    let st = Math.floor(Math.sqrt(c))
    for(let i=st; i>-1;i--){
        if(Math.sqrt(c-(i**2))%1==0){
            return true
        }
    }
    return false
};