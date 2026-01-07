function maxProduct(root: TreeNode | null): number {
    if (!root) return 0;
    const MOD = 1000000007n;
    const totalSum = (function sum(node: TreeNode | null): bigint {
        if (!node) {return 0n;}
        return BigInt(node.val) + sum(node.left) + sum(node.right);
    })(root);
    
    let best: bigint = 0n;

    (function dfs(node: TreeNode | null): bigint {
        if (!node) return 0n;

        const left = dfs(node.left);
        const right = dfs(node.right);
        const sub = BigInt(node.val) + left + right;

        const product = sub * (totalSum - sub);
        if (product > best) best = product;

        return sub;
    })(root);

    return Number(best % MOD);
}

