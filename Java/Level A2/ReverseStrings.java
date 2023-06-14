public class ReverseStrings {
    static void reverseString(String funcUsrArg1) {
        String reversedString = "";
        for (int i = 0; i < funcUsrArg1.length(); i++) {
            reversedString = funcUsrArg1.charAt(i) + reversedString;
        }

        System.out.println(reversedString);
    }

    public static void main(String[] args) {
        String usrArg1 = args[0];

        reverseString(usrArg1);
    }
}
