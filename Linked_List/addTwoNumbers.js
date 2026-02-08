// 445. Add Two Numbers II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// TC - O(m + n)
// SC - O(m + n) (stacks + output list)
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = null;
  let stack1 = [];
  let stack2 = [];

  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }

    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }

  while (stack1.length !== 0 || stack2.length !== 0 || carry) {
    let sum = 0;

    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    sum += carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let curr = new ListNode(digit);
    curr.next = result;
    result = curr;
  }

  return result;
};
