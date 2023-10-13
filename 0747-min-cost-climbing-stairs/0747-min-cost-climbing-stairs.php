class Solution {

    /**
     * @param Integer[] $cost
     * @return Integer
     */
    function minCostClimbingStairs($cost) {
        $cost[] = 0;
        for ($i = count($cost) - 3; $i >= 0; $i--) {
            $cost[$i] += min($cost[$i + 1], $cost[$i + 2]);
        }
        return min($cost[0], $cost[1]);
    }
    }