def get_bingo_letter(n):
    if n >= 1 and n <= 15:
        return "B"
    elif n >= 16 and n <= 30:
        return "I"
    elif n >= 31 and n <= 45:
        return "N"
    elif n >= 46 and n <= 60:
        return "G"
    elif n >= 61 and n <= 75:
        return "O"
    return n

print(get_bingo_letter(1))
print(get_bingo_letter(16))
print(get_bingo_letter(31))
print(get_bingo_letter(46))
print(get_bingo_letter(61))