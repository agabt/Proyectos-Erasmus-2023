public class Faculty {
    public static void main(String[] args) {

        int num = Integer.parseInt(args[0]);
        int i = 1;
        int operation = 1;

        while (i <= num) {
            operation *= i;
            i++;
        }

        System.out.println(operation);
    }
}
