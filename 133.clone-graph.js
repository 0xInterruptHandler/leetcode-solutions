
// @leet start
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
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }

    const visited = new Map();

    function dfs(current) {
        if (visited.has(current.val)) {
            return visited.get(current.val);
        }

        const clone = new _Node(current.val);
        visited.set(current.val, clone);

        for (const neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
};
// @leet end

