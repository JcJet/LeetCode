public class Solution {
    public IList<int> GetRow(int rowIndex) {
        if (rowIndex == 0) {
            return new int[] { 1 };
        }

        List<List<int>> triangle = new List<List<int>>();
        triangle.Add(new List<int> { 1 });

        for (int i = 0; i < rowIndex; i++) {
            List<int> lastRow = triangle[triangle.Count - 1];
            List<int> newRow = new List<int>();
            newRow.Add(1);

            for (int j = 1; j < lastRow.Count; j++) {
                newRow.Add(lastRow[j - 1] + lastRow[j]);
            }

            newRow.Add(1);
            triangle.Add(newRow);
        }

        return triangle[triangle.Count - 1].ToArray();
    }
    }