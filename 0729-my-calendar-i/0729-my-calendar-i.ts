class MyCalendar {
  private tree: Node | null;
  constructor() {
    this.tree = null;
  }

  book(start: number, end: number): boolean {
    if (!this.tree) {
      this.tree = new Node(start, end);
      return true;
    }
    return this.tree.add(start, end);
  }
}

class Node {
  private _start: number;
  private _end: number;
  private _left: Node | null;
  private _right: Node | null;

  constructor(start: number, end: number) {
    this._start = start;
    this._end = end;
    this._left = null;
    this._right = null;
  }

  public add(start: number, end: number): boolean {
    if (start >= this._end) {
      if (!this._right) {
        this._right = new Node(start, end);
        return true;
      }
      return this._right.add(start, end);
    } else if (end <= this._start) {
      if (!this._left) {
        this._left = new Node(start, end);
        return true;
      }
      return this._left.add(start, end);
    }
    return false;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */