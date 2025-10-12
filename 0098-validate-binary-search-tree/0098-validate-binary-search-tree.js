/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const stack = [];
  let current = root;
  let prev = null;

  while (stack.length !== 0 || current) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    const node = stack.pop();

    if (prev !== null && node.val <= prev) return false;
    prev = node.val;
    current = node.right;
  }

  return true;
};
