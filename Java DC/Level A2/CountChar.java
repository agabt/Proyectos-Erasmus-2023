public class CountChar {
    static void countChar(String funcUsrArg1, char funcUsrArg2) {
        char[] sequenceChars = funcUsrArg1.toCharArray();

        int charRepetition = 0;

        for (char letterChecked : sequenceChars) {
            if (letterChecked == funcUsrArg2) {
                charRepetition++;
            }
        }

        System.out.println("In \"" + funcUsrArg1 + "\" there is/are " + charRepetition + " letter/s");
    }

    public static void main(String[] args) {
        String usrArg1 = args[0];
        char usrArg2 = args[1].charAt(0);
        countChar(usrArg1, usrArg2);
    }
}
