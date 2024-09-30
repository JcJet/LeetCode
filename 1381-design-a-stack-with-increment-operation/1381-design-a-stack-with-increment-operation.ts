class CustomStack {
    private stack: number[];
    private inc: number[];
    private maxSize: number;

    constructor(maxSize: number) {
        this.stack = [];
        this.maxSize = maxSize;
        this.inc = [];
    }

    push(x: number): void {
        if (this.stack.length === this.maxSize) {
            return;
        }
        this.stack.push(x);
        this.inc.push(0);
    }

    pop(): number {
        if (this.stack.length === 0) {
            return -1;
        }
        if (this.inc.length > 1) {
            this.inc[this.inc.length - 2] += this.inc[this.inc.length - 1];
        }
        return this.stack.pop()! + this.inc.pop()!;
    }

    increment(k: number, val: number): void {
        k = Math.min(k, this.stack.length);
        if (k === 0) {
            return;
        }
        this.inc[k - 1] += val;
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */