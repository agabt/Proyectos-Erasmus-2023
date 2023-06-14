function arithmetic(digit1, digit2, action) {
    if (action == "+") {
        return digit1 + digit2;

    } else if (action == "-") {
        return digit1 - digit2;

    } else if (action == "*") {
        return digit1 * digit2;

    } else if (action == "/") {
        return digit1 / digit2;

    } else {
        return "You didn't introduced the correct action"

    }
}

console.log(arithmetic(3, 4, "+"))