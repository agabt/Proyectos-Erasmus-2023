public class Multiplication {
    public int multiply(int number, int times) {
        if (times == 0 || number == 0) {
            return 0;

        } else if (number == 1) {
            return times;

        } else if (times == 1) {
            return number;
            
        } else {
            return multiply(number, times - 1) + number;
        }
    }
}
