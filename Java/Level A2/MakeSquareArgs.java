public class MakeSquareArgs {
    static String makeSquare(int funcUsrArgs1, int funcUsrArgs2) {
        String square = "";
        for (int i = 0; i < funcUsrArgs1; i++) {
            for (int j = 0; j < funcUsrArgs2; j++) {
                square += "+";
            }
            square += "\n";
        }

        return square;
    }
    public static void main(String[] args) {
        int usrArg1 = Integer.parseInt(args[0]);
        int usrArg2 = Integer.parseInt(args[1]);

        System.out.println(makeSquare(usrArg1, usrArg2));
    }
}
