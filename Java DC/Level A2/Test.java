public class Test {
    public boolean containsNumbers(String funcUsrArg1) {
        boolean numOrNot = false;

        for (int i = 0; i <= 9; i++) {
            String iString = "" + i;
            if (funcUsrArg1.contains(iString)) {
                numOrNot = true;
            }
        }

        return numOrNot;
    }

    public String getNumbers(String funcUsrArg1) {
        String numbersOfString = "";
        for (int i = 0; i <= 9; i++) {
            String iString = "" + i;
            if (funcUsrArg1.contains(iString)) {
                numbersOfString += iString;
            }
        }

        return numbersOfString;
    }

    public int countDecimals(Double funcUsrArg2) {
        String funcUsrArg2String = "" + funcUsrArg2;
        int decimals = funcUsrArg2String.length() - 2;
        return decimals;
    }
}
