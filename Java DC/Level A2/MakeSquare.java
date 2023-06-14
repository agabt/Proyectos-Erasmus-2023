public class MakeSquare {
    static String makeSquare() {
        String square = "";
        for (int i = 0; i < 5; i++) {
            square += "+++++ \n";
        }

        return square;
    }
    public static void main(String[] args) {
        System.out.println(makeSquare());
    }
}
