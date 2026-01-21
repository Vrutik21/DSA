// 86. Partition List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// TC - O(L)
// SC - O(1)
var partition = function (head, x) {
  let sentinal1 = new ListNode();
  let curr1 = sentinal1;
  let sentinal2 = new ListNode();
  let curr2 = sentinal2;

  while (head) {
    if (head.val < x) {
      curr1.next = head;
      curr1 = curr1.next;
    } else {
      curr2.next = head;
      curr2 = curr2.next;
    }

    head = head.next;
  }

  curr2.next = null;

  curr1.next = sentinal2.next;

  return sentinal1.next;
};
