/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let currentNode = head.next;
    let previousNode = head.val;

    const result: number[] = [];

    let index = 2;

    let min = Infinity;

    while (currentNode.next !== null) {
        if (
            currentNode.next
            && currentNode.val > previousNode
            && currentNode.val > currentNode.next.val
        ) {
            min = result.length ? Math.min(index - result.at(-1), min) : min;
            result.push(index);
        } else if (
            currentNode.next
            && currentNode.val < previousNode
            && currentNode.val < currentNode.next.val
        ) {
            min = result.length ? Math.min(index - result.at(-1), min) : min;
            result.push(index);
        }
        previousNode = currentNode.val;
        currentNode = currentNode.next;
        index++;
    }

    if (result.length < 2) {
        return [-1, -1];
    };

    const max = result.at(-1) - result[0];

    return [min, max];
};