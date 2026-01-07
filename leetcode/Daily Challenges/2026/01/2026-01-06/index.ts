function maxLevelSum(root: TreeNode | null): number {
    if (root === null) return 0;
    
    let maxSum: number = -Infinity;
    let maxLevel: number = 1;
    let level: number = 1;
    
    const queue: TreeNode[] = [root];
    let queueIndex = 0;
    
    while (queueIndex < queue.length) {
        const levelSize = queue.length - queueIndex;
        let levelSum = 0;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue[queueIndex++];
            levelSum += node.val;
            
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = level;
        }
        
        level++;
    }
    
    return maxLevel;
}

const x = maxLevelSum([1,7,0,7,-8,null,null]);
x;