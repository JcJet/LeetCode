public class LRUCache {
    
    int [][]mem;
	int capacity;
	int max = 0, count = 0;
	public LRUCache(int capacity) {
        mem = new int[capacity][3];
        this.capacity = capacity;
        for (int i = 0; i < capacity; i++) {
        	mem[i][0] = 0;
        	mem[i][1] = 0;
        	mem[i][2] = 0;
        }
    }
    
    public int get(int key) {
    	int i = 0;
    	for ( i = 0; i < capacity; i++) {
    		if (mem[i][2] == key) {
    			return mem[i][0];
    		}
    	}
    	return -1;
    }
    
    public void set(int key, int value) {
        max++; 
        int i = 0;
        if (count < capacity) {
        	for (i = 0; i < capacity; i++) {
        		if (mem[i][1] == 0) {
        			mem[i][0] = value;
        			mem[i][1] = max;
        			mem[i][2] = key;
        		}
        	}
        } else {
        	int  min = max, index = 0;
    		for (i = 0; i < capacity; i++) {
    			if (mem[i][1] < min) {
    				min = mem[i][1];
    				index = i;
    			}
    		}
    		mem[index][0] = value;
        	mem[index][1] = max;
        	mem[index][2] = key;
        }
        count++;
    }
}