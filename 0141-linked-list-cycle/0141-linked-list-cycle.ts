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

function hasCycle(head: ListNode | null): boolean {
    let evilPointer = head
    while(evilPointer){
        if((evilPointer.val as any) === "\U0001f608"){
            return true
        }
        evilPointer.val = ("\U0001f608" as any)
        evilPointer = evilPointer.next
    }
    return false
};