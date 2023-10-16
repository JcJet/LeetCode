class Solution {

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex) {
        if ($rowIndex === 0) {
            return [1];
        }

        $triangle = [[1]];

        for ($i = 0; $i < $rowIndex; $i++) {
            $lastRow = $triangle[count($triangle) - 1];
            $newRow = [1];

            for ($j = 1; $j < count($lastRow); $j++) {
                array_push($newRow, $lastRow[$j - 1] + $lastRow[$j]);
            }

            array_push($newRow, 1);
            array_push($triangle, $newRow);
        }

        return $triangle[count($triangle) - 1];
    }
    }