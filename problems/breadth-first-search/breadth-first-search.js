// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function bfs(tree)
{
    const result = [];
    let q = [tree];
    while (q.length) {
        let node = q.shift()
        if (node !== null) {
            result.push(node.val);
            q.push(node.left);
            q.push(node.right)
        }
    }

    return result;
}
