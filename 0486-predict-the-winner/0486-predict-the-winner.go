func PredictTheWinner(nums []int) bool {
    memo:= make([][]int, len(nums))
    for i:=0; i<len(nums); i++{
        memo[i] = make([]int, len(nums))
    }
    for i:=0; i<len(nums); i++{
        for j:=0; j<len(nums); j++{
            memo[i][j] = -1
        }
    }
    score:= getMax(&nums,&memo, 0, len(nums)-1)
    total:=0
    for _,num:= range nums{
        total+=num
    }
    if score>=total-score{
        return true
    }
    return false
}


func getMax(nums*[]int, memo*[][]int, l int, r int) int{
    if l>r{
        return 0
    }
    if (*memo)[l][r]!=-1{
        return (*memo)[l][r]
    } 
    takeFirst:= (*nums)[l] + min(getMax(nums, memo, l+1, r-1),  getMax(nums, memo, l+2, r))
    
    takeLast:= (*nums)[r] + min(getMax(nums, memo, l, r-2), getMax(nums, memo, l+1, r-1))
    
    ans:= max(takeFirst, takeLast)
    (*memo)[l][r] = ans
    return ans
}

func max(a int, b int)int {
    if a>b{
        return a
    }
    return b
}

func min(a int, b int)int {
    if a<b{
        return a
    }
    return b
}