def get_number_of_plants(field_size, unit, crop):
    crop_space = {
        "corn": 1,
        "wheat": 0.1,
        "soybeans": 0.5,
        "tomatoes": 0.25,
        "lettuce": 0.2
    }

    if unit == "acres":
        field_size *= 4046.86
    elif unit == "hectares":
        field_size *= 10000

    return int(field_size / crop_space[crop])

print(get_number_of_plants(1, "acres", "corn"))