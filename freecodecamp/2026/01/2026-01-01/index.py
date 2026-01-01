def resolution_streak(days):
    for i, day in enumerate(days):
        if day[0] < 10000 or day[1] > 120 or day[2] < 5:
            return f"Resolution failed on day {i + 1}: {i} day streak."
    return f"Resolution on track: {len(days)} day streak."

print(resolution_streak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]))
