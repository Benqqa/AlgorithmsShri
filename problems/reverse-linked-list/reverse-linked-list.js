// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
    let leftNode ={}
    let rightNode = {}
    let currentNode = head.next
    head.next = null
    leftNode = head;
    while (currentNode !== null) {
        // if (currentNode !== null) {
            rightNode = currentNode.next;
            currentNode.next = leftNode
            leftNode = currentNode
            currentNode = rightNode;
        // }
    }

    return leftNode
}
