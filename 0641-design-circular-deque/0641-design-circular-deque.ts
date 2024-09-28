class NodeOfDeque {
    value: number;
    prev: NodeOfDeque | undefined;
    next: NodeOfDeque | undefined;
    constructor(value: number, prev?: NodeOfDeque | undefined, next?: NodeOfDeque | undefined) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class MyCircularDeque {
    private
        size: number = 0;
        maxSize: number;
        front: NodeOfDeque | undefined;
        rear: NodeOfDeque | undefined;
    public
        constructor(k: number) {
            this.maxSize = k;
        }

        insertFront(value: number): boolean {
            if (this.isFull())
                return false;
            if (!this.front) 
                this.front = this.rear = new NodeOfDeque(value);
            else 
                this.front = this.front.next = new NodeOfDeque(value, this.front);
            this.size += 1;
            return true;
        }

        insertLast(value: number): boolean {
            if (this.isFull())
                return false;
            if (!this.front) 
                this.front = this.rear = new NodeOfDeque(value);
            else 
                this.rear = this.rear.prev = new NodeOfDeque(value, undefined, this.rear);
            this.size += 1;
            return true;
        }

        deleteFront(): boolean {
            if (this.isEmpty())
                return false;
            if (this.front === this.rear) 
                this.front = this.rear = undefined;
            else 
                (this.front = this.front.prev).next = undefined;
            this.size -= 1;
            return true;
        }

        deleteLast(): boolean {
            if (this.isEmpty())
                return false;
            if (this.front === this.rear) 
                this.front = this.rear = undefined;
            else 
                (this.rear = this.rear.next).prev = undefined;
            this.size -= 1;
            return true;
        }

        getFront(): number {
            return this.front ? this.front.value : -1;
        }

        getRear(): number {
            return this.rear ? this.rear.value : -1;
        }

        isEmpty(): boolean {
            return this.size === 0;
        }

        isFull(): boolean {
            return this.size === this.maxSize;
        }
}