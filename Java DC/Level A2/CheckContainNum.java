public class CheckContainNum {
    public static void main(String[] args) {
        Test checkNum = new Test();

        String usrArg1 = args[0];
        Double usrArg2 = Double.parseDouble(args[1]);
        
        System.out.println(checkNum.containsNumbers(usrArg1));
        System.out.println(checkNum.getNumbers(usrArg1));
        System.out.println(checkNum.countDecimals(usrArg2));
    }
}
