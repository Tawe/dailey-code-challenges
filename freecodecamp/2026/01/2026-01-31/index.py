ZODIAC_RANGES = [
    (3, 21, 4, 19, "Aries"),
    (4, 20, 5, 20, "Taurus"),
    (5, 21, 6, 20, "Gemini"),
    (6, 21, 7, 22, "Cancer"),
    (7, 23, 8, 22, "Leo"),
    (8, 23, 9, 22, "Virgo"),
    (9, 23, 10, 22, "Libra"),
    (10, 23, 11, 21, "Scorpio"),
    (11, 22, 12, 21, "Sagittarius"),
    (1, 20, 2, 18, "Aquarius"),
    (2, 19, 3, 20, "Pisces"),
]


def get_sign(date_str):
    _, month_str, day_str = date_str.split("-")
    month = int(month_str)
    day = int(day_str)

    if (month == 12 and day >= 22) or (month == 1 and day <= 19):
        return "Capricorn"

    for start_m, start_d, end_m, end_d, sign in ZODIAC_RANGES:
        if (month == start_m and day >= start_d) or (month == end_m and day <= end_d):
            return sign
    return "Capricorn"

print(get_sign("2026-01-20"))