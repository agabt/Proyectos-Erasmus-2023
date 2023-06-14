public class DivisibleNum {
    public static void main(String[] args) {

        int num1 = Integer.parseInt(args[0]);
        int num2 = Integer.parseInt(args[1]);

        if (num1 % num2 == 0) {
            System.out.println("Divisor");
        } else {
            System.out.println("No divisor");
        }
    }
}
