/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(node: Node | null, cache = new Map()): Node | null {
    if (cache.has(node)) return cache.get(node)
    if (node) {
        const newNode = new Node(node?.val)
        cache.set(node, newNode)

        newNode.next = copyRandomList(node?.next, cache)
        newNode.random = copyRandomList(node?.random, cache)
        
        return newNode;
    }
    return null;
};