class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Approach 1 - using array to store reversed LL and then check it using pointers
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let n = arr.length;

  for (let i = 0; i <= Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - i - 1]) return false;
  }

  return true;
};

// Approach 2 - using the slow and fast pointer approach
// 1 - Find the middle node
// 2 - Reverse the second half of the Linked List form the middle node
// 3 - compare both parts
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;

  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let firstHalf = head;
  let secondHalf = prev;

  // Because only second Half will have a null at the end
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};

const list = {
  head: {
    val: 6,
    next: {
      val: 10,
      next: {
        val: 12,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};

console.log(isPalindrome(list.head));
