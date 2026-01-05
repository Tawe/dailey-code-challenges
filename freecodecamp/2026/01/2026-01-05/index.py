def tire_status(pressures_psi, range_bar):
    BAR_TO_PSI = 14.5038
    min_psi = range_bar[0] * BAR_TO_PSI
    max_psi = range_bar[1] * BAR_TO_PSI
    status = []
    
    for pressure in pressures_psi:
        if pressure < min_psi:
            status.append("Low")
        elif pressure > max_psi:
            status.append("High")
        else:
            status.append("Good")
    return status

print(tire_status([32, 28, 35, 29], [2, 3]))