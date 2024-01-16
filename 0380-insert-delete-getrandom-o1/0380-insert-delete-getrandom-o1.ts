class RandomizedSet {
    valPos: Map<number, number> // value, index
    vals: number[]

    constructor() {
        this.valPos = new Map()
        this.vals = []
    }

    insert(val: number): boolean {
        if (this.valPos.has(val)) return false
        this.valPos.set(val, this.vals.length)
        this.vals.push(val)
        return true
    }

    remove(val: number): boolean {
        if (!this.valPos.has(val)) return false
        const pos = this.valPos.get(val)
        if (pos !== this.vals.length - 1) {
            const lastVal = this.vals[this.vals.length - 1];
            // swap position with the last element
            [this.vals[pos], this.vals[this.vals.length - 1]] = [this.vals[this.vals.length - 1], this.vals[pos]]
            this.valPos.set(lastVal, pos) // update position record
        }
        this.valPos.delete(val)
        this.vals.pop()
        return true
    }

    getRandom(): number {
        return this.vals[Math.floor(Math.random() * this.vals.length)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

 