def find_left_handed_seats(table):
    count = 0
    for r, row in enumerate(table):
        cols = len(row)
        for i, seat in enumerate(row):
            if seat != "U":
               continue
            if r == 0:
                if i == cols - 1 or row[i + 1] != "R":
                    count += 1
            else:
                if i == 0 or row[i - 1] != "R":
                    count += 1

    return count

print(find_left_handed_seats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]))
print(find_left_handed_seats([["U", "U", "U", "U"], ["U", "U", "U", "U"]])) 
