/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;

  const queue = [node];
  const map = new Map();

  map.set(node, new _Node(node.val, []));

  console.log(map);

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of current.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new _Node(neighbor.val, []));
        queue.push(neighbor);
      }

      map.get(current).neighbors.push(map.get(neighbor));
    }
  }

  return map.get(node);
};