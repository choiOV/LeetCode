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
    const mergedList = { val: null, next: null };
    let current = mergedList;

    const merge = (list1, list2) => {
        if (!list1) {
            current.next = list2;
            return;
        }

        if (!list2) {
            current.next = list1;
            return;
        }

        if (list1.val >= list2.val) {
            current.next = {
                val: list2.val,
                next: null,
            };
            current = current.next;
            merge(list1, list2.next);
        } else {
            current.next = {
                val: list1.val,
                next: null,
            };
            current = current.next;
            merge(list1.next, list2);
        }
    };

    merge(list1, list2);

    return mergedList.next;
};