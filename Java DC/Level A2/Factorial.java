public class Factorial {
    public int calcFactorial(int number) {
        int calc = number;

        for (int i = number - 1; i > 0; i--) {
            calc *= i;
        }

        return calc;
    }
}
