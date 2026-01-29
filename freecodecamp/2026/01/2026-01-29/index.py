import re
def separate_letters_and_numbers(s):
    return re.sub(r'([a-zA-Z])([0-9])', r'\1-\2', s)

print(separate_letters_and_numbers("a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v22w23x24y25z26"))
