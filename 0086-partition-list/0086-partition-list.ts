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

function partition(head: ListNode | null, x: number): ListNode | null {
    let tailFirstNode: ListNode | null = null;
    let tailLastNode: ListNode | null = null;

    let headFirstNode: ListNode | null = null;
    let headLastNode: ListNode | null = null;

    while (head !== null) {
      const node = new ListNode(head.val, null);
      if (head.val < x) {
        if (!tailFirstNode) {
          tailFirstNode = node;
        }
        if (tailLastNode) {
          tailLastNode.next = node;
        }
        tailLastNode = node;
      } else {
        if (!headFirstNode) {
          headFirstNode = node;
        }
        if (headLastNode) {
          headLastNode.next = node;
        }
        headLastNode = node;
      }
      head = head.next;
    }
    if (tailLastNode) {
      tailLastNode.next = headFirstNode;
    }

    return tailFirstNode || headFirstNode;
};