def is_sorted(arr):
    return "Ascending" if arr == sorted(arr) else "Descending" if arr == sorted(arr, reverse=True) else "Not sorted"

print(is_sorted([1, 2, 3, 4, 5]))
print(is_sorted([5, 4, 3, 2, 1]))
print(is_sorted([1, 3, 2, 4, 5]))