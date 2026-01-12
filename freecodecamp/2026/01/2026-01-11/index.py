def golf_score(par, strokes):
    if strokes == 1:
        return "Hole in one!"
    
    score_map = {
        -2: "Eagle",
        -1: "Birdie",
        0: "Par",
        1: "Bogey",
        2: "Double bogey"
    }
    
    return score_map[strokes - par]


print(golf_score(4, 1))
print(golf_score(4, 2))
print(golf_score(4, 3))
print(golf_score(4, 4))
print(golf_score(4, 5))
print(golf_score(4, 6))