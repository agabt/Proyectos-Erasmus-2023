public class MultiplicationAsker {
    public static void main(String[] args) {
        Multiplication num = new Multiplication();

        System.out.println(num.multiply(3, 5));
        System.out.println(num.multiply(5, 7));
        System.out.println(num.multiply(1, 1));
        System.out.println(num.multiply(1, 7));
        System.out.println(num.multiply(7, 1));
        System.out.println(num.multiply(6, 100));
        System.out.println(num.multiply(0, 5));
    }
}
