/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const resultList = new ListNode(-1);
    let pointer = resultList;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = list1
            list1 = list1.next
        } else {
            pointer.next = list2
            list2 = list2.next
        }

        pointer = pointer.next
    }

    if (!list1) {
        pointer.next = list2
    }

    if (!list2) {
        pointer.next = list1
    }

    return resultList.next;
};