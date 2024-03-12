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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    if(!head) return null;
    let sum = 0
    let next = head
    while(next) {
        sum += next.val
        if(sum === 0) {
            return removeZeroSumSublists(next.next)
        }
        next = next.next
    }
    head.next = removeZeroSumSublists(head.next)
    return head
};