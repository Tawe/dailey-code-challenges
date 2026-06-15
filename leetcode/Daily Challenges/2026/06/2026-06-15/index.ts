class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head?.next) return null;

    let prev: ListNode | null = head;
    let slow: ListNode | null = head.next;
    let fast: ListNode | null = head.next.next;

    while (fast?.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    prev!.next = slow!.next;
    return head;
}

function toArray(head: ListNode | null): number[] {
    const result: number[] = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

function fromArray(nums: number[]): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy;
    for (const n of nums) {
        curr.next = new ListNode(n);
        curr = curr.next;
    }
    return dummy.next;
}

console.log(toArray(deleteMiddle(fromArray([1, 3, 4, 7, 1, 2, 6])))); // [1,3,4,1,2,6]
console.log(toArray(deleteMiddle(fromArray([1, 2, 3, 4])))); // [1,2,4]
console.log(toArray(deleteMiddle(fromArray([2, 1])))); // [2]
