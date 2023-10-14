class Solution {

    /**
     * @param Integer[] $cost
     * @param Integer[] $time
     * @return Integer
     */
    function paintWalls($cost, $time) {
        $n = count($cost);
        $dp = array_fill(0, $n + 1, INF);
        $dp[0] = 0;

        for ($i = 0; $i < $n; $i++) {
            for ($j = $n; $j >= 1; $j--) {
                $dp[$j] = min($dp[$j], $dp[max($j - $time[$i] - 1, 0)] + $cost[$i]);
            }
        }
        return $dp[$n];
    }
}