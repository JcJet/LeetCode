public class Solution {
    public IList<int> MajorityElement(int[] nums) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        foreach (int i in nums) {
            if (dict.ContainsKey(i)) {
                dict[i]++;
            } else {
                dict[i] = 1;
            }
        }

        List<int> res = new List<int>();
        int compare = nums.Length / 3;
        foreach (var pair in dict) {
            if (pair.Value > compare) {
                res.Add(pair.Key);
            }
        }

        return res;
    }
    }