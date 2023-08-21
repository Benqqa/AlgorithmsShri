// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_глубину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function dfs(tree)
{
    let result = [];
    result.push(tree.val)
    recFun(result, tree.left)
    recFun(result, tree.right)
    console.log(result);

    return result
}

function recFun(result, node)
{
    if (node !== null)
    {
        result.push(node.val)
        recFun(result, node.left)
        recFun(result, node.right)
    }
}
