public class Main {
    public static void main(String[] args) {

        for (String param : args) {

            double num = Double.parseDouble(param);

            if (num < 5.5) {
                System.out.println("Insufficient");
            } else {
                System.out.println("Suficient");
            }
        }

    }
}