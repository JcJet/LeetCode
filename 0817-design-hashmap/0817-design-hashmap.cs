using System.Collections.Generic;

public class MyHashMap {
    private Dictionary<int, int> data;

    public MyHashMap() {
        data = new Dictionary<int, int>();
    }

    public void Put(int key, int value) {
        data[key] = value;
    }

    public int Get(int key) {
        return data.ContainsKey(key) ? data[key] : -1;
    }

    public void Remove(int key) {
        data.Remove(key);
    }
}