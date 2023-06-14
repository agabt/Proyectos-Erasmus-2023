function arithmetic(digit1, digit2, action) {
    switch(action) {
        case '+':
            return digit1 + digit2;
            
        case '-':
            return digit1 - digit2;

        case '*':
            return digit1 * digit2;

        case '/':
            return digit1 / digit2;

        default:
            return "You didn't introduced the correct action"
            
    }
}

console.log(arithmetic(3, 4, "+"))