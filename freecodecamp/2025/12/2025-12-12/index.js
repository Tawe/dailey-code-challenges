function updateInventory(inventory, shipment) {
    // Map item name -> index in inventory
    const indexByItem = new Map();

    for (let i = 0; i < inventory.length; i++) {
        const itemName = inventory[i][1];
        indexByItem.set(itemName, i);
    }
    for (const [qty, item] of shipment) {
        if (indexByItem.has(item)) {
            const idx = indexByItem.get(item);
            inventory[idx][0] += qty;
        } else {
            inventory.push([qty, item]);
            indexByItem.set(item, inventory.length - 1);
        }
    }

    return inventory;
}

const x = updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]) 
x;  