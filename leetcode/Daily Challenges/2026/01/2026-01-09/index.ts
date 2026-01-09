/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    // DFS returns [maxDepth, answerNode] for the subtree rooted at node
    const dfs = (node: TreeNode | null): [number, TreeNode | null] => {
        if (!node) return [0, null];
        
        const [leftDepth, leftNode] = dfs(node.left);
        const [rightDepth, rightNode] = dfs(node.right);
        
        // If both subtrees have the same max depth, this node is the LCA of all deepest nodes
        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node];
        }
        
        // If one subtree is deeper, return that subtree's result
        if (leftDepth > rightDepth) {
            return [leftDepth + 1, leftNode];
        } else {
            return [rightDepth + 1, rightNode];
        }
    };
    
    const [, result] = dfs(root);
    return result;
}

const x = subtreeWithAllDeepest(new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8))));
x;