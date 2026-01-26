def fizz_buzz_mini(n):
    if n % 3 == 0 and n % 5 == 0 :
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return str(n)

print(fizz_buzz_mini(4))