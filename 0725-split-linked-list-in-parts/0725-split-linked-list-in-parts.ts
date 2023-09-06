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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let count = 0
    let curr = head

    while (curr) {
        ++count
        curr = curr.next
    }

    let overflow = count % k
    let sublistSize = Math.floor(count / k)

    curr = head
    const output: ListNode[] = []

    for (let i=0; i < k; i++) {
        const sublist: ListNode = curr
        let length = sublistSize
        if (overflow > 0) length += 1

        for (let j=1; j < length; j++) {
            if (curr) curr = curr.next
        }

        if (curr) {
            let temp: ListNode = curr
            curr = curr.next
            temp.next = null
        }

        overflow -= 1
        output.push(sublist)
    }

    return output
};