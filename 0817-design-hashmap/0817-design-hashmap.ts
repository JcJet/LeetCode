class MyHashMap {
    private data: Map<number, number>;

    constructor() {
        this.data = new Map<number, number>();
    }

    put(key: number, value: number): void {
        this.data.set(key, value);
    }

    get(key: number): number {
        const value = this.data.get(key);
        return value !== undefined ? value : -1;
    }

    remove(key: number): void {
        this.data.delete(key);
    }
}