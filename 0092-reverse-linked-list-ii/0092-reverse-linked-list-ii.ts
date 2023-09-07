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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if(head === null) return null;

  let pointer = head;
  let counter = 1;
  let startCheckpoint = null;
  let endCheckpoint = null;

  while (pointer !== null) {
    endCheckpoint = pointer;
    if (counter === left) {
      for(let i = counter; i <= right; i++) {
        endCheckpoint = endCheckpoint.next;
      }

      let prev = endCheckpoint;
      let curr = pointer;
      let next = null;

      for(let i = counter; i <= right; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      if(startCheckpoint !== null) {
        startCheckpoint.next = prev;
      } else {
        head = prev;
      }

      break;
    }
    counter++;
    startCheckpoint = pointer;
    pointer = pointer.next;
  }

  return head;
};