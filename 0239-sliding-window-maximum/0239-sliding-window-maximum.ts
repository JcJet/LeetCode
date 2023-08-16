function maxSlidingWindow(nums: number[], k: number): number[] {
    const win = new Q();
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // push each number into the queue
        win.push(nums[i]);

        if (i < k - 1) {
            // fill up the window
            continue;
        }

        // after the window is filled up with `k`-sized numbers
        // we retrieve the max val from the queue
        result.push(win.max());
        // and then pop the head element
        win.pop(nums[i - k + 1]);
    }

    return result;
};

class Q {
    #maxq: number[] = [];

    push(n: number) {
        // remove the smaller numbers from the window
        while (this.#maxq.length
                && this.#maxq[this.#maxq.length - 1] < n) {
            this.#maxq.pop();
        }

        this.#maxq.push(n);
    }

    pop(n: number) {
        // before a number is pushed
        // the smaller numbers will be removed from the window
        if (this.max() === n) {
            this.#maxq.shift();
        }
    }

    max() {
        return this.#maxq[0];
    }
}